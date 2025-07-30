// app.js
// initialize express
const express = require("express");
const app = express();

// Initialize dotenv
require('dotenv').config();

// Routes
const indexRouter = require("./routes/indexRouter");

// Set up ejs
const path = require("node:path");
const { session } = require("passport");
const passport = require("passport");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// This line allows express to parse the form data
app.use(express.urlencoded({ extended: true }));

// Set session data
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized:false
}));

// Authenticate passport
require('./authentication/passport');
app.use(passport.session());

// Set routes
app.use("/login", loginRouter);
app.use("/", indexRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App started - listening on port ${PORT}!`);
});