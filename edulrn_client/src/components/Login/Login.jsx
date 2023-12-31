import React from "react";
import "./Login.scss";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Login = ({ setToken, setUser, user }) => {
  let { type } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  console.log(type);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const URL = "http://localhost:5000";
    fetch(`${URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Sucessfully logged in");
        // const token = data.token;
        const { token, userType } = data;

        localStorage.setItem("token", token);
        localStorage.setItem("userType", userType);
        type = userType;
        console.log(token);
        setToken(token);
        setUser(data);

        if(userType === 'instructor'){
            navigate("/instructor");
        } else {
            navigate("/student");
        }
        // navigate("/");
      })
      .catch((error) => {
        console.error("Error logging in:", error);
        alert("Error Logging in");
      });
  };

  return (
    <section className="Page">
      <div className="Login">
        <div className="Login__header">
          <div className="Login__header--title">Log In </div>
        </div>
        <div className="Login__table">
          <form onSubmit={handleSubmit} className="Login__main">
            <label  htmlFor="email">
             
              <input
                className="Login__main--fields"
                type="text"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>

            <label  htmlFor="password">
            
              <input
                className="Login__main--fields"
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </label>
            <div className="Login--style">
              <input className="Login__button" type="submit" value="LogIn" />
              {type === "instructor" ? (
                <a
                  className="Login__google"
                  href="http://localhost:5000/auth/instructor"
                >
                  Login via Google
                </a>
              ) : (
                <a
                  className="Login__google"
                  href="http://localhost:5000/auth/student"
                >
                  Log in with Google
                </a>
              )}
            </div>

            <p>Don't have an account yet? &nbsp;
            <a className="Login__newuser" href="/Register">
              Sign-up
            </a>
            </p>
            
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
