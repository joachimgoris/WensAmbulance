using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using WensAmbulance.Business.Abstractions.Services;
using WensAmbulance.Domain;
using WensAmbulance.Domain.Dto;

namespace WensAmbulance.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WishController : ControllerBase
    {
        private readonly IWishService _wishService;
        private readonly UserManager<User> _manager;

        public WishController(IWishService wishService, UserManager<User> manager)
        {
            _wishService = wishService;
            _manager = manager;
        }

        public async Task<ActionResult<WishDto>> GetByIdAsync(string wishId)
        {
            var wish = await _wishService.GetByIdAsync(wishId);
            var userWishes = wish.UserWishes;
            var users = new List<User>();
            userWishes.ForEach(uw => users.Add(uw.Volunteer));
            
            WishDto wishDto = new WishDto
            {
                
            };
            foreach (var user in users)
            {
                
            }
            _manager.GetUserIdAsync()
        }
    }
}