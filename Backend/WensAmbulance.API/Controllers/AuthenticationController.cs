using System;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using Swashbuckle.AspNetCore.Annotations;
using WensAmbulance.Domain;
using WensAmbulance.Domain.Dto;

namespace WensAmbulance.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticationController : ControllerBase
    {
        private readonly IOptions<TokenSettings> _tokenSettings;
        private readonly UserManager<User> _userManager;
        private readonly RoleManager<Role> _roleManager;

        public AuthenticationController(UserManager<User> userManager, RoleManager<Role> roleManager, IOptions<TokenSettings> tokenSettings)
        {
            _tokenSettings = tokenSettings;
            _userManager = userManager;
            _roleManager = roleManager;
        }

        [HttpPost("register")]
        [SwaggerOperation(nameof(Register))]
        public async Task<IActionResult> Register([FromBody] RegisterModel model)
        {   

            var user = await _userManager.FindByEmailAsync(model.Email);

            if (user != null)
            {
                return BadRequest();
            }

            user = new User
            {
                UserName = $"{model.FirstName}_{model.LastName}",
                Email = model.Email,
                SecurityStamp = Guid.NewGuid().ToString(),
                FirstName = model.FirstName,
                LastName = model.LastName,
                Address = model.Address,
                SSN = model.SSN,
                Certificate = model.Certificate,
                MedicalScreening = model.MedicalScreening,
                BadgeNumber = model.BadgeNumber,
                BadgeExpirationDate = model.BadgeExpirationDate,
                ShirtSize = model.ShirtSize,
            };

            var result = await _userManager.CreateAsync(user, model.Password);

            if (result.Succeeded)
            {

                var role1 = Role.Constants.Volunteer;
                await EnsureRoleExists(role1);
                await _userManager.AddToRoleAsync(user, role1);

                return Ok(new { Username = user.UserName });
            }

            foreach (var error in result.Errors)
            {
                ModelState.AddModelError(error.Code, error.Description);
            }

            return BadRequest(ModelState);
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody]LoginModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var user = await _userManager.FindByEmailAsync(model.Email);

            if (user == null)
            {
                return Unauthorized();
            }

            if (!await _userManager.CheckPasswordAsync(user, model.Password))
            {
                return Unauthorized();
            }

            var token = await CreateJwtToken(user);

            return Ok(new { signinToken = token, });
        }

        private async Task<string> CreateJwtToken(User user)
        {
            var userClaims = await _userManager.GetClaimsAsync(user);
            var allClaims = new[]
            {
                new Claim(JwtRegisteredClaimNames.NameId, user.Id.ToString()),
                new Claim(JwtRegisteredClaimNames.Sub, user.UserName),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(JwtRegisteredClaimNames.Email, user.Email)
            }
            .Union(userClaims)
            .ToList();

            var userRoles = await _userManager.GetRolesAsync(user);
            foreach (var role in userRoles)
            {
                var roleClaim = new Claim(ClaimTypes.Role, role);
                allClaims.Add(roleClaim);
            }

            var keyBytes = Encoding.UTF8.GetBytes(_tokenSettings.Value.Key);
            var symmetricSecurityKey = new SymmetricSecurityKey(keyBytes);
            var signinCredentials = new SigningCredentials(symmetricSecurityKey, SecurityAlgorithms.HmacSha256);

            var jwtSecurityToken = new JwtSecurityToken(
                issuer: _tokenSettings.Value.Issuer,
                audience: _tokenSettings.Value.Audience,
                claims: allClaims,
                expires: DateTime.UtcNow.AddMinutes(_tokenSettings.Value.ExpirationTimeInMinutes),
                signingCredentials: signinCredentials
                );

            string encryptedToken = new JwtSecurityTokenHandler().WriteToken(jwtSecurityToken);

            return encryptedToken;
        }

        private async Task EnsureRoleExists(string role)
        {
            if (!await _roleManager.RoleExistsAsync(role))
            {
                await _roleManager.CreateAsync(new Role
                {
                    Id = Guid.NewGuid().ToString(),
                    Name = role,
                    NormalizedName = role.ToUpper()
                });
            }
        }
    }
}