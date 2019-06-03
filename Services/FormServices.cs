using FlexitolMediPediCampaign.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace FlexitolMediPediCampaign.Services
{
    public class FormServices
    {

        private SqlConnection con;
        private void connection()
        {
            string constring = ConfigurationManager.ConnectionStrings["DefaultConnection"].ToString();
            con = new SqlConnection(constring);
        }
        public bool Add_to_db(formModel model)
        {
            connection();

            string query = "Insert into CompetitionEntries values" +
                "(@FirstName, @LastName, @JobTitle, @Email, @AddressLine1," +
                "@AddressLine2, @PostCode, @TermsAndConditions, @SubscribeMailingList)";

            SqlCommand cmd = new SqlCommand(query, con);

            cmd.Parameters.AddWithValue("@Id", model.Id);
            cmd.Parameters.AddWithValue("@FirstName", model.firstName);
            cmd.Parameters.AddWithValue("@LastName", model.lastName);
            cmd.Parameters.AddWithValue("@JobTitle", model.jobTitle);
            cmd.Parameters.AddWithValue("@Email", model.Email);
            cmd.Parameters.AddWithValue("@AddressLine1", model.AddressLine1);
            cmd.Parameters.AddWithValue("@AddressLine2", model.AddressLine2);
            cmd.Parameters.AddWithValue("@PostCode", model.postCode);
            cmd.Parameters.AddWithValue("@TermsAndConditions", model.TermsAndConditions);
            cmd.Parameters.AddWithValue("@SubscribeMailingList", model.Subscribe);

            con.Open();
            var i = cmd.ExecuteNonQuery();
            con.Close();

            return true;
            
        }
    }
}