import React from "react";
import CoursesData from "../../data/CoursesData";
import "./Courses.scss";

const Courses = () => {
  return (
    <div className="Courses">
      {/* Mapping the Data  */}

      {CoursesData.map((Course) => (
        <div>
          <h3>{Course.name}</h3>
          <img src={Course.img}></img>
          <p>{Course.instructor_name}</p>
          <p>Course.course_duration</p>
          <p>Course.amount</p>
        </div>
      ))}
    </div>
  );
};

export default Courses;
