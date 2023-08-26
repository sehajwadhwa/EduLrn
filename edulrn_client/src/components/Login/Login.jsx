import React from "react";
import "./Login.scss";
const Login = () => {
  return (
    <div className="Login">
      <div className="Login__header">LogIn</div>
      <div>
        {/* //define class and flex */}

        <form className="Login__main">
          <label htmlFor="username">
            Username
            <input
              type="text"
              name="username"
              placeholder="enter your username"
              value=""
              required
            />
          </label>

          <label htmlFor="password">
            Password
            <input
              type="password"
              name="password"
              placeholder="enter your password"
              value=""
              required
            />
          </label>
          <input type="submit" value="LogIn" />
          <a href="/register">New User ? Click here to Register</a>
        </form>
      </div>
    </div>
  );
};

export default Login;
