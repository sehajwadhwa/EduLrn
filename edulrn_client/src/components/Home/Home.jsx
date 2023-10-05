import React, { useState } from "react";
import Slider from "react-slick";
import { GrNext, GrPrevious } from "react-icons/gr";
import "./Home.scss";
import WhoAmI from "../WhoAmI/WhoAmI";
import { Link } from "react-router-dom";
import LandingImage from "../../assets/Banner/LandingPage.png";
import courses1 from "../../assets/Courses/c1.jpg";
import courses2 from "../../assets/Courses/c2.jpg";
import courses3 from "../../assets/Courses/c3.jpg";

const Home = ({ images }) => {
  return (
    <section className="Home">
      <div className="hero">
        <div className="banner">
          <div className="banner__heading">
            <h2 className="banner__heading--h2">Welcome to </h2>
            <h1 className="banner__heading--h1">EDU-LRN</h1></div>
            <img className="banner__img" src={LandingImage} alt="Banner" />
          </div>
          <div className="banner__button">
           <Link to="/Register">
              <button className="banner__button--1">Sign Up</button>
            </Link>
          <Link to="/login">
            <button className="banner__button--1">LogIn</button>
          </Link>
          </div>
          
        </div>
      {/* {/* <div style={{ textAlign: "center" }}>
        <WhoAmI />
      </div> */}
      <div className="courses">
        <div className="courses__img">
          {/* slider */}
          <div className="courses__img--slide">
            <img className="courses__img--1" src={courses1} alt="Courses" />
          </div>
          <div className="courses__img--slide">
            {" "}
            <img className="courses__img--1" src={courses2} alt="Courses" />
          </div>
          <div className="courses__img--slide">
            <img className="courses__img--1" src={courses3} alt="Courses" />
          </div>
          <div className="courses__img--slide">
            <img className="courses__img--1" src={courses1} alt="Courses" />
          </div>
          <div className="courses__img--slide">
            <img className="courses__img--1" src={courses2} alt="Courses" />
          </div>
          <div className="courses__img--slide">
            <img className="courses__img--1" src={courses3} alt="Courses" />
          </div>
        </div>
        <div className="courses__content">
          <p>Unlock Your Potential through Online Learning. </p>
          <p>
            EduLrn is your gateway to a world of online education that's
            flexible, engaging, and tailored to your needs.
          </p>
          <p>
            Unlock your full potential and embrace the joy of learning with
            Edulrn. Start your journey today!
          </p>
       
        </div>
      </div> 
    </section>
  );
};

export default Home;
