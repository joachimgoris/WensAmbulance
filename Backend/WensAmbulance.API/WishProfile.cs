using AutoMapper;
using WensAmbulance.Domain;
using WensAmbulance.Domain.Dto;

namespace WensAmbulance.API
{
    public class WishProfile : Profile
    {
        public WishProfile()
        {
            CreateMap<Wish, WishDto>();
        }
    }
}