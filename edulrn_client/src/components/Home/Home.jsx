import React from "react";
import banner1 from "../../assets/banner1.jpg";
import courses1 from "../../assets/COURSES1.jpg";
import "./Home.scss";
import barba from "@barba/core";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="Home">
      <div className="banner">
        <img src={banner1} alt="Banner"></img>
      </div>
      <div className="courses">
        <Link to="/courses">
          {" "}
          <p>Courses</p>{" "}
        </Link>
        <div className="courses__img">
          {/* slider */}
          <div className="courses__img--slide">
            <img className="courses__img--1" src={courses1} alt="Courses" />
          </div>
          <div className="courses__img--slide">
            {" "}
            <img className="courses__img--1" src={courses1} alt="Courses" />
          </div>
          <div className="courses__img--slide">img3</div>
          <div className="courses__img--slide">img 1</div>
          <div className="courses__img--slide">img2</div>
          <div className="courses__img--slide">img3</div>
        </div>
        <div className="courses__content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo esse,
            commodi quaerat natus nam fuga quis rem tempore? Quas doloribus
            soluta molestias possimus consequatur ab rerum iusto illo officia
            error?
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
