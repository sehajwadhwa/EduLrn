import React from "react";
import logo from "../../assets/logo.jpg";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__container--elements">
          <div className="footer__container--e1">
            <img src={logo} alt="Logo" />
            <div className="footer__container--social">
              <p>facebook</p>
              <p>instagram</p>
              <p>twitter</p>
            </div>
          </div>
        </div>
        <div className="footer__container--copyrights">
          <p>&copy; 2023 EduLrn</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
