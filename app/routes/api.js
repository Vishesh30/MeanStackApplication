var User = require("../models/user");
var Quiz = require("../models/quiz");
var request = require("request");
var gAuth = require("../auth/googleauth");

module.exports = function(router) {
  router.post("/user", function(req, res) {
    var user = new User();

    user.username = req.body.username;
    user.password = req.body.password;
    user.email = req.body.email;

    if (
      req.body.username == null ||
      req.body.username == "" ||
      req.body.password == null ||
      req.body.password == "" ||
      req.body.email == null ||
      req.body.email == ""
    ) {
      res.send("Ensure UserName , Password , Email is Provided");
    } else {
      user.save(function(err) {
        if (err) res.send(err);
        else res.send("User Created");
      });
    }
  });

  router.get("/user", function(req, res) {
    User.find((err, resArr) => {
      res.send(JSON.stringify(resArr));
    });
  });

  router.get("/quiz", function(req, res) {
    Quiz.find((err, resArr) => {
      res.send(JSON.stringify(resArr));
    });
  });

  router.post("/quiz", function(req, res) {
    let quiz = new Quiz(req.body);

    quiz.save(function(err) {
      if (err) res.send(err);
      else res.send("Successfully created new Quiz");
    });
  });

  router.get("/home", function(req, res) {
    res.send("Home Page");
  });

  router.get("/loginUrl", function(req, res) {
    res.send(gAuth.googleUrl());
  });

  return router;
};
