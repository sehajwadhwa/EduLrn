import React from "react";
import { Link } from "react-router-dom";

export default function InstructorProfile() {
  return (
    <div style={{ marginBottom: "100px" }}>
      <h1
        style={{
          
          backgroundColor: "darkgreen",
          padding: "300px",
        }}
      >
        Welcome!
      </h1>
      <p>Now you can create your own courses</p>
      {/* <Link to="/courses"><p>View all courses</p></Link> */}
      <Link to="/courses">
        <p>View all courses</p>
      </Link>
    </div>
  );
}
