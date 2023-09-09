const express = require("express");
const usersData = require("../usersData.js");
const router = express.Router();

console.log("printing user data : " + usersData);
router.get("/", (req, res) => {
  res.status(200).json({ status: 200, data: usersData });
});

//POST

router.post("/", (req, res) => {
  const newUser = req.body;
  console.log("req.body " + req.body);
  const existingUser = usersData.find((user) => user.email === newUser.email);

  if (existingUser) {
    res.status(409).json({ error: "email already exists" });
  } else {
    usersData.push(newUser);
    res.status(201).json(newUser);
  }
});
module.exports = router;
