using AutoMapper;

namespace WensAmbulance.API
{
    public class AutoMapperProfile: Profile
    {
        public AutoMapperProfile()
        {
            new WishProfile();
        }
    }
}