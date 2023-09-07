import "./Header.scss";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo2.jpg";

const Header = (props) => {
  function handleLogout() {
    console.log("Log Out");
  }
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
              props.user ? (
                <div>
                  <p>Welcome , {props.user.displayName} </p>
                  <button onClick={handleLogout}>LOG OUT</button>
                </div>
              ) : (
                <div>
                  <Link to="/register">
                    <li className="navbar__right--register">REGISTER</li>
                  </Link>
                  {/* <li className="navbar__right--login">
                    <a href="http://localhost:5000/auth/google/callback">
                      LOG IN
                    </a>
                  </li> */}
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
