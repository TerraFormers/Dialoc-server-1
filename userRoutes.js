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
  const hasName = typeof user.name == "string";
  const hasEmail = typeof user.email == "string";
  const hasPass = typeof user.password == "string";
  return hasName && hasEmail && hasPass;
}

function allowAccess(req, res, next) {
  console.log("made it");
  if (req.user.id == req.params.id) {
    next();
  } else {
    console.log(req.user.id);
    console.log(req.params);
    res.status(401);
    next(new Error("Un-Authorized"));
  }
}

router.get("/:id", isValidId, allowAccess, function(req, res) {
  queries.getUser(req.params.id).then((user) => res.json(user));
});

router.get("/:id/location", isValidId,  allowAccess,function(req, res, next) {
  queries.getLocationByUser(req.params.id).then((user) => res.json(user));
});

router.post("/:id/location", isValidId, allowAccess, function(req, res, next) {
  queries.addLocationByUser(req.body).then((location) => res.json(location));
});

router.delete("/:id/location", isValidId, allowAccess, function(req, res, next) {
  queries.deleteLocationByUser(req.body.id).then(() => res.json("deleted"));
});

module.exports = router;
