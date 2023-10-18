import React, { useState } from "react";
import "./HamburgerMenu.scss";
import { Link } from "react-router-dom";

const HamburgerMenu = ({ menuItems }) => {
  {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };

    return (
      <div className={`hamburger-menu ${menuOpen ? "open" : ""}`}>
        <div className="menu-icon" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className="menu-items">
          {menuItems.map((obj) => (
            <li>
              <Link to={obj.link}>{obj.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

export default HamburgerMenu;
