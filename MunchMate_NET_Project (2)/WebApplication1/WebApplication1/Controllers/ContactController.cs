using Microsoft.AspNetCore.Mvc;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    public class ContactController : Controller
    {
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
    }
}
