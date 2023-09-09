const express = require("express");

const CoursesData = require("../CoursesData.js");
const router = express.Router();

//GET

router.get("/", (req, res) => {
  console.log("printing coursesData : " + CoursesData);
  res.status(200).json({ status: 200, data: CoursesData });
});

module.exports = router;
