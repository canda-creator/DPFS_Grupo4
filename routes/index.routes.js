var express = require('express');
var router = express.Router();
var indexController = require('../controllers/index.controller');


/* GET home page. */
router.get('/', indexController.index);

router.get('/catalogo', indexController.products);

router.get('/catalogo/create', indexController.createForm);

router.get('/catalogo/:id', indexController.detail);

router.get('/catalogo/:id/edit', indexController.edit);

router.post('/catalogo', indexController.products);

router.put('/catalogo/:id', indexController.products);

router.delete('/catalogo/:id', indexController.products);

router.get('/create', indexController.create);

module.exports = router;
