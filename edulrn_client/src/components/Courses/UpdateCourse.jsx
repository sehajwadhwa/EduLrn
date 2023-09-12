import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function UpdateCourse({
  coursesData,
  setCoursesData,
  setOpenEditForm,
}) {
  const { courseId } = useParams();
  const navigate = useNavigate();

  const [currentCourse] = coursesData.filter(
    (course) => course.course_id === courseId
  );
  const { course_id, name, img, amount, instructor_name, course_duration } =
    currentCourse;

  const [courseData, setCourseData] = useState({
    course_id: course_id,
    name: name,
    img: img,
    amount: amount,
    instructor_name: instructor_name,
    course_duration: course_duration,
  });

  let updatedData;

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const response = await updatePost(courseData);
    // const updatedPost = response.data.post;

    const URL = "http://localhost:5000";
    await fetch(`${URL}/courses/${courseId}`, {
      method: "PUT", // or 'PATCH' depending on your server implementation
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(courseData),
    })
      .then((res) => res.json())
      .then((data) => {
        //  console.log(data);
        updatedData = data;
      })
      .catch((err) => console.error(err));

    // setCourseData({
    //     'title':"",
    //     'description': "",
    //     'price': "",
    //     'location':"",
    //     'willDeliver':false,
    // });

    const updatedCourses = coursesData.map((course) => {
      if (course.course_id === courseId) {
        return updatedData;
      }
      return course;
    });

    setCoursesData(updatedCourses);
    setOpenEditForm(false);

    navigate("/courses");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div style={{ padding: "50px" }}>
      <form className="edit-form" onSubmit={(e) => handleSubmit(e)}>
        <label>
          ID*
          <br />
          <input
            type="text"
            name="course_id"
            value={courseData.course_id}
            placeholder="ID"
            onChange={(e) => {
              handleChange(e);
            }}
            required
          />
        </label>
        <label>
          Course Name*
          <br />
          <input
            type="text"
            name="name"
            value={courseData.name}
            placeholder="Course Name"
            onChange={(e) => {
              handleChange(e);
            }}
            required
          />
        </label>
        <label>
          Image Url*
          <br />
          <input
            type="text"
            name="img"
            value={courseData.img}
            placeholder="Image Url"
            onChange={(e) => {
              handleChange(e);
            }}
            required
          />
        </label>
        <label>
          Instructor Name*
          <br />
          <input
            type="text"
            name="amount"
            value={courseData.amount}
            placeholder="Amount"
            onChange={(e) => {
              handleChange(e);
            }}
            required
          />
        </label>
        <label>
          <input
            type="text"
            name="instructor_name"
            value={courseData.instructor_name}
            placeholder="Instructor Name"
            onChange={(e) => {
              handleChange(e);
            }}
            required
          />
        </label>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}
