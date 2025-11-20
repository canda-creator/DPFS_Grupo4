const express = require('express');
const router = express.Router();
const categoriesController = require('../../controllers/api/categories.controller');

router.get('/', categoriesController.categories);

module.exports = router;
