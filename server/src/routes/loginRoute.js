const express = require('express');
const router = express.Router();
const {Client , Account} = require('appwrite')



router.post('/' , (req, res)=>{
    console.log('Data is here ..');
    res.json(req.body);

})



module.exports = router;



module.exports = router;    