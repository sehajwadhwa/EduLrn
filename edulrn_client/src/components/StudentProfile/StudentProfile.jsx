import React from "react";
import { Link } from "react-router-dom";
import "./StudentProfile.scss";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

export default function StudentProfile(user,setUser ) {
  return (

    <section className="Student">
      <div className="Student__header">
        
        <HamburgerMenu 

        menuItems={[

          {title :'All Courses', link: '/courses'},
          {title :'Account Settings' , link :'/'},
          {title :'Contact Student', link :'/course/addCourse'},
          {title :'My Certificates' , link :'/'},
          {title : 'Sign Out', link :'/'},

        ]} />

        <div className="Studentuser">
             <p className="Studentuser__name">Hi , {user.displayName}{" "}</p>
             <div className="Studentuser__avatar">
             </div>
         </div>
      </div>
        <div className="Student__banner">
         <p className="Student__banner--text"> New Courses  <br /> recommended <br /> just for YOU !!  </p>
       </div>

      
    <div className="Student__courses">
    <Link to="/courses">
        <p className="Student__courses--text">Enrolled</p>
      </Link>
      
      <Link to="/courses">
        <p className="Student__courses--text">Explore</p>
      </Link>
    </div>
    
    </section>
  );
}
