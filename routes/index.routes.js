var express = require('express');
var router = express.Router();
var indexController = require('../controllers/index.controller');


/* GET home page. */
router.get('/', indexController.index);

router.get('/catalogo', indexController.catalogo);

router.get('/detail', indexController.detail);

router.get('/login', indexController.login);

router.get('/register', indexController.register);

module.exports = router;
