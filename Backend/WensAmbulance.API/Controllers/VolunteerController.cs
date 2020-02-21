using System.Collections.Generic;
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
                Id = user.Id,
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
        public async Task<ActionResult<List<UserDto>>> GetAllVolunteers()
        {
            var volunteers = await _userManager.GetUsersInRoleAsync(Role.Constants.Volunteer);
            var volunteersDto = new List<UserDto>();

            foreach (var user in volunteers)
            {
                volunteersDto.Add(new UserDto
                {
                    Id = user.Id,
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
                });
            }

            return Ok(volunteersDto);
        }

        [HttpPut]
        public async Task<ActionResult> UpdateVolunteer([FromBody] UserDto userDto)
        {
            var user = await _userManager.FindByIdAsync(userDto.Id);

            user.FirstName = userDto.Firstname;
            user.LastName = userDto.Lastname;
            user.UserName = userDto.Username;
            user.Address = userDto.Address;
            user.Email = userDto.Email;
            user.SSN = userDto.SSN;
            user.Certificate = userDto.Certificate;
            user.MedicalScreening = userDto.MedicalScreening;
            user.BadgeNumber = userDto.BadgeNumber;
            user.BadgeExpirationDate = userDto.BadgeExpirationDate;
            user.ShirtSize = userDto.ShirtSize;

            await _userManager.UpdateAsync(user);
            return NoContent();
        }
    }
}