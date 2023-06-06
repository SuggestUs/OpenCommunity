const { client, account } = require('../services/appwriteService')

const checkSession = async(req , res)=>{
    console.log("Checking for session")
    try {
        const res = await account.get();
        console.log(res);
        res.json({data : res});
    } catch (error) {
        console.log(error);
        res.status(400).send(error.response)
    }
}


module.exports={checkSession}