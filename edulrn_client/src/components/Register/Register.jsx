import React from "react";

const Register = () => {
  <div>
    <div className="Login__header">Register</div>
    <div className="Login__main">
      <form>
        <label htmlFor="firstName">First Name </label>
        <Input
          type="text"
          placeholder="Type your First Name"
          name="firstName"
          value=""
          required
        />

        <label htmlFor="lastName">Last Name</label>
        <Input
          type="text"
          placeholder="Type your Last Name"
          name="lastName"
          value=""
        />

        <label htmlFor="email">Email Address : </label>
        <Input
          type="email"
          placeholder="Enter your email address"
          name="email"
          value=""
          required
        />
        <label htmlFor="password">Password</label>
        <Input
          type="password"
          name="password"
          placeholder="enter your password"
          value=""
          required
        />

        <label htmlFor="areaOfInterest">Area of Interest </label>
        <Input type="text" placeholder="" name="areaOfInterest" value="" />

        <input type="submit" value="Register" />
      </form>
    </div>
  </div>;
};

export default Register;
