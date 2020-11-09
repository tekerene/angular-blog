var express = require('express');
var User = require("../models/User");
var router = express.Router();

/* GET users listing. */
router.get('/all', function(req, res, next) {
  User.find(function (err, user) {
    if (err) return next(err);
    res.json(user);
  });
  //res.send('respond with a resource');
});

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


module.exports = router;
