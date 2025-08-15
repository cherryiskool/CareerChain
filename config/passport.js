// code borrowed from WatchNow passport.js config

db = require('../models/db');
const passport = require("passport");
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

// here we will define the authentication
passport.use(new LocalStrategy({usernameField: 'walletAddress'}, async function verify(walletAddress, password, cb) {
  try {
  [row] = await db.query('SELECT * FROM users WHERE walletAddress = ?', [ walletAddress ])
    console.log(row[0]);
    if (!row[0]) {
      console.log(row[0]);
      return cb(null, false, { message: 'Incorrect Details'});
    }

    // check passwords

      if (await bcrypt.compare(password, row[0].hashedPassword)) {
        return cb(null, row[0]);

      } else {
        console.log('incorrect');
        return cb(null, false, { message: 'Incorrect Details'});
      }
    } catch (err) {
        return cb(err)
    }
}));

passport.serializeUser(function(user, cb) {
  cb(null, {id: user.id})
});

// function that uses the id from serialize user to get the user object
// allows me to call req.user.walletAddress etc.
passport.deserializeUser(async function(user, cb) {
  try {
    [user] = await db.query('SELECT * FROM users WHERE id = ?', [ user.id ])
    if (user[0]) {
      return cb(null, user[0]);
    } 
    // this had to be added in case deserialisation fails (the else statement specifically)
    else {
      return cb(null, false);
    }
  } catch (err) {
    return cb(err);
  }
});

module.exports = passport