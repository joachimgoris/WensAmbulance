using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using WensAmbulance.Business.Abstractions.Services;
using WensAmbulance.Domain;
using WensAmbulance.Domain.Dto;

namespace WensAmbulance.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(nameof(Role.Constants.Admin))]
    public class WishController : ControllerBase
    {
        private readonly IWishService _wishService;
        private readonly UserManager<User> _manager;
        private readonly IMapper _mapper; 

        public WishController(IWishService wishService, UserManager<User> manager, IMapper mapper)
        {
            _wishService = wishService;
            _manager = manager;
            _mapper = mapper;
        }

        [HttpGet("{wishId}/censored")]
        [AllowAnonymous]
        public async Task<ActionResult<CensoredWishDto>> GetCensoredById(string wishId)
        {
            return Ok(_mapper.Map<CensoredWishDto>(await _wishService.GetByIdAsync(wishId)));
        }

        [HttpGet("/censored")]
        [AllowAnonymous]
        public async Task<ActionResult<List<CensoredWishDto>>> GetAllCensoredAsync()
        {
            var wishes = await _wishService.GetAllAsync() as List<Wish>;
            var wishesDto = new List<CensoredWishDto>();

            foreach (var wish in wishes)
            {

            }
        }

        [HttpGet("{wishId}")]
        public async Task<ActionResult<WishDto>> GetByIdAsync(string wishId)
        {
            var wish = await _wishService.GetByIdAsync(wishId);
            var dto = _mapper.Map<WishDto>(wish);
            dto.VolunteerIds = new List<string>();

            foreach (var item in wish.UserWishes)
            {
                dto.VolunteerIds.Add(item.VolunteerId);
            }

            return dto;
        }

        [HttpGet]
        public async Task<ActionResult<List<WishDto>>> GetAllAsync()
        {
            var wishes = await _wishService.GetAllAsync() as List<Wish>;
            var wishesDto = new List<WishDto>();

            foreach (var wish in wishes)
            {
                var dto = _mapper.Map<WishDto>(wish);
                dto.VolunteerIds = new List<string>();
                foreach (var item in wish.UserWishes)
                {
                    dto.VolunteerIds.Add(item.VolunteerId);
                }
                wishesDto.Add(dto);
            }

            return Ok(wishesDto);
        }

        [HttpPost]
        public async Task<ActionResult<WishDto>> AddAsync([FromBody] WishDto wishDto)
        {
            var wish = new Wish
            {
                Date = wishDto.Date,
                Description = wishDto.Description,
                Location = wishDto.Location,
                Title = wishDto.Title,
                RequestorEmail = wishDto.RequestorEmail,
                RequestorPhoneNumber = wishDto.RequestorPhoneNumber,
                WishId = wishDto.WishId,
                WishRequestor = wishDto.WishRequestor,
                UserWishes = new List<UserWish>()
            };
            foreach (var volunteerId in wishDto.VolunteerIds)
            {
                wish.UserWishes.Add(new UserWish
                {
                    VolunteerId = volunteerId,
                    Volunteer = await _manager.FindByIdAsync(volunteerId),
                    Wish = await _wishService.GetByIdAsync(wishDto.WishId),
                    WishId = wishDto.WishId
                });
            }
            await _wishService.AddAsync(wish);


            return Ok();
        }

        [HttpDelete("{wishId}")]
        public async Task<ActionResult> DeleteAsync(string wishId)
        {
            await _wishService.DeleteAsync(wishId);
            return NoContent();
        }

        [HttpPut]
        public async Task<ActionResult> PutAsync([FromBody] WishDto wishDto)
        {
            return Ok("Endpoint works.");
        }
    }
}