import React, { useState } from "react";
import Slider from "react-slick";
import { GrNext, GrPrevious } from "react-icons/gr";
import "./Home.scss";
import { Link } from "react-router-dom";
import banner2 from "../../assets/Banner/b2.jpg";
import courses1 from "../../assets/Courses/c1.jpg";
import courses2 from "../../assets/Courses/c2.jpg";
import courses3 from "../../assets/Courses/c3.jpg";

const Home = ({ images }) => {
  return (
    <section className="Home">
      <div className="hero">
        <div className="banner">
          <h1>EduLrn</h1>
          <img className="banner__img--1" src={banner2} alt="Banner" />
        </div>
      </div>
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
          <Link to="/courses">
            <button>Courses</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
