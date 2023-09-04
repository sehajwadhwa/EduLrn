const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const session = require("express-session");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

// Middleware
const allowedOrigins = ["http://localhost:3000"]; // Add other origins as needed
const corsOptions = {
  origin: allowedOrigins,
  credentials: true, // Allow credentials (cookies, headers, etc.)
};

app.use(cors(corsOptions));
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

// Google OAuth Configuration
passport.use(
  new GoogleStrategy(
    {
      clientID:
        "217618555359-p3mmm999cumt3blg5267fufbdn1a81p9.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "http://localhost:5000/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      // Store user information in your database or session.
      return done(null, profile);
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

app.get("/user", (req, res) => {
  // Return user information (if authenticated) or an error message.
  if (req.isAuthenticated()) {
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
  console.log(`Server is running on port ${PORT}`);
});
