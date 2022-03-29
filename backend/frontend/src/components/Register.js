import React, { useState } from "react";
import "../assets/css/register.css";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Register = () => {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    Name: "",
    Email: "",
    Phone: "",
    State: "",
    District: "",
    Address: "",
    Pincode: "",
    Password: "",
  });

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const toRegister = async (e) => {
    e.preventDefault();
    const { Name, Email, Phone, State, District, Address, Pincode, Password } =
      user;
    const res = await fetch("/registers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Name,
        Email,
        Phone,
        State,
        District,
        Address,
        Pincode,
        Password,
      }),
    });
    const result = await res.json();
    console.log(result.status);
    if (res.status === 422 || !result) {
      window.alert("Data not fill properly or Email already Exist");
    } else {
      window.alert("Registration Successful");
      navigate("/");
    }
  };
  return (
    <>
      <section id="register">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3 login-div bg-white">
              <h2 className="mb-3">Laundry Service</h2>
              <h4 className="mb-5">Doorstep Wash & Dryclean Service</h4>
              <h6 className="mb-3">Already Have An Account?</h6>
              <button className="btn btn-regular">
                <NavLink to="/">Sign In</NavLink>
              </button>
            </div>
            <div className="col-md-9 register-div">
              <h3>Register</h3>
              <form method="post">
                <div className="row">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name*"
                      value={user.Name}
                      onChange={handleInputs}
                      name="Name"
                      required
                    />
                  </div>
                  <div class="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email*"
                      value={user.Email}
                      onChange={handleInputs}
                      name="Email"
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Phone*"
                      value={user.Phone}
                      onChange={handleInputs}
                      name="Phone"
                      required
                    />
                  </div>
                  <div class="col">
                    <select
                      id="inputState"
                      class="form-select"
                      name="State"
                      value={user.State}
                      onChange={handleInputs}
                      required
                    >
                      <option selected>--Select State--</option>
                      <option>Andhra Pradesh</option>
                      <option>Chhatisgarh</option>
                      <option>Haryana</option>
                      <option>Meghalaya</option>
                      <option>Rajasthan</option>
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <select
                      id="inputState"
                      class="form-select"
                      name="District"
                      value={user.District}
                      onChange={handleInputs}
                      required
                    >
                      <option selected>--Select District--</option>
                      <option>Jaipur</option>
                      <option>Ajmer</option>
                      <option>Udaipur</option>
                      <option>Jodhpur</option>
                      <option>Mount-Abu</option>
                    </select>
                  </div>
                  <div class="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Address*"
                      value={user.Address}
                      onChange={handleInputs}
                      name="Address"
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Pincode*"
                      value={user.Pincode}
                      onChange={handleInputs}
                      name="Pincode"
                      required
                    />
                  </div>
                  <div class="col">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password*"
                      value={user.Password}
                      onChange={handleInputs}
                      name="Password"
                      required
                    />
                  </div>
                </div>
                <div className="form-group my-5">
                  <div className="form-check d-flex">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="gridCheck"
                    />
                    <label className="form-check-label" for="gridCheck">
                      I agree to Terms & Condition receiving marketing and
                      promotional materials
                    </label>
                  </div>
                </div>
                <input
                  type="submit"
                  name="signup"
                  className="btn btn-filled"
                  value="Register"
                  onClick={toRegister}
                />
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Register;
