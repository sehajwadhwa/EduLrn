import React, { useEffect, useState } from "react";
import CoursesData from "../../data/CoursesData";
import "./Courses.scss";
import "../../assets/Courses/c5.jpg";

const Courses = () => {
  //set state
  const [searchText, setSearchText] = useState("");
  const [coursesData, setCoursesData] = useState([]);

  useEffect(() => {
    
    //fetch data
    const url = "http://localhost:5000";
    fetch(`${url}/courses`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data[0].img);
        setCoursesData(data.data);
      });
  }, []);

  // function handleSearch(e) {
  //   setSearchText(e.target.value);
  //   console.log(setSearchText);
  // }
  const coursesNewData = searchText
    ? coursesData.filter(
        (obj) => obj.name.toLowerCase().includes(searchText.toLowerCase()) // making filter HOF case insensitive
      )
    : coursesData;

  return (
    <div className="Courses">
      <div className="Courses__searchbar">
        <input
          className="Courses__searchbar--size"
          type="text"
          placeholder="Search"
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
      </div>
      <div className="Courses__display">
        {/* Mapping the Data  */}
        {coursesNewData.map((Course) => (
          <div className="Courses__display--style">
            <h3>{Course.name}</h3>
            <img src={Course.img} alt="abc"></img>
            <div className="Courses__display--info">
              <div className="Courses__display--innerinfo">
                <p>Instructor : {Course.instructor_name}</p>
                <p>{Course.course_duration}</p>
                <p>{Course.amount}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
