using System;
using System.ComponentModel.DataAnnotations;

namespace WensAmbulance.Domain.Dto
{
    public class RegisterModel
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        public string Password { get; set; }

        [Required]
        public string FirstName { get; set; }

        [Required]
        public string LastName { get; set; }

        public string Address { get; set; }

        public string SSN { get; set; }

        public string Certificate { get; set; }

        public DateTime MedicalScreening { get; set; }

        public string BadgeNumber { get; set; }

        public DateTime BadgeExpirationDate { get; set; }

        public string ShirtSize { get; set; }
    }
}
