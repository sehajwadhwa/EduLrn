import React, { useState } from "react"
import "./HamburgerMenu.scss";


const HamburgerMenu = () => {
    {
        const [menuOpen, setMenuOpen] = useState(false);
     
       const toggleMenu = () => {
         setMenuOpen(!menuOpen);
       };
     
       return (          
         <div className={`hamburger-menu ${menuOpen ? 'open' : ''}`}>
           <div className="menu-icon" onClick={toggleMenu}>
             <div className="bar"></div>
             <div className="bar"></div>
             <div className="bar"></div>
           </div>
           <ul className="menu-items">
             <li><a href="/">Home</a></li>
             <li><a href="/about">About</a></li>
             <li><a href="/services">Services</a></li>
             <li><a href="/contact">Contact</a></li>
           </ul>
         </div>
         );
     }}


export default HamburgerMenu; 