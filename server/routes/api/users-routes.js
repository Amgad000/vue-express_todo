const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const passport = require("passport");

const User = require("../../models/userSchema");

// add user (register process)
router.post("/register", (req, res) => {
  let newUser = new User(req.body);

  // hashing password before saving
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(newUser.password, salt, function (err, hash) {
      if (err) {
        console.log(err);
      }
      newUser.password = hash;

      newUser
        .save()
        .then((result) => {
          res.send("You are now registered and can login");
        })
        .catch((err) => {
          res.status(500).send("failure of registration");
        });
    });
  });
});

// login process
router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/login",
    successRedirect: "/",
  })
);

// logout
router.get("/logout", (req, res) => {
  // req.logout requires a callback fun.
  req.logout(function (error) {
    console.log(error);
  });
});
module.exports = router;
