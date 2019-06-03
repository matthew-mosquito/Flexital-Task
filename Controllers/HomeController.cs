using FlexitolMediPediCampaign.Models;
using FlexitolMediPediCampaign.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace FlexitolMediPediCampaign.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Index(formModel model)
        {

            if (ModelState.IsValid)
            {
                FormServices customerDb = new FormServices();
                if (customerDb.Add_to_db(model))
                {
                    ModelState.Clear();
                    return View("ThankYou");
                }
            }
            return View();

        }
        public ActionResult ThankYou()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}