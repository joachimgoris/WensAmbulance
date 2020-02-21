using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using WensAmbulance.Domain;
using WensAmbulance.Domain.Dto;

namespace WensAmbulance.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VolunteerController : ControllerBase
    {
        private readonly UserManager<User> _userManager;

        public VolunteerController(UserManager<User> userManager)
        {
            _userManager = userManager;
        }

        [HttpGet("{volunteerId}")]
        public async Task<ActionResult<UserDto>> GetById(string volunteerId)
        {
            //return Ok(await _userManager.FindByIdAsync(volunteerId));
            var user = await _userManager.FindByIdAsync(volunteerId);
            var userDto = new UserDto
            {
                Firstname = user.FirstName,
                Lastname = user.LastName,
                Username = user.UserName,
                Address = user.Address,
                Email = user.Email,
                SSN = user.SSN,
                Certificate = user.Certificate,
                MedicalScreening = user.MedicalScreening,
                BadgeNumber = user.BadgeNumber,
                BadgeExpirationDate = user.BadgeExpirationDate,
                ShirtSize = user.ShirtSize,
                WishIds = null
            };

            return Ok(userDto);
        }

        [HttpGet]
        public async Task<ActionResult<User>> GetAllVolunteers()
        {
            return Ok(await _userManager.GetUsersInRoleAsync(Role.Constants.Volunteer));
        }

        [HttpPut]
        public async Task<ActionResult<User>> UpdateVolunteer([FromBody] User user)
        {
            await _userManager.UpdateAsync(user);
            return NoContent();
        }
    }
}