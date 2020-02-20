using Microsoft.AspNetCore.Identity;

namespace WensAmbulance.Domain
{
    public class Role : IdentityRole<string>
    {
        public static class Constants
        {
            public const string Admin = "Admin";
            public const string Volunteer = "Volunteer";
        }
    }
}
