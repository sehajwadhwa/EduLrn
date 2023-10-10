import React from "react";
import { Link } from "react-router-dom";

export default function InstructorProfile() {
  return (
    <section className="Instructor">
      <div className="Instructor__header">
        <ul className="Instructor__header--menu">
          <li>All Courses</li>
          <li>Account Settings</li>
          <li>Sign Out</li>
        </ul>
      </div>
      <div className="Instructor__banner">
        Discover More
      </div>
      <div className="Instructor__addcourse">
      <Link to="/course/addCourse">
            <p className="Courses__addcourse">Add Your Own Course</p>
          </Link>
      </div>
 
    
      
      <Link to="/courses">
        <p>View all courses</p>
      </Link>
    
    </section>
  );
}
