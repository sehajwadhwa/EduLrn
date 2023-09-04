import "./Header.scss";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";

const Header = () => {
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
            <Link to="/register">
              <li className="navbar__right--register">REGISTER</li>
            </Link>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
