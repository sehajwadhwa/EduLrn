const express = require("express");
const coursesData = require("../data/CoursesData.js");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ status: 200, data: coursesData });
});

module.exports = router;
