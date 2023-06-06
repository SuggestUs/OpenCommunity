const { ID } = require('appwrite');
const { client, account  } = require('../services/appwriteService')
// const { sdk } = require('../services/appwriteService')

let uniqueID = '';
const SigninUser = async (req, res) => {
    console.log('req______', req.body );
    uniqueID = ID.unique();
    console.log('ID', uniqueID);
    try {
        const result = await account.create(uniqueID, req.body.Email, req.body.Password , req.body.First_Name+""+req.body.Last_Name);
        const create_session = await account.getSession()


        const session = await account.getSession(create_session.$id);

        console.log('Sign Up Successfull' , session);
        return res.status(200).send({data : result })
    } catch (error) {
        console.log("Error....", error.message)
    }
}

const updateUser = () => {

}



module.exports = { updateUser, SigninUser }