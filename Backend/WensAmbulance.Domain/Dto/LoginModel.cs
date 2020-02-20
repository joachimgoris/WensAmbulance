using System.ComponentModel.DataAnnotations;

namespace WensAmbulance.Domain.Dto
{
    public class LoginModel
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        public string Password { get; set; }
    }
}
