const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");

const User = require("../models/userSchema");

module.exports = function (passport) {
  passport.use(
    new LocalStrategy(function (username, password, done) {
      // search by query {username:username}
      User.findOne({username: username})
        .then((user) => {
          if (!user) {
            return done(null, false);
          }

          // match the passwords with bcrypt
          bcrypt.compare(password, user.password, function (err, isMatch) {
            if (err) {
              console.log(err);
            }
            if (isMatch) {
              return done(null, user);
            } else {
              return done(null, false);
            }
          });
        })
        .catch((err) => done(err));
    })
  );

  // Serialize user
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  // Deserialize user
  passport.deserializeUser(function (id, done) {
    User.findById(id)
      .then((user) => done(null, user))
      .catch((err) => done(err));
  });
};
