import React, { useState } from "react";
import "./Register.scss";
import { useNavigate } from "react-router-dom";
import SignUp from "../../assets/SignUp/image.svg";

const Register = () => {
  const navigate = useNavigate();

  //set state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    userType: "",
  });

  const handleChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;

    setFormData({
      ...formData, //copies initial data
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const URL = "http://localhost:5000";
    fetch(`${URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          console.log(data.message);
          navigate("/login");
        } else {
          console.error(data.error);
        }
      })
      .catch((error) => {
        console.error("Registration error:", error);
      });
  };
  return (
    <section className="Page">
      <div className="Register">
        <div className="Register__header">
          <h1 className="Register__header--heading">Sign-up</h1>
          {/* <img className="Register__header--img" src={SignUp} alt="Banner" /> */}
        </div>
        <div className="Register__container">
          <form className="Register__main">
            <label htmlFor="firstName">
              
              <input
                onChange={handleChange}
                className="Register__fields"
                type="text"
                placeholder="Type your First Name"
                name="firstName"
                value={formData.firstName}
                required
              />
            </label>

            <label htmlFor="lastName">
              
              <input
                onChange={handleChange}
                className="Register__fields"
                type="text"
                placeholder="Type your Last Name"
                name="lastName"
                value={formData.lastName}
                required
              />
            </label>

            <label htmlFor="email">
              
              <input
                onChange={handleChange}
                className="Register__fields"
                type="email"
                placeholder="Enter your email address"
                name="email"
                value={formData.email}
                required
              />
            </label>
            <label htmlFor="password">
             
              <input
                onChange={handleChange}
                className="Register__fields"
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                minLength="8" //password requirements
                required
              />
            </label>
            <label htmlFor="confirmPassword">
              
              <input
                onChange={handleChange}
                className="Register__fields"
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                // minLength="8" //password requirements
                required
              />
            </label>

            <label className="Register__fields" htmlFor="userType">
              Select Profile {/* add onChange to line 44 */}
              <select
                onChange={handleChange}
                name="userType"
                value={formData.userType}
              >
                <option value="">Select </option>
                <option value="student">Student </option>
                <option value="instructor">Instructor</option>
              </select>
            </label>
            <input
              onClick={handleSubmit}
              className="Register__button"
              type="submit"
              value="Continue"
            />

            <p>Already have an account ? &nbsp;
            <a href="/login">
              Login
            </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
