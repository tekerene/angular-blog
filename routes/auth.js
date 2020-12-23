var passport = require('passport');
var config = require('../config/settings');
//require('../config/passport')(passport);
var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();
var User = require("../models/User");

router.post('/register', function(req, res) {
    if (!req.body.fullName || !req.body.username ||  !req.body.password || !req.body.userProfileReference || !req.body.userProfileUrl || !req.body.bio) {
      res.json({success: false, msg: 'Please pass full name, username and password.'});
    } else {
      var newUser = new User({
        fullName: req.body.fullName,
        username: req.body.username,
        password: req.body.password,
        userProfile: req.body.userProfileReference,
        userProfileUrl: req.body.userProfileUrl,
        bio: req.body.bio
      });
      //console.log(newUser)
      // save the user
      newUser.save(function(err) {
        if (err) {
          return res.json({success: false, msg: 'Username already exists.'});
        }
        res.json({newUser, success: true, msg: 'Successful created new user.'});
        console.log(newUser, 'Successful created new user.');
        
      });
      //console.log(newUser)
    }
    
});
router.get('/', function(req, res, data) {
  var token = getToken(req.headers);
  if (data) {
      User.find(function (err, users) {
      if (err) return next(err);
      res.json(users);
    });
  } else {
    return res.status(403).send({success: false, msg: 'No User Found.'});
  }
})
router.get('/:id', function(req, res, data) {
  var token = getToken(req.headers);
  if (data) {
      User.findById(req.params.id, function (err, user) {
      if (err) return err;
      res.json(user);
    });
  } else {
    return res.status(403).send({success: false, msg: 'No User Found.'});
  }
})

router.post('/login', function(req, res) {
  User.findOne({
    username: req.body.username
  }, function(err, user) {
    if (err) throw err;
console.log(user)
    if (!user) {
      res.status(401).send({success: false, msg: 'Authentication failed. User not found.'});
      console.log("not a user")
    } else {
      // check if password matches
      user.comparePassword(req.body.password, function (err, isMatch) {
        console.log("comparing users")
        if (isMatch && !err) {
          // if user is found and password is right create a token
          var token = jwt.sign({data:user,}, user.toJSON(), config.secret);
          // return the information including token as JSON
          //res.json({success: true, token: 'JWT ' + token, 'data' : user});
          res.json({success: true, message:"Logged in Successfylly",token: 'JWT', data:user})
          //console.log(token,"+++++++")
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