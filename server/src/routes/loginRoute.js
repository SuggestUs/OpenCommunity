const express = require('express');
const router = express.Router();
const LoginController = require('../controllers/controllers.login');

router.post('/' , LoginController.loginUser)

module.exports = router;


