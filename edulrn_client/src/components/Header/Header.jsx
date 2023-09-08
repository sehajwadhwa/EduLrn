import "./Header.scss";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/Logo2.jpg";
import axios from "axios";

const Header = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    
    // Log out the user on the backend.
    axios
      .get("http://localhost:5000/logout", { withCredentials: true })
      .then((data) => {
        setUser(null);

        if (data.redirect) {
          navigate("/");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar__logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="navbar__right">
          <ul className="navbar__right--links">
            <Link to="/login">
              <li className="navbar__right--login">LOG IN</li>
            </Link>

            {
              // checking if the user is set
              user ? (
                <div>
                  <p>Welcome , {user.displayName} </p>
                  <button onClick={handleLogout}>LOG OUT</button>
                </div>
              ) : (
                <div>
                  <Link to="/register">
                    <li className="navbar__right--register">REGISTER</li>
                  </Link>
                </div>
              )
            }
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
