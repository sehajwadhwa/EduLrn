import React from "react";
import "./Register.scss";

const Register = () => {
  return (
    <section className="Register">
      <div className="Register__header">Register</div>
      <div >
        <form className="Register__main">
          <label htmlFor="firstName">First Name </label>
          <input
            type="text"
            placeholder="Type your First Name"
            name="firstName"
            value=""
            required
          />

          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            placeholder="Type your Last Name"
            name="lastName"
            value=""
          />

          <label htmlFor="email">Email Address : </label>
          <input
            type="email"
            placeholder="Enter your email address"
            name="email"
            value=""
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="enter your password"
            value=""
            required
          />

          <label htmlFor="areaOfInterest">Area of Interest </label>
          {/* add onChange to line 44 */}
          <select name="area_interest" value="">
            <option value="">Option 1 </option>
            <option value="">Option 2</option>
            <option value="">Option 3</option>
            <option value="">Option 4</option>
            <option value="">Option 5</option>
          </select>

          <input type="submit" value="Register" />
        </form>
      </div>
    </section>
  );
};

export default Register;
