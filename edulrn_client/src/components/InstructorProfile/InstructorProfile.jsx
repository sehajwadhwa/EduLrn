import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./InstructorProfile.scss";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import Courses from "../Courses/Courses";

export default function InstructorProfile({ coursesData, user }) {
  const [coursesNewData, setCoursesNewData] = useState([]);

  useEffect(() => {
    const filteredData = coursesData.filter(
      (obj) => obj.instructor_name === user.displayName
    );
    setCoursesNewData(filteredData);
  }, [coursesData]);

  return (
    <section className="Instructor">
      <div className="Instructor__header">
        <HamburgerMenu
          menuItems={[
            { title: "All Courses", link: "/courses" },
            { title: "Account Settings", link: "/" },
            { title: "Add New Course", link: "/course/addCourse" },
            { title: "Sign Out", link: "/" },
          ]}
        />
      </div>
      <div className="Instructor__banner">Discover More</div>
      <div className="Instructor__addcourse">
        <Link to="/course/addCourse">
          <p className="Courses__addcourse">Add Your Own Course</p>
        </Link>
      </div>

      <Link to="/courses">
        <p>View all courses</p>
      </Link>
      <div>
        {coursesNewData.map((Course) => (
          <div className="Courses__display--style" key={Course.course_id}>
            <img src={`http://localhost:5000${Course.img}`} alt="abc"></img>
            <div class="Courses__display--right">
              <h3>{Course.name}</h3>
              <p>{Course.course_duration}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
