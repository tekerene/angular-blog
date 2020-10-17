var passport = require('passport');
var config = require('../config/settings');
//require('../config/passport')(passport);
var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();
var User = require("../models/User");

router.post('/register', function(req, res) {
    if (!req.body.fullName || !req.body.username || !req.body.password) {
      res.json({success: false, msg: 'Please pass full name, username and password.'});
    } else {
      var newUser = new User({
        fullName: req.body.fullName,
        username: req.body.username,
        password: req.body.password
      });
      //console.log(newUser)
      // save the user
      newUser.save(function(err) {
        if (err) {
          return res.json({success: false, msg: 'Username already exists.'});
        }
        res.json({success: true, msg: 'Successful created new user.'});
      });
    }
    console.log(newUser)
});

router.post('/login', function(req, res) {
  User.findOne({
    username: req.body.username
  }, function(err, user) {
    if (err) throw err;

    if (!user) {
      res.status(401).send({success: false, msg: 'Authentication failed. User not found.'});
      console.log("not a user")
    } else {
      // check if password matches
      user.comparePassword(req.body.password, function (err, isMatch) {
        console.log("comparing users")
        if (isMatch && !err) {
          // if user is found and password is right create a token
          var token = jwt.sign(user.toJSON(), config.secret);
          // return the information including token as JSON
          res.json({success: true, token: 'JWT ' + token});
          console.log(token,"+++++++")
        } else {
          res.status(401).send({success: false, msg: 'Authentication failed. Wrong password.'});
          console.log("auth failed");
        }
      });
    }
  });
});

router.post('/logout', passport.authenticate('jwt', { session: false}), function(req, res) {
  req.logout();
  res.json({success: true});
  console.log("user logout")
});

module.exports = router;