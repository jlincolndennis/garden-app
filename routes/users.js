var express = require('express');
var router = express.Router();
var knex = require('knex')(require('../knexfile')[process.env.DB_ENV || 'development']);
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');


router.post('/signup', function(req, res, next){
  var errors = [];

  if (!req.body.username || !req.body.username.trim()) errors.push("Username can't be blank");
  if (!req.body.password || !req.body.password.trim()) errors.push("Password can't be blank");

  if(errors.length){
    res.status(422).json({
      errors: errors
    })
  } else {
    knex('users')
      .whereRaw('lower(username) = ?', req.body.username.toLowerCase())
      .count()
      .first()
      .then(function(result){
        if(result.count === '0'){
          var saltRounds = 4;
          var passwordHash = bcrypt.hashSync(req.body.password, saltRounds);

          knex('users')
            .insert({
              username: req.body.username,
              password: passwordHash
            })
            .returning("*")
            .then(function (users) {
              var user = users[0];
              var token = jwt.sign({user_id: user.id}, process.env.JWT_SECRET);
              res.json({
                user_id: user.id,
                username: user.username,
                token: token
              })
            })
        } else {
          res.status(422).json({
            errors: ['Username is already in the database!']
          })
        }
      })
  }
})

router.post('/signin', function(req, res, next) {
  var errors = [];

  if (!req.body.username || !req.body.username.trim()) errors.push("Username can't be blank");
  if (!req.body.password || !req.body.password.trim()) errors.push("Password can't be blank");

  if(errors.length) {
    res.status(422).json({
      errors: errors
    })
  } else {
    knex('users')
      .whereRaw('lower(username) = ?', req.body.username.toLowerCase())
      .first()
      .then(function(user){
        if(!user){
          res.status(400).json({
            errors: ['Invalid Sign In Credentials.']
          })
        } else {
          if(bcrypt.compareSync(req.body.password, user.password)) {
            var token = jwt.sign({user_id: user.id}, process.env.JWT_SECRET);
            res.json({
              user_id: user.id,
              username: user.username,
              token: token
            })
          } else {
            res.status(400).json({
              errors: ['Invalid Sign In Credentials']
            })
          }
        }
      })
  }

});

module.exports = router;
