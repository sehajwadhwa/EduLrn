import React from "react";
import { Link } from "react-router-dom";
import "./InstructorProfile.scss";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import {useState, useEffect} from "react";


export default function InstructorProfile(coursesData, user, setUser ) {
  console.log(coursesData);
  const [instructorCourses, setInstructorCourses] = useState();

  useEffect(() => {
    const filteredData = coursesData.filter(course => course.name === user.displayName);
    setInstructorCourses(filteredData);
  })
  
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
        <p className="Instructor__courses--text">My Courses</p>
        <div>
           {
            instructorCourses.map(course => (
              <div>
                <img src={`http://localhost:5000${course.img}`} alt="abc"></img>
                <div class="Courses__display--right">
                  <h3>{course.name}</h3>
                  <p>{course.course_duration}</p>
                </div>
              </div>
            ))
           }
      </div>
      
      <Link to="/courses">
        <p className="Instructor__courses--text">All Courses</p>
      </Link>
    </div>
    
    </section>
  );
}
