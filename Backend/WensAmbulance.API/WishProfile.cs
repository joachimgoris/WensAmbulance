using AutoMapper;
using WensAmbulance.Domain;
using WensAmbulance.Domain.Dto;

namespace WensAmbulance.API
{
    public class WishProfile : Profile
    {
        public WishProfile()
        {
            CreateMap<Wish, WishDto>().ForMember(w => w.Id, src => src.MapFrom(dto => dto.WishId));
            CreateMap<Wish, CensoredWishDto>().ForMember(w => w.Id, src => src.MapFrom(dto => dto.WishId));
        }
    }
}