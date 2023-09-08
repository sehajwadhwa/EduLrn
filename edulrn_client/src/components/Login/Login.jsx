import React from "react";
import "./Login.scss";

const Login = () => {
  return (
    <section className="Page">
      <div className="Login">
        <div className="Login__header">LOG IN </div>
        <div className="Login__table">
          <form className="Login__main">
            <label className="Login__main--heading" htmlFor="username">
              USERNAME :
              <input
                className="Login__main--fields"
                type="text"
                name="username"
                placeholder="Enter your username"
                // value=""
                required
              />
            </label>

            <label className="Login__main--heading" htmlFor="password">
              PASSWORD :
              <input
                className="Login__main--fields"
                type="password"
                name="password"
                placeholder="Enter your password"
                // value=""
                required
              />
            </label>
<div className="Login--style">
            <input className="Login__button" type="submit" value="LogIn" />
            <a
              className="Login__google"
              href="http://localhost:5000/auth/google"
            >
              Login via Google
            </a>
            </div>

            <a className="Login__newuser" href="/register">
              New User ? Click here to Register
            </a>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
