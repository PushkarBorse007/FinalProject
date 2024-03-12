import Footer from "../components/Footer";
import Slider from "../components/Slice/Slider";
import { useSelector, useDispatch } from "react-redux";
import { signin } from "../Reducers/authSlice";
import axios from "axios";
import { useState, useEffect } from "react";
import config from "./config";
const logo = require("../images/image2_logo.png");
const p1 = require("../images/restaurant-branding.jpg");
const p2 = require("../images/RestaurantTech.jpg");
const p3 = require("../images/Restaurant-Franchise.jpg");
// const p4 = require("../images/Pest-Control.jpg");
// const p5 = require("../images/Refrigerator-Repair.jpg");
// const p6 = require("../images/Carrpentry.jpg");

const Home = () => {
  const dispatch = useDispatch();

  const signinStatus = useSelector(state => state.authSlice.status);
  useEffect(() => {
    //console.log("token: " + sessionStorage["token"]);
    if (sessionStorage["token"] && sessionStorage["token"].length > 0) {
      // reading the information from sesssionstorage and manually signing in user
      const user = {
        token: sessionStorage["token"],
        name: sessionStorage["username"]
      };
      dispatch(signin(user));
    }

    gethomes();
  }, []);
  const url = config.serverURL + `/customer/getCurrentUserDetails`;
  const gethomes = () => {
    axios
      .get(url, {
        headers: { Authorization: "Bearer " + sessionStorage["token"] }
      })
      .then(response => {
        const result = response.data;
        console.log(result);
      });
  };
  return (
    <div className="slider" > 
      <div className="load">
        {/* <Slider /> */}
        <center>
          <p> </p>
          {" "}<h2 style={{ color: "white" }}>Welcome to Restaurant Management Services</h2>
        </center>
        <div className="content">
          <div className="principal">
            <h2 style={{ color: "white" }}>
              <strong>Behind Every Great Meal, Expert Management</strong>
            </h2>

            <p
              style={{
                color: "white",
                fontFamily: "Arial",
                fontWeight: 600,
                marginTop: 10,
                fontSize: "25px"
              }}
            >Your Satisfaction, Our Managed Commitment
               <br />
              To our detailed system of providing services
            </p>
          </div>
        </div>
        <div style={{ marginTop: -15, textAlign: "center" }}>
          <br />
          <br />
          <h3 style={{ color: "white" }}>Our Popular Restaurant mng Services</h3>
          <br /> <br />
          <div className="container">
            <div className="row">
              <div className="col-sm">
                <div className="card" style={{ marginTop: 20, border: 0 }}>
                  <img
                    className="card-img-top"
                    src={p1}
                    alt="Card image cap"
                    height="200px"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Restaurant Branding</h5>
                    <p className="card-text">
                      <p>
                        {" "} <s></s>
                      </p>
                      Restaurant Branding Services
                    </p>
                  </div>
                </div>{" "}
              </div>
              <div className="col-sm">
                <div className="card" style={{ marginTop: 20, border: 0 }}>
                  <img
                    className="card-img-top"
                    src={p2}
                    alt="Card image cap"
                    height="200px"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Technology</h5>
                    <p className="card-text">
                      <s></s>
                      <p>Tech Services</p>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm">
                <div className="card" style={{ marginTop: 20, border: 0 }}>
                  <img
                    className="card-img-top"
                    src={p3}
                    alt="Card image cap"
                    height="200px"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Franchise Distribution</h5>
                    <p className="card-text">
                      <s></s>
                      <p>Franchise Distribution</p>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};
export default Home;

// const Home = () => {
// return (
//     <div>
//       <Slider />
//       <div style={{ marginTop: 500, textAlign: "center" }}>
//         <h3>Our Popular Home Services</h3>
//         <br /> <br />
//         <table>
//           <tr>
//             <td>
//               <img
//                 src={p1}
//                 style={{
//                   width: 300,
//                   height: 250,
//                   marginRight: 200,
//                   marginLeft: 10
//                 }}
//               />
//             </td>
//             <td>
//               <img
//                 src={p2}
//                 style={{
//                   width: 300,
//                   height: 250,
//                   marginRight: 200,
//                   marginLeft: 10
//                 }}
//               />
//             </td>
//             <td>
//               <img
//                 src={p3}
//                 style={{
//                   width: 300,
//                   height: 250,
//                   marginRight: 200,
//                   marginLeft: 10
//                 }}
//               />
//             </td>
//           </tr>
//           <tr>
//             <td>
//               <h5>Computer Repairing</h5>
//             </td>
//             <td>
//               <h5>Painting</h5>
//             </td>
//             <td>
//               <h5>Housekeeping</h5>
//             </td>
//           </tr>
//           <tr>
//             <td>
//               ₹ 500-10,500 <s>₹ 12,995.00</s>
//             </td>
//             <td>
//               ₹ 5000-25,000 <s>₹ 35,995.00</s>
//             </td>
//             <td>
//               ₹ 2,500.00-5 <s>₹ 10,995.00</s>
//             </td>
//           </tr>
//           <tr>
//             <td>Repair your New as well as Old Laptop.</td>
//             <td>Painting Service</td>
//             <td>Housekeeping</td>
//           </tr>
//           <br />
//           <tr>
//             <td>
//               <img
//                 src={p4}
//                 style={{
//                   width: 300,
//                   height: 250,
//                   marginLeft: 200,
//                   marginRight: 10
//                 }}
//               />
//             </td>
//             <td>
//               <img
//                 src={p5}
//                 style={{
//                   width: 300,
//                   height: 250,
//                   marginRight: 200,
//                   marginLeft: 10
//                 }}
//               />
//             </td>
//             <td>
//               <img
//                 src={p6}
//                 style={{
//                   width: 300,
//                   height: 250,
//                   marginRight: 200,
//                   marginLeft: 10
//                 }}
//               />
//             </td>
//           </tr>
//           <tr>
//             <td>
//               <h5>Paste-Control</h5>
//             </td>
//             <td>
//               <h5>Refrigerator Service</h5>
//             </td>
//             <td>
//               <h5>Carpentry Service</h5>
//             </td>
//           </tr>
//           <tr>
//             <td>
//               ₹ 3500.00-5000.00 <s>₹ 12,995.00</s>
//             </td>
//             <td>
//               ₹ 500.00-5000.00 <s>₹ 15,995.00</s>
//             </td>
//             <td>
//               ₹ 2000.00-1,10,000.00 <s>₹ 1,50,000.00</s>
//             </td>
//           </tr>
//           <tr>
//             <td>Paste-Control</td>
//             <td>Refrigerator Service</td>
//             <td>Carpentry Service</td>
//           </tr>
//         </table>
//       </div>

//       <div style={{ marginTop: -950 }}>
//         <Footer />
//       </div>
//     </div>
//   );
// };
// export default Home;
