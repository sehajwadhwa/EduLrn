import React, { useEffect, useState } from "react";
// import CoursesData from "../../data/CoursesData";
import "./Courses.scss";
// import "../../assets/Courses/c5.jpg";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Courses = ({ coursesData, setCoursesData, user }) => {
   const userType = localStorage.getItem("userType");
    console.log(user);
  //set state
  const [searchText, setSearchText] = useState("");
  const [coursesNewData, setCoursesNewData] = useState([]);

  useEffect(() => {
    //fetch data
    const url = "http://localhost:5000";
    fetch(`${url}/courses`)
      .then((res) => res.json())
      .then((data) => {
        setCoursesData(data.data);
        setCoursesNewData(data.data);
      });
  }, []);

  // const coursesNewData = searchText
  //   ? coursesData.filter(
  //       (obj) => obj.name.toLowerCase().includes(searchText.toLowerCase()) // making filter HOF case insensitive
  //     )
  //   : coursesData;

  useEffect(() => {
    const filteredData = coursesData.filter(
      (obj) => obj.name.toLowerCase().includes(searchText.toLowerCase()) // making filter HOF case insensitive
    );
    setCoursesNewData(filteredData);
  }, [coursesData, searchText]);

  return (
    <div className="Courses">
      <div className="Courses__searchbar">
        <span className="Courses__searchbar--icon"><FaSearch /></span>
        <input
          className="Courses__searchbar--size"
          type="text"
          placeholder="Search"
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        {/* Link to Add Course  */}
        
        {user && userType === "instructor" && (
          <Link to="/course/addCourse">
            <p className="Courses__addcourse">Add Your Own Course</p>
          </Link>
        )}
      </div>

      <div className="Courses__display">
        {/* Mapping the Data  */}
        {coursesNewData &&
          coursesNewData.map((Course) => (
            <div className="Courses__display--style" key={Course.course_id}>
              <img src={`http://localhost:5000${Course.img}`} alt="abc"></img>
              <div class="Courses__display--right">
                <h3>{Course.name}</h3>
                <p>{Course.course_duration}</p>
              </div>
              {/* <div className="Courses__display--info">
                <div className="Courses__display--innerinfo">
                  <p>Instructor : {Course.instructor_name}</p>
                  <p>ID : {Course.course_id}</p>
                  <p>{Course.course_duration}</p>
                  <p>{Course.amount}</p>
                </div>
              </div> */}
              {userType === "instructor" &&
                Course.instructor_name === user.displayName && (
                  <Link to={`/courses/${Course.course_id}`}>View Course</Link>
                )}
              
            </div>
          ))}
      </div>
      <hr />
    </div>
  );
};

export default Courses;