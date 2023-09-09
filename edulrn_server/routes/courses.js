const express = require("express");
const coursesData = require("../CoursesData.js");
const router = express.Router();

//GET

router.get("/", (req, res) => {
  console.log("printing coursesData : " + coursesData);
  res.status(200).json({ status: 200, data: coursesData });
});

router.post("/", (req, res) => {
  const newCourse = req.body;
  console.log("req.body " + req.body);

  coursesData.push(newCourse);
  res.status(201).json(newCourse);
});

module.exports = router;
