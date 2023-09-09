import React from "react";
import { Link } from "react-router-dom";

export default function InstructorProfile() {
  return (
    <div>
      <h1 style={{ backgroundColor: "darkgreen", padding: "30px" }}>Welcome!</h1>
      <p>Now you can create your own courses</p>
      {/* <Link to="/courses"><p>View all courses</p></Link> */}
      <Link to="/courses">
        <p>View all courses</p>
      </Link>
    </div>
  );
}
