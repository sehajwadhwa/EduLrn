import React from "react";
import { Link } from "react-router-dom";
import "./InstructorProfile.scss";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

export default function InstructorProfile() {
  return (
    <section className="Instructor">
      <div className="Instructor__header">
        <HamburgerMenu 
        menuItems={[
          {title :'All Courses', link: '/courses'},
          {title :'Account Settings' , link :'/'},
          {title :'Add New Course', link :'/course/addCourse'},
          {title : 'Sign Out', link :'/'},

        ]} />

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
