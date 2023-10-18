import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddCourse.scss";

export default function AddCourse({ coursesData, setCoursesData }) {
  const navigate = useNavigate();
  const [courseData, setCourseData] = useState({
    course_id: "",
    name: "",
    img: "",
    amount: "",
    instructor_name: "",
    course_duration: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("calling addNewCourse");

    const URL = "http://localhost:5000";
    fetch(`${URL}/courses`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(courseData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCoursesData({ ...coursesData, data });
      })
      .catch((err) => console.log(err));

    navigate("/courses");
  };

  return (
    <section className="page">
      <h1 className="heading">Add Course</h1>
    <div className="addCourse" >
      
      <form
        className="addCourse__form"
        onSubmit={(e) => handleSubmit(e)}
      >
     
        <input
          type="text"
          
          className="addCourse__form--fields"
          name="course_id"
          value={courseData.course_id}
          placeholder="Course ID*"
          onChange={(e) => {
            handleChange(e);
          }}
          required
        />
     
     
        <input
          type="text"
          className="addCourse__form--fields"
          name="name"
          value={courseData.name}
          placeholder="Course Name*"
          onChange={(e) => {
            handleChange(e);
          }}
          required
        />
     
        <input
          type="text"
          className="addCourse__form--fields"
          name="img"
          value={courseData.img}
          placeholder="Image Url*"
          onChange={(e) => {
            handleChange(e);
          }}
          required
        />
        <input
          type="text"
          className="addCourse__form--fields"
          name="amount"
          value={courseData.amount}
          placeholder="Amount"
          onChange={(e) => {
            handleChange(e);
          }}
          required
        />
        <input
          type="text"
          className="addCourse__form--fields"
          name="instructor_name"
          value={courseData.instructor_name}
          placeholder="Instructor's Name"
          onChange={(e) => {
            handleChange(e);
          }}
          required
        />
        <input
          type="text"
          className="addCourse__form--fields"
          name="course_duration"
          value={courseData.course_duration}
          placeholder="Course Duration*"
          onChange={(e) => {
            handleChange(e);
          }}
          required
        />

        <button className="button" type="submit">Add Your Course</button>
      </form>
    </div>
    </section>
  );
}
