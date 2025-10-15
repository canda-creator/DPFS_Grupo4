var express = require('express');
var router = express.Router();
var indexController = require('../controllers/index.controller');
const testDB = require('../controllers/index.controller').testDB; 


/* GET home page. */
router.get('/', indexController.index)

router.get('/test-db', testDB);


module.exports = router;

