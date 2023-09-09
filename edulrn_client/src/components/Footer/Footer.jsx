import React from "react";
import logo from "../../assets/Logo2.jpg";
import facbebook from "../../assets/Icons/Icon-facebook.svg";
import instagram from "../../assets/Icons/Icon-instagram.svg";
import twitter from "../../assets/Icons/Icon-twitter.svg";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__section">
          <h1>Get in Touch</h1>
        </div>
        <div className="footer__section">
          <h2 className="footer__section--heading">Contact</h2>
          <p className="footer__section--contactName">
            Sehaj Wadhwa <br /> Business Development Manager
          </p>
          <a href="mailto" class="footer__section--email">
            info@edulrn.com
          </a>
        </div>
        <div className="footer__section">
          <h2 className="footer__section--heading">Follow Us</h2>
          <div className="social__icons">
            <a href="www.facebook.com" className="social__icons--style">
              <img src={facbebook} alt="facebook" />
            </a>
            <a href="www.instagram.com" className="social__icons--style">
              <img src={instagram} alt="instagram" />
            </a>
            <a href="www.twitter.com" className="social__icons--style">
              <img src={twitter} alt="twitter" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <p className="footer__bottom--content">
          &copy; {new Date().getFullYear()} Sehaj Wadhwa. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
