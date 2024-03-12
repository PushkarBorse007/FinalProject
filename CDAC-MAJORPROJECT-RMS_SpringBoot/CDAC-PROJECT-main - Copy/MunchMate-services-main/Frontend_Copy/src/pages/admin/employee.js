import {Link, useNavigate } from "react-router-dom";

const Employee = () => {
  const navigate = useNavigate();

  const addEmployee = () => {
    //will transfer to add employee page to add employee details by the admon
    navigate("/add-employee");
  };
  const listEmployee = () => {
    //will transfer to add employee page to add employee details by the admon
    navigate("/list-employee");
  };

  return (
    <div className="container">
      <Link className="nav-link active" style={{color:"white"}} aria-current="page" to="/admin">
      Admin Home
    </Link>
      <h1 style={{ textAlign: "center", color: "white" }}>Staff</h1>
      <div className="row">
        <div
          className="card col mb-4"
          style={{
            margin: 20,
            display: "inline-block",
            cursor: "pointer",
            border: 0,
            marginTop: 70,
          }}
        >
          <img
            src="https://thumbs.dreamstime.com/b/waiter-restaurant-avatar-profession-woman-inside-home-scenery-vector-illustration-graphic-design-142372513.jpg"
            alt="employee image"
            className="rounded mx-auto d-block"
            style={{ height: 300, width: 300, display: "block" }}
          />
          <div className="card-body">
            <button onClick={addEmployee} style={styles.Button}>
              Add Staff
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
            marginTop: 70,
          }}
        >
          <img
            src="https://img.freepik.com/free-vector/young-people-avatar-silhouette_24877-63770.jpg?size=626&ext=jpg"
            alt="list of employee image"
            className="rounded mx-auto d-block"
            style={{ height: 300, width: 300, display: "block" }}
          />
          <div className="card-body" width="300">
            <button onClick={listEmployee} style={styles.Button}>
              Staff List
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
    backgroundColor: "yellow",
    color: "black",
    borderRadius: 5,
    border: "none",
    marginTop: 10,
  },
};

export default Employee;
