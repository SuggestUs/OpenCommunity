const express = require('express');
const router = express.Router();
const SigninController = require('../controllers/controllers.signin')


router.post('/' , SigninController.SigninUser);

router.get('/' , (req, res)=>{
    res.send("Data get it from get")
});

module.exports = router;