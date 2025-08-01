const pool = require("./pool");
const { genPassword } = require("../lib/passwordUtils");
const { use } = require("passport");

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

async function getMessages() {
  const { rows } = await pool.query("SELECT * FROM messages;");
  return rows;
}

async function deleteMessage(id) {
  try {
    await pool.query("DELETE FROM messages WHERE user_id=$1;", [id]);
  } catch {
    throw error("Unable to delete message");
  }
}

async function postMessage(message, user_id, date) {
  try {
    await pool.query("INSERT INTO messages (message, user_id, date) VALUES ($1, $2, $3);", [message, user_id, date]);
  } catch {
    throw error("Unable to post message.");
  }
}

module.exports = {
  getUserFromUsername,
  getUserFromId,
  addUser,
  getMessages,
  deleteMessage,
  postMessage
}