using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using WensAmbulance.Domain;

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
        public async Task<ActionResult<User>> GetById(string volunteerId)
        {
            return Ok(await _userManager.FindByIdAsync(volunteerId));
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