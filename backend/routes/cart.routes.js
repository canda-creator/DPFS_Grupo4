const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cart.controller');

router.post('/add', cartController.add);
router.delete('/delete', cartController.delete);

module.exports = router;
