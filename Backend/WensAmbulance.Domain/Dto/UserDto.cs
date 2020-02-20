using System;
using System.Collections.Generic;

namespace WensAmbulance.Domain.Dto
{
    public class UserDto
    {
        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Address { get; set; }

        public string SSN { get; set; }

        public string Certificate { get; set; }

        public DateTime MedicalScreening { get; set; }

        public string BadgeNumber { get; set; }

        public DateTime BadgeExpirationDate { get; set; }

        public string ShirtSize { get; set; }

        public List<string> WishIds { get; set; }
    }
}