import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import UpdateCourse from "./UpdateCourse";

export default function SingleCourse({ coursesData, setCoursesData, user }) {
  console.log(JSON.stringify(coursesData));
  const [openEditForm, setOpenEditForm] = useState(false);
  console.log(user);

  const { courseId } = useParams();
  console.log(courseId);
  console.log(coursesData);
  const navigate = useNavigate();

  const [course, setCourse] = useState({});

  useEffect(() => {
    const filteredCourse = coursesData.find(
      (courseObj) => courseObj.course_id === courseId
    );
    console.log(filteredCourse);
    setCourse(filteredCourse);
  }, []);

  const askToDelete = async (courseIDToDelete) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this course?"
    );
    fetch(`${URL}/courses/${courseIDToDelete}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.status === 204) {
          console.log("Course deleted successfully.");
        } else {
          console.error("Failed to delete course.");
        }
      })
      .catch((err) => console.error(err));
    // const deletedPost = await deletePost(token, postIdToDelete)
    // console.log(deletedPost);
    // return deleted;

    // fetch

    const filteredCourses = coursesData.filter(
      (course) => course.course_id !== courseIDToDelete
    );
    setCoursesData(filteredCourses);

    navigate("/courses");
  };

  const openEdit = (e) => {
    setOpenEditForm(true);
  };
  return (
    <div
      style={{
        backgroundColor: "brown",
        width: "30vh",
        padding: "40px",
        height: "30vh",
      }}
    >
      {course && (
        <>
          <h3>{course.course_id}</h3>
          <h3>{course.name}</h3>
          <h3>{course.img}</h3>
          <h3>{course.amount}</h3>
          <h3>{course.course_duration}</h3>
        </>
      )}

      {user && user.userType === "instructor" ? (
        <div
          style={{ backgroundColor: "brown", width: "40vh", padding: "20px" }}
        >
          <button
            onClick={(e) => {
              openEdit(e);
            }}
          >
            {openEditForm ? "EDITING" : "EDIT"}
          </button>
          <button
            onClick={(event) => {
              askToDelete(courseId);
            }}
          >
            Delete
          </button>
        </div>
      ) : (
        <div></div>
      )}
      <div>
        {openEditForm && (
          <UpdateCourse
            coursesData={coursesData}
            setCoursesData={setCoursesData}
            setOpenEditForm={setOpenEditForm}
          />
        )}
      </div>
    </div>
  );
}
