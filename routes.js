const express = require("express");
const router = express.Router();
const queries = require("./db/queries");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const token_secret = "french_toast";

function isValidId(req, res, next) {
  if (!isNaN(req.params.id)) {
    return next();
  }
  next(new Error("Invalid ID"));
}

function validUser(user) {
  const hasEmail = typeof user.email == "string";
  const hasPass = typeof user.password == "string";
  return hasEmail && hasPass;
}

router.get("/users", function(req, res) {
  queries.getUsers().then((users) => res.json(users));
});

router.post("/signup", function(req, res, next) {
  if (validUser(req.body)) {
    queries.getUserByEmail(req.body.email).then((user) => {
      if (!user) {
        bcrypt.genSalt(8, function(err, salt) {
          bcrypt.hash(req.body.password, salt, function(err, hash) {
            const user = {
              name: req.body.name,
              email: req.body.email,
              password: hash
            };
            queries.createUser(user).then((user) => {
              jwt.sign({
                id: user[0].id
              }, token_secret, {
                expiresIn: "1h"
              }, (err, token) => {
                console.log("err", err);
                console.log("token", token);
                res.json({
                  id: user[0].id,
                  token,
                  message: "ok"
                });
              });
            });
          });
        });
      } else {
        next(new Error("Email already in use"));
      }
    });
  } else {
    next(new Error("Invalid User"));
  }
});

router.post("/login", function(req, res, next) {
  if (validUser(req.body)) {
    queries.getUserByEmail(req.body.email).then((user) => {
      if (user) {
        bcrypt.compare(req.body.password, user.password).then((match) => {
          if (match) {
            jwt.sign({
              id: user.id
            }, token_secret, {
              expiresIn: "1h"
            }, (err, token) => {
              console.log("err", err);
              console.log("token", token);
              res.json({
                id: user.id,
                token,
                message: "logged in"
              });
            });
          } else {
            next(new Error("Invalid Login"));
          }
        });
      } else {
        next(new Error("Invalid Login"));
      }
    });
  } else {
    next(new Error("Invalid Login"));
  }
});

router.get("/location", function(req, res) {
  queries.getAllLocation().then(locations => res.json(locations));
});

router.put("/location", function(req, res) {
  console.log(req.body);
  queries.updateLocation(req.body.rating, req.body.id).then(location => res.json(location));
});

module.exports = router;
