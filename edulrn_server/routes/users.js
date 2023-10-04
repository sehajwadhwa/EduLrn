const express = require("express");
const usersData = require("../usersData.js");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { MongoClient } = require("mongodb");
const { ObjectId } = require("mongodb");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });
const URI = process.env.MONGO_URI;
const { JWT_SECRET } = process.env;

console.log("printing user data : " + usersData);
// router.get("/", (req, res) => {
//   res.status(200).json({ status: 200, data: usersData });
// });
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  writeConcern: {
    w: "majority",
  },
};

const client = new MongoClient(URI, options);
client.connect();

router.get("/", async (req, res) => {
  const db = client.db("Edulrn");
  const users = await db.collection("users").find().toArray();
  res.status(201).json(users);
  // client.close();
});

router.get("/me", async (req, res) => {
  // try {
  const token = req.headers.authorization.split(" ")[1];
  console.log(token);
  // Verify the token
  const decodedToken = jwt.verify(token, JWT_SECRET);
  const db = client.db("Edulrn");
  const users = await db.collection("users").find().toArray();

  const userObjId = new ObjectId(decodedToken.userId);

  const user = await db.collection("users").findOne({ _id: userObjId });
  console.log("hulllloooooo");
  console.log(user._id.getTimestamp());

  if (!user) {
    // User not found
    res.status(404).json({ message: "User not found" });
  }

  console.log(decodedToken);
  // Return the user details
  res.status(200).json(user);
  console.log("stop here");
  return;

  // } catch (error) {
  //   // Token is invalid or expired
  //   console.log("heyy");
  //   res.status(401).json({ message: 'Unauthorized' });
  // } finally {
  //   client.close();
  // }
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
