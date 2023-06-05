const express = require('express');
const router = express.Router();

// SIGN IN
router.post('/login', (req, res) => {
  // Login First Step

});

router.post('/login-mfa', (req, res) => {
  // Login Second Step

});

// SIGN UP
router.post('/register', (req, res) => {
  // Register First Step

});

router.post('/register-email-validate', (req, res) => {
  // Register Second Step

});


module.exports = router;
