import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function SingleCourse({ coursesData }) {
  console.log(JSON.stringify(coursesData));
  const { courseId } = useParams();
  console.log(courseId);

  const [course, setCourse] = useState({});

  useEffect(() => {
    const filteredCourse = coursesData.find(
      (courseObj) => courseObj.course_id === courseId
    );
    console.log(filteredCourse);
    setCourse(filteredCourse);
  });

  return (
    <div
      style={{
        backgroundColor: "brown",
        width: "30vh",
        padding: "40px",
        height: "30vh",
      }}
    >
      <h3>{course.course_id}</h3>
      <h3>{course.name}</h3>
      <h3>{course.img}</h3>
      <h3>{course.amount}</h3>
      <h3>{course.course_duration}</h3>
      <div>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
}
