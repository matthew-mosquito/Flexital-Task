using System.ComponentModel.DataAnnotations;

namespace FlexitolMediPediCampaign.Models
{
    public class formModel
    {

        public int Id { get; set; }

        [Display(Name = "Job title")]
        [Required]
        public string jobTitle { get; set; }

        [Display(Name = "First name")]
        [Required]
        public string firstName { get; set; }

        [Display(Name = "Last name")]
        [Required]
        public string lastName { get; set; }

        [Display(Name = "Email address")]
        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Display(Name = "Address line 1")]
        [Required]
        public string AddressLine1 { get; set; }

        [Display(Name = "Address line 2")]
        public string AddressLine2 { get; set; }

        [Display(Name = "Post code")]
        [Required]
        public string postCode { get; set; }
    }
}