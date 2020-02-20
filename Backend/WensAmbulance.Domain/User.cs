using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;

namespace WensAmbulance.Domain
{
    public class User : IdentityUser
    {
        public string Address { get; set; }

        public string SSN { get; set; }

        public string Certificate { get; set; }

        public DateTime MedicalScreening { get; set; }

        public string BadgeNumber { get; set; }

        public DateTime BadgeExpirationDate { get; set; }

        public string ShirtSize { get; set; }

        public List<UserWish> UserWishes { get; set; }
    }
}
