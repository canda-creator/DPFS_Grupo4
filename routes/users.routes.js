var express = require("express");
var router = express.Router();
var indexController = require("../controllers/user.controller");

router.get("/", (req, res) => {
  res.redirect("/users/login");
});

router.get("/login", indexController.login);

router.get("/register", indexController.register);

module.exports = router;
