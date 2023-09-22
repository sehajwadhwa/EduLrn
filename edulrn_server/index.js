const fetch = require("node-fetch");
const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const session = require("express-session");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");
const coursesRoute = require("./routes/courses.js");
const usersRoute = require("./routes/users.js");
const authRoute = require("./routes/Auth.js");
const app = express();

// Middleware
const allowedOrigins = ["http://localhost:3000"]; // Add other origins as needed
const corsOptions = {
  origin: allowedOrigins,
  credentials: true, // Allow credentials (cookies, headers, etc.)
};

app.use(cors(corsOptions));
app.use("/assets", express.static(path.join(__dirname, "assets")));
app.use(express.json());
app.use(cookieParser());

app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 500000, // (in milliseconds)
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use("/courses", coursesRoute);
app.use("/users", usersRoute);
app.use("/auth",authRoute);

// Google OAuth Configuration
passport.use(
  new GoogleStrategy(
    {
      clientID:
        "1005204749854-rolsm63fi5dm8rh1nahe1i8f89717is8.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "http://localhost:5000/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      // console.log(profile); // Store user information in your database or session.

      const { email, family_name, given_name, name, sub, picture } =
        profile._json;

      const newUser = {
        id: sub,
        displayName: name,
        familyName: family_name,
        givenName: given_name,
        email: email,
      };

      //POST

      console.log("posting user");
      const url = "http://localhost:5000";
      fetch(`${url}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("newUser: " + newUser);
          // setuserData(data.data);
          return done(null, profile);
        })
        .catch((err) => {
          console.log("error while creating user: " + err);
        });
    }
  )
);

passport.use(
  "instructor",
  new GoogleStrategy(
    {
      clientID:
        "1005204749854-rolsm63fi5dm8rh1nahe1i8f89717is8.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "http://localhost:5000/auth/instructor/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      // console.log(profile); // Store user information in your database or session.
      profile.userType = "instructor";
      const userType = profile.userType;

      const { email, family_name, given_name, name, sub, picture } =
        profile._json;

      const newUser = {
        id: sub,
        displayName: name,
        familyName: family_name,
        givenName: given_name,
        email: email,
        userType: userType,
      };

      //POST

      console.log("posting user");
      const url = "http://localhost:5000";
      fetch(`${url}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("newUser: " + newUser);
          // setuserData(data.data);
          return done(null, profile);
        })
        .catch((err) => {
          console.log("error while creating user: " + err);
        });
    }
  )
);

passport.use(
  "student",
  new GoogleStrategy(
    {
      clientID:
        "1005204749854-rolsm63fi5dm8rh1nahe1i8f89717is8.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "http://localhost:5000/auth/student/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      // console.log(profile); // Store user information in your database or session.
      profile.userType = "student";
      const userType = profile.userType;
      const { email, family_name, given_name, name, sub, picture } =
        profile._json;

      const newUser = {
        id: sub,
        displayName: name,
        familyName: family_name,
        givenName: given_name,
        email: email,
        userType: userType,
      };

      //POST

      console.log("posting user");
      const url = "http://localhost:5000";
      fetch(`${url}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("newUser: " + newUser);
          // setuserData(data.data);
          return done(null, profile);
        })
        .catch((err) => {
          console.log("error while creating user: " + err);
        });
    }
  )
);
// callBack
// OAuth: clientId, clientSecret

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

// Routes
app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    // Successful authentication, redirect to the frontend app.
    res.redirect("http://localhost:3000");
  }
);

app.get(
  "/auth/instructor",
  passport.authenticate("instructor", { scope: ["profile", "email"] })
);

app.get(
  "/auth/instructor/google/callback",
  passport.authenticate("instructor", { failureRedirect: "/" }),
  (req, res) => {
    // Successful authentication, redirect to the frontend app.
    res.redirect("http://localhost:3000/instructor");
  }
);

app.get(
  "/auth/student",
  passport.authenticate("student", { scope: ["profile", "email"] })
);

app.get(
  "/auth/student/google/callback",
  passport.authenticate("student", { failureRedirect: "/" }),
  (req, res) => {
    // Successful authentication, redirect to the frontend app.
    res.redirect("http://localhost:3000/student");
  }
);

app.get("/user", (req, res) => {
  // Return user information (if authenticated) or an error message.
  if (req.isAuthenticated()) {
    // console.log("Authentication user:req.user " + req.user);
    res.json({ user: req.user });
  } else {
    res.status(401).json({ error: "Not authenticated" });
  }
});

app.get("/logout", (req, res) => {
  // Log out the user and redirect to the frontend.
  req.logout((err) => {
    if (err) {
      console.error(err);
    }
    // res.redirect('http://localhost:3000'); // Replace with your frontend URL
    res.send({ redirect: true });
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`I am running ${PORT}`);
});