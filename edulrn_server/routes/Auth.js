const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const bcrypt = require("bcrypt");
const { MongoClient } = require("mongodb");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });
// MongoDB connection URI
const URI = process.env.MONGO_URI;
const { JWT_SECRET } = process.env;

// POST route for user registration
router.post("/register", async (req, res) => {
  const { firstName, lastName, email, password, confirmPassword, userType } =
    req.body;
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  // Create a MongoDB client
  const client = new MongoClient(URI, options);

  // Connect to the MongoDB server
  await client.connect();
  try {
    if (
      (!firstName || !lastName || !email || !password || !confirmPassword,
      !userType)
    ) {
      return res.status(400).json({ error: "All fields are required" });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      return res.status(400).json({
        error:
          "Password must include at least one uppercase letter, one lowercase letter, one digit, and one special character",
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email format" });
    }

    // Get a reference to the "meOrganize" database and "users" collection
    const db = client.db("Edulrn");
    const usersCollection = db.collection("users");

    // Check if the email already exists
    const existingUser = await usersCollection.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ email: "Email already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user document
    let newUser = {};
    if (userType === "Client") {
      newUser = {
        firstName,
        lastName,
        email,

        password: hashedPassword,
        userType,
        // ratings: [],
      };
    } else {
      newUser = {
        firstName,
        lastName,
        email,

        password: hashedPassword,
        userType,
      };
    }

    // Insert the new user into the database
    await usersCollection.insertOne(newUser);

    res
      .status(201)
      .json({ success: true, message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred during registration" });
  } finally {
    client.close();
  }
});

router.post("/login", async (req, res) => {
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  // Create a MongoDB client
  const client = new MongoClient(URI, options);
  await client.connect();

  try {
    const { email, password } = req.body;

    const db = client.db("Edulrn");
    const usersCollection = db.collection("users");

    const user = await usersCollection.findOne({ email });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const tokenPayload = {
      userId: user._id,
      email: user.email,
    };

    const token = jwt.sign(tokenPayload, JWT_SECRET, { expiresIn: "48h" });
    user.token = token;
    console.log(user);
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  } finally {
    client.close();
  }
});

module.exports = router;