
const { client, account } = require('../services/appwriteService')
let sessionID = 0;
const loginUser = async(req, res)=>{
     try {
        const result = await account.createEmailSession(req.body.Email, req.body.Password)
        console.log('result' , result);
        sessionID = result.$id;
        const session = await account.getSession(sessionID);
        res.json({ failed : false , error : 'Successfull Login'})
     } catch (error) {
        console.log("error" , error)
        let errorMessage = error.response ? error.response.message : 'Server Error';

        res.json({ failed : true , error : errorMessage })

     }
}



module.exports = {loginUser , sessionID};