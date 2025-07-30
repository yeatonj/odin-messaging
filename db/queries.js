const pool = require("./pool");

export async function getUserFromUsername(username) {
  const { rows } = await pool.query("SELECT * FROM users WHERE username=$1",[username]);
  return rows;
}