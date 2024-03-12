import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import Admin from "./pages/admin/admin";
import Employee from "./pages/admin/employee";
import AddEmp from "./pages/admin/addemp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EmpList from "./pages/admin/emplist";
import AboutUs from "./pages/aboutus";
import ContactUs from "./pages/contactus";

import PrivacyPolicy from "./pages/user/PrivacyPolicy";

import AvailableServices from "./pages/user/availableservice";
import Signup from "./pages/user/signup";
import Signin from "./pages/user/signin";
import ForgotPassword from "./pages/user/forgotpassword";
import ResetPassword from "./pages/user/resetpassword";
import Search from "./pages/search";
import Service from "./pages/admin/services";
import AddService from "./pages/admin/addservice";
import ServiceList from "./pages/admin/servicelist";
import UpcomingServices from "./pages/user/upcomingservices";
import Home from "./pages/home";
import OfferZone from "./Offer/OfferZone";
import UpdateEmployee from "./pages/admin/updatemp";
import UpdateService from "./pages/admin/updateservice";
import ShowAllFeedback from "./pages/admin/showallfeedback";
import BookService from "./pages/user/bookservice";
import ShowAllBookedServices from "./pages/admin/showallbookedservices";
import UserDetails from "./pages/user/userdetails";
import ShowProfile from "./pages/user/updateuser";
import UpdateUser from "./pages/user/updateuser";
import CustOrder from "./pages/user/custorder";
import UploadImage from "./pages/admin/uploadimage";
import ShowPending from "./pages/admin/showpending";
import ShowCompleted from "./pages/admin/showcompleted";
import PaymentForm from "./pages/user/PaymentForm";
import ThankYouPage from "./pages/user/ThankYou";

import Service1 from "./pages/admin/service1";
import Service2 from "./pages/admin/service2";
import Service3 from "./pages/admin/service3";
import Service4 from "./pages/admin/service4";
import Service5 from "./pages/admin/service5";
import Service6 from "./pages/admin/service6";
import Service7 from "./pages/admin/service7";
import Service8 from "./pages/admin/service8";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/employees" element={<Employee />} />
        <Route path="/add-employee" element={<AddEmp />} />
        <Route path="/list-employee" element={<EmpList />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />

        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />

        <Route path="/home/:id" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/available-services" element={<AvailableServices />} />
        <Route path="/upcoming-services" element={<UpcomingServices />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/search" element={<Search />} />
        <Route path="/services" element={<Service />} />
        <Route path="/add-services" element={<AddService />} />
        <Route path="/services-list" element={<ServiceList />} />
        <Route path="/offerzone" element={<OfferZone />} />
        <Route path="/updateservice/:id" element={<UpdateService />} />
        <Route path="/updateemp/:id" element={<UpdateEmployee />} />
        <Route path="/showallfeedback" element={<ShowAllFeedback />} />
        <Route path="/bookservice/:id" element={<BookService/>} />
        <Route path="/showallbookedservices" element={<ShowAllBookedServices />} />
        <Route path="/availableservice/:id" element={<AvailableServices />} />
        <Route path="/userdetails/:id" element={<UserDetails/>}/>
        <Route path="/updateuser/:id" element={<UpdateUser/>}/>
        <Route path="/custorder/:id" element={<CustOrder/>}/>
        <Route path="/uploadimage/:id" element={<UploadImage/>}/>
        <Route path="/showpending" element={<ShowPending/>}/>
        <Route path="/showcompleted" element={<ShowCompleted/>}/>
        <Route path="/offerzone" element={<OfferZone/>}/>
        <Route path = "/PaymentForm" element = {<PaymentForm/>}/>

        <Route path="/ThankYouPage" element={<ThankYouPage />} />

        <Route path="/service1" element={<Service1/>}/>
        <Route path="/service2" element={<Service2/>}/>
        <Route path="/service3" element={<Service3/>}/>
        <Route path="/service4" element={<Service4/>}/>
        <Route path="/service5" element={<Service5/>}/>
        <Route path="/service6" element={<Service6/>}/>
        <Route path="/service7" element={<Service7/>}/>
        <Route path="/service8" element={<Service8/>}/>
     
      </Routes>
      <ToastContainer position="top-right" autoClose={1500} />
    </BrowserRouter>
  );
}

export default App;
