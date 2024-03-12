using System.ComponentModel.DataAnnotations;

namespace WebApplication1.Models
{
    public class Staff
    {
        public Guid Id { get; set; }


        [Required(ErrorMessage = "The {0} field is required.")]
        [RegularExpression("^[A-Za-z]*$", ErrorMessage = "Only alphabetic characters are allowed.")]
        public string FirstName { get; set; }


        [Required(ErrorMessage = "The {0} field is required.")]
        [RegularExpression("^[A-Za-z]*$", ErrorMessage = "Only alphabetic characters are allowed.")]
        public string LastName { get; set; }

        [Required(ErrorMessage = "Mobile number is required.")]
        [RegularExpression(@"^\d{10}$", ErrorMessage = "Invalid Mobile Number. It should be a 10-digit number.")]
        public int Mobile { get; set; }


        [Required(ErrorMessage = "Email address is required.")]
        [RegularExpression(@"^[a-zA-Z][a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$", ErrorMessage = "Invalid Email Address. It should start with alphabetic characters.")]
        [Display(Name = "Email")]
        public string Email { get; set; }


        [Required(ErrorMessage = "The {0} field is required.")]
        [RegularExpression("^[A-Za-z ]*$", ErrorMessage = "Only alphabetic characters are allowed.")]
        public string ServiceName { get; set; }


    }
}
