const express = require('express');
const router = express.Router();
const colorController = require('../../controllers/api/color.controller');

router.get('/', colorController.colors);

module.exports = router;
