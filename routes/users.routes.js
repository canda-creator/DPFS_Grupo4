const express = require('express');
const router = express.Router();
const { uploadUser } = require('../middlewares/multer');
const userController = require('../controllers/user.controller');
const logged = require('../middlewares/logged');

// públicas
router.get('/login', userController.login);
router.post('/login', userController.processLogin);
router.get('/register', userController.register);
router.post('/register', uploadUser.single('profile'), userController.processRegister);

// logout
router.post('/logout', userController.logout);

// ✅ SOLO esta
router.get('/profile', logged, userController.profile);

module.exports = router;
