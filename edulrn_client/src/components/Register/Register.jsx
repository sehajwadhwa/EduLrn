import React, { useState } from "react";
import "./Register.scss";

const Register = () => {
  //set state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    userType: "",
  });
  // const handleSubmit = (e) => {
  //   e.preventDefault()
  // };
  const handleChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;

    setFormData({
      ...formData, //copies initial data
      [name]: value,
    });
  };

  return (
    <section className="Page">
      <div className="Register">
        <div className="Register__header">REGISTER</div>
        <div>
          <form className="Register__main">
            <label htmlFor="firstName">First Name </label>
            <input
              onChange={handleChange}
              className="Register__fields"
              type="text"
              placeholder="Type your First Name"
              name="firstName"
              value={formData.firstName}
              required
            />

            <label htmlFor="lastName">Last Name</label>
            <input
              onChange={handleChange}
              className="Register__fields"
              type="text"
              placeholder="Type your Last Name"
              name="lastName"
              value={formData.lastName}
              required
            />

            <label htmlFor="email">Email Address : </label>
            <input
              onChange={handleChange}
              className="Register__fields"
              type="email"
              placeholder="Enter your email address"
              name="email"
              value={formData.email}
              required
            />
            <label htmlFor="password">Password</label>
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

            <label className="Register__fields" htmlFor="userType">
              Select Profile{" "}
            </label>
            {/* add onChange to line 44 */}
            <select
              onChange={handleChange}
              name="userType"
              value={formData.userType}
            >
              <option value="">Select </option>
              <option value="student">Student </option>
              <option value="instructor">Instructor</option>
            </select>

            <input
              // onClick={handleSubmit}
              className="Register__button"
              type="submit"
              value="REGISTER"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
