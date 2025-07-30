const pool = require("./pool");

async function getUserFromUsername(username) {
  const { rows } = await pool.query("SELECT * FROM users WHERE username=$1",[username]);
  return rows;
}

async function getUserFromId(id) {
  const { rows } = await pool.query("SELECT * FROM users WHERE id=$1",[id]);
  return rows;
}

module.exports = {
  getUserFromUsername,
  getUserFromId
}