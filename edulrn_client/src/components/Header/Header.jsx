import "./Header.scss";
import React from "react";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar__logo">Logo</div>
        <div className="navbar__right">
          <ul className="navbar__right--links">
            <li className="navbar__right--login">LogIn</li>
            <li className="navbar__right--register">Register</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
