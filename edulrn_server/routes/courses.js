const express = require("express");
// const fs = require("fs");
const coursesData = require("../CoursesData.js");
const router = express.Router();

//GET

router.get("/", (req, res) => {
  //   console.log("printing coursesData : " + coursesData);
  res.status(200).json({ status: 200, data: coursesData });
});

router.post("/", (req, res) => {
  const newCourse = req.body;
  // console.log("req.body " + req.body);

  coursesData.push(newCourse);
  res.status(201).json(newCourse);
});

router.put("/:course_id", (req, res) => {
  console.log("heyyyyyyyy putting");
  const courseIdToUpdate = req.params.course_id;
  console.log(courseIdToUpdate);
  const updatedCourseData = req.body;

  // Find the index of the course to be updated
  const index = coursesData.findIndex(
    (course) => course.course_id === courseIdToUpdate
  );

  if (index !== -1) {
    // Update the course data
    coursesData[index] = updatedCourseData;
    res.status(200).json(updatedCourseData);
  } else {
    res.status(404).json({ error: "Course not found" });
  }
});

router.delete("/:course_id", (req, res) => {
  const courseIdToDelete = req.params.course_id;
  console.log("deleting course");
  // Find the index of the course to be deleted
  const index = coursesData.findIndex(
    (course) => course.course_id === courseIdToDelete
  );

  if (index !== -1) {
    // Remove the course from the data array
    const deletedCourse = coursesData.splice(index, 1)[0];

    res.status(204).json(deletedCourse);
  } else {
    res.status(404).json({ error: "Course not found" });
  }
});

module.exports = router;
