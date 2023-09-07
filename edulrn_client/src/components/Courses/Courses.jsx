import React, { useState } from "react";
import CoursesData from "../../data/CoursesData";
import "./Courses.scss";
import "../../assets/Courses/c5.jpg";

const Courses = () => {
  //set state
  const [searchText, setSearchText] = useState("");

  // function handleSearch(e) {
  //   setSearchText(e.target.value);
  //   console.log(setSearchText);
  // }
  const coursesNewData = searchText
    ? CoursesData.filter(
        (obj) => obj.name.toLowerCase().includes(searchText.toLowerCase()) // making filter HOF case insensitive
      )
    : CoursesData;

  return (
    <div className="Courses">
      <div className="Courses__searchbar">
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
      </div>
      {/* Mapping the Data  */}

      {coursesNewData.map((Course) => (
        <div>
          <h3>{Course.name}</h3>
          <img src={Course.img} alt="abc"></img>
          <p>{Course.instructor_name}</p>
          <p>{Course.course_duration}</p>
          <p>{Course.amount}</p>
        </div>
      ))}
    </div>
  );
};

export default Courses;
