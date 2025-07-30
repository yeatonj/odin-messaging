const { Pool } = require("pg");
require('dotenv').config();

// All of the following properties should be read from environment variables
// We're hardcoding them here for simplicity
module.exports = new Pool({
  host: process.env.POST_HOST, // or wherever the db is hosted
  user: process.env.POST_USER,
  database: process.env.POST_DATABASE,
  password: process.env.POST_PWD, // We don't have a password, which is probably dumb
  port: process.env.POST_PORT, // The default port
});