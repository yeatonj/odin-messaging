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
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// This line allows express to parse the form data
app.use(express.urlencoded({ extended: true }));

// Set session data
const session = require("express-session");
const passport = require("passport");
const loginRouter = require("./routes/loginRouter");
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized:false
}));

// Authenticate passport
app.use(passport.session());
require('./authentication/passport');

// Set routes
app.use("/login", loginRouter);
app.use("/", indexRouter);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App started - listening on port ${PORT}!`);
});