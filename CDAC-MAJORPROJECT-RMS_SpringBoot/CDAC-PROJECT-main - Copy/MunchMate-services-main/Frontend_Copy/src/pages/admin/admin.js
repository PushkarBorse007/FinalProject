import {useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();

  const Employee = () => {
    navigate("/employees");
    //add and remove employees
  };
  const Services = () => {
    //add and remove Services
    navigate("/services");
  };
  const Orders = () => {
    //view and accept orders
    navigate("/showallbookedservices/");
  };
  const showallfeedback = () => {
   //show all feedback 
    navigate("/showallfeedback");
  };
 
  return (
    <div className="container">
      <h1 style={{ textAlign: "center", color: "white" }}>Admin Page</h1>
      <div className="row">
        <div
          className="card col mb-4"
          style={{
            margin: 20,
            display: "inline-block",
            cursor: "pointer",
            border: 0,
            marginTop: 90
          }}
        >
          <img
            src="https://cdn3.vectorstock.com/i/1000x1000/17/12/chef-vector-34121712.jpg"
            alt="chef image"
            className="rounded mx-auto d-block"
            style={{ height: 250, width: 300, display: "block" }}
          />
          <div className="card-body">
            <button onClick={Employee} style={styles.Button}>
              Staff
            </button>
          </div>
        </div>
        <div
          className="card col mb-4  "
          style={{
            margin: 20,
            display: "inline-block",
            cursor: "pointer",
            border: 0,
            marginTop: 90
          }}
        >
          <img
            src="https://cdn5.vectorstock.com/i/1000x1000/63/44/restaurant-service-concept-vector-17976344.jpg"
            alt="Services image"
            className="rounded mx-auto d-block"
            style={{ height: 300, width: 300, display: "block" }}
          />
          <div className="card-body" width="300">
            <button onClick={Services} style={styles.Button}>
              Services
            </button>
          </div>
        </div>

        <div
          className="card col mb-4  "
          style={{
            margin: 20,
            display: "inline-block",
            cursor: "pointer",
            border: 0,
            marginTop: 90
          }}
        >
          <img
            src="https://images.squarespace-cdn.com/content/v1/5a2ac8b190bcce09e2823e47/1590518456857-X8GM8KWBPK0JWPI8Y96B/ordering-food-online_23-2147507727.jpg?format=1500w"
            alt="Orders image"
            className="rounded mx-auto d-block"
            style={{ height: 300, width: 300, display: "block" }}
          />
          <div className="card-body" width="300">
            <button onClick={Orders} style={styles.Button}>
              Booking
            </button>
          </div>
        </div>
        <div
          className="card col mb-4  "
          style={{
            margin: 20,
            display: "inline-block",
            cursor: "pointer",
            border: 0,
            marginTop: 90
          }}
        >
          <img
            src="https://media.istockphoto.com/id/1406560627/photo/we-want-your-feedback-written-in-speech-bubble-on-yellow-background.webp?b=1&s=170667a&w=0&k=20&c=3P-qH2lHbjXkUu3_U5trQfKD2BGD0EYg_B2CfnKF-Wk="
            alt="feedback image"
            className="rounded mx-auto d-block"
            style={{ height: 300, width: 300, display: "block" }}
          />
          <div className="card-body" width="300">
            <button onClick={showallfeedback} style={styles.Button}>
              Show Feedback
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  Button: {
    position: "relative",
    width: "100%",
    height: 40,
    backgroundColor: "black",
    color: "white",
    borderRadius: 5,
    border: "none",
    marginTop: 10
  }
};

export default Admin;
