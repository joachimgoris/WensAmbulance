using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WensAmbulance.Business.Abstractions.Services;
using WensAmbulance.Domain.Dto;

namespace WensAmbulance.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WishController : ControllerBase
    {
        private readonly IWishService _wishService;

        public WishController(IWishService wishService)
        {
            _wishService = wishService;
        }

        //public async Task<ActionResult<WishDto>> GetByIdAsync(string wishId)
        //{
        //    await _wishService.GetByIdAsync(wishId);
        //}
    }
}