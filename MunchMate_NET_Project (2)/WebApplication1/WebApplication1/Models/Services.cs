using System.ComponentModel.DataAnnotations;

namespace WebApplication1.Models
{
    public class Services
    {
        public Guid Id { get; set; }


        [Required(ErrorMessage = "The {0} field is required.")]
        [RegularExpression("^[A-Za-z ]*$", ErrorMessage = "Only alphabetic characters are allowed.")]
        public string Name { get; set; }
        public string Description { get; set; }

        [Required(ErrorMessage = "The {0} field is required.")]
        [Range(2000, int.MaxValue, ErrorMessage = "Minimum charges should be 2000")]
        public int Charge { get; set; }

        [Required(ErrorMessage = "The {0} field is required.")]
        [Range(18, int.MaxValue, ErrorMessage = "Tax should be >=18%")]
        public int Tax { get; set; }


    }
}
