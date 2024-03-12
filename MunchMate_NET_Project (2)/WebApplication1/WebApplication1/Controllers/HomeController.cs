using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }
        public IActionResult AboutUs()
        {
            return View();
        }

        public IActionResult Services()
        {
            return View();
        }
        public IActionResult ContactUs()
        {
            return View();
        }

        [HttpPost]
        public IActionResult ContactUs(string firstName, string lastName, string email, string title, string message)
        {
            // Process the form submission (e.g., send email, store in database)
            // For demonstration purposes, we'll just redirect to the thank you page
            return RedirectToAction("ThankYou");
        }

        public IActionResult Submit(ContactUs model)
        {
            // Process the contact form data here (e.g., send an email, save to database)
            // You can access the form fields through the model object

            // Redirect to a thank you page or return a success message
            return RedirectToAction("ThankYou");
        }

        public IActionResult ThankYou()
        {
            return View();
        }
        public IActionResult ActiveServices()
        {
            return View();
        }


        public IActionResult Privacy()
        {
            return View();
        }



        public IActionResult Bill() { 
        
            return View();
        }

        public IActionResult Catering()
        {

            return View();
        }

        public IActionResult CustomerMng()
        {

            return View();
        }

        public IActionResult EmployeeMng()
        {

            return View();
        }

        public IActionResult Event()
        {

            return View();
        }

        public IActionResult FoodRecycle()
        {

            return View();
        }

        public IActionResult Menu()
        {

            return View();
        }

        public IActionResult Strategic()
        {

            return View();
        }

        public IActionResult FeedBack()
        {

            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
