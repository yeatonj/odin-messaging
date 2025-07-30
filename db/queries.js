const pool = require("./pool");
const { genPassword } = require("../lib/passwordUtils");

async function getUserFromUsername(username) {
  const { rows } = await pool.query("SELECT * FROM users WHERE username=$1",[username]);
  return rows;
}

async function getUserFromId(id) {
  const { rows } = await pool.query("SELECT * FROM users WHERE id=$1",[id]);
  return rows;
}

async function addUser(username, password, first, last, memberPhrase, adminPhrase) {
  // To add - some sort of checking for member and admin phrase
  try {
      const pwHash = await genPassword(password);
    await pool.query("INSERT INTO users (username, password, first, last, isMember, isAdmin) VALUES ($1, $2, $3, $4, $5, $6)", [username, pwHash, first, last, false, false]);
  } catch {
    throw error("Unable to create user, username already exists.");
  }
}

module.exports = {
  getUserFromUsername,
  getUserFromId,
  addUser
}