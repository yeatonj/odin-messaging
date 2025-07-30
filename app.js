// app.js
// initialize express
const express = require("express");
const app = express();

// Initialize dotenv
require('dotenv').config();

// Routes
const indexrouter = require("./routes/indexRouter");

// Set up ejs
const path = require("node:path");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// This line allows express to parse the form data
app.use(express.urlencoded({ extended: true }));

// Set routes
app.get("/", indexrouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App started - listening on port ${PORT}!`);
});