const express = require('express');
const router = express.Router();

router.get('/login', (req, res) => {
  res.render('users/login', { title: 'Login' });
});

router.get('/register', (req, res) => {
  res.render('users/register', { title: 'Register' });
});

module.exports = router;
