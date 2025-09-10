var express = require("express");
var router = express.Router();
const { uploadUser } = require("../middlewares/multer");
var indexController = require("../controllers/user.controller");

router.get("/", (req, res) => {
  res.redirect("/users/login");
});

router.get("/login", indexController.login);

router.get("/register", indexController.register);


router.post("/register", uploadUser.single("profile"), indexController.processRegister);

module.exports = router;
