import React from "react";
import CoursesData from "../../data/CoursesData";
const Courses = () => {
  return (
    <div>
      {/* Mapping the Data  */}

      {CoursesData.map((Course) => {
        <div>
          <h3>{Course.name}</h3>
          <img src={Course.img}></img>
          <p>{Course.instructor_Name}</p>
          <p>Course.duration</p>
          <p>Course.amount</p>
        </div>;
      })}
    </div>
  );
};

export default Courses;
