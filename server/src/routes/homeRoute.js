const express = require('express');
const router = express.Router();
const homeController = require('../controllers/controllers.home');

router.post('/' ,homeController.checkSession);


module.exports = router;