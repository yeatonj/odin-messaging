const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const getUserFromUsername = require('../db/queries');

const customFields = {
    usernameField: 'uname',
    passwordField: 'pw'
};

async function verifyCallback(username, password, done) {
    try {
      const rows = getUserFromUsername(username);
      const user = rows[0];

      if (!user) {
        return done(null, false, { message: "Incorrect username" });
      }
      if (user.password !== password) {
        return done(null, false, { message: "Incorrect password" });
      }
      return done(null, user);
    } catch(err) {
      return done(err);
    }
}

const strategy = new LocalStrategy(customFields, verifyCallback);

passport.use(strategy);