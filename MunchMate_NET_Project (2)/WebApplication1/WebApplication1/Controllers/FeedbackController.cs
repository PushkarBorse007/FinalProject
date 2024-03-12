using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using Webapplication1.Models;

namespace Webapplication1.Controllers
{
    public class FeedbackController : Controller
    {
        private readonly List<Feedback> _feedbackList = new List<Feedback>(); // In real application, this should be replaced with database access

        public IActionResult Index()
        {
            return View(_feedbackList);
        }

        [HttpPost]
        public IActionResult SubmitFeedback(Feedback feedback)
        {
            // Save feedback to database or perform other actions
            _feedbackList.Add(feedback); // Add to list for demonstration
            return RedirectToAction("Index");
        }

        [HttpGet]
        public IActionResult AdminView()
        {
            // This action will render the admin view to display feedback
            return View(_feedbackList);
        }
    }
}