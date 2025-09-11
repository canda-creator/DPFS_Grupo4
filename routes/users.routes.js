const express = require('express');
const router = express.Router();
const { uploadUser } = require('../middlewares/multer');
const userController = require('../controllers/user.controller');
const guest = require("../middlewares/auth/guest");
const logged = require("../middlewares/auth/logged")

router.get('/login',guest, userController.login);
router.post('/login', userController.processLogin);
router.get('/register',guest, userController.register);
router.post('/register', uploadUser.single('profile'), userController.processRegister);

router.post('/logout', userController.logout);

router.get('/profile', logged,userController.profile);

module.exports = router;
