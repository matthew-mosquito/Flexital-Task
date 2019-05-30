using System.ComponentModel.DataAnnotations;

namespace FlexitolMediPediCampaign.Models
{
    public class formModel
    {

        public int Id { get; set; }

        [StringLength(40)]
        [Display(Name = "Job title")]
        [Required]
        public string jobTitle { get; set; }

        [StringLength(40)]
        [Display(Name = "First name")]
        [Required]
        public string firstName { get; set; }

        [StringLength(40)]
        [Display(Name = "Last name")]
        [Required]
        public string lastName { get; set; }

        [StringLength(40)]
        [Display(Name = "Email address")]
        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [StringLength(30)]
        [Display(Name = "Address line 1")]
        [Required]
        public string AddressLine1 { get; set; }

        [StringLength(30)]
        [Display(Name = "Address line 2")]
        public string AddressLine2 { get; set; }

        [StringLength(10)]
        [Display(Name = "Post code")]
        [Required]
        public string postCode { get; set; }

        [Display(Name = "Terms and Conditions")]
        public bool TermsAndConditions { get; set; }

        public bool Subscribe { get; set; }
    }
}