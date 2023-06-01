const { ID } = require('appwrite');
const { client, account } = require('../services/appwriteService')

let uniqueID = '';
const SigninUser = async (req, res) => {
    console.log('req______', req.body );
    uniqueID = ID.unique();
    console.log('ID', uniqueID);
    try {
        const result = await account.create(uniqueID, req.body.Email, req.body.Password);
        console.log('Sign Up Successfull');
        return res.status(200).send({data : result })
    } catch (error) {
        console.log("Error....", error.message)
    }
}

const updateUser = () => {

}



module.exports = { updateUser, SigninUser }