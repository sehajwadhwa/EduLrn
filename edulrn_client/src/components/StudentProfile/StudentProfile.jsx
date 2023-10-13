import React from "react";
import { Link } from "react-router-dom";
import "./StudentProfile.scss";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

export default function StudentProfile(user,setUser ) {
  return (

    <section className="Instructor">
      <div className="Instructor__header">
        
        <HamburgerMenu 

        menuItems={[

          {title :'All Courses', link: '/courses'},
          {title :'Account Settings' , link :'/'},
          {title :'Contact Instructor', link :'/course/addCourse'},
          {title :'My Certificates' , link :'/'},
          {title : 'Sign Out', link :'/'},

        ]} />

        <div className="user">
             <p className="user__name">Hi , {user.displayName}{" "}</p>
             <div className="user__avatar">
             </div>
         </div>
      </div>
        <div className="Instructor__banner">
         <p className="Instructor__banner--text"> Discover <br /> More !! </p>
       </div>

      <div className="Instructor__addcourse">
         <Link to="/course/addCourse">
            <p className="Instructor__addcourse--text">Add Your Own Course</p>
          </Link>
      </div>
      
    <div className="Instructor__courses">
    <Link to="/courses">
        <p className="Instructor__courses--text">My Courses</p>
      </Link>
      
      <Link to="/courses">
        <p className="Instructor__courses--text">All Courses</p>
      </Link>
    </div>
    
    </section>
  );
}
