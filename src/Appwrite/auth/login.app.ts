import { client, account, ID } from '../service';

type objForLogin = {
    Email: string
    Password: string
}
export const loginWithAppwrite = async (object: objForLogin) => {
    try {
        const logedIn = await createLogin(object)
        console.log("Login", logedIn)
    } catch (error) {
        throw new Error(`${error}`).message
    }

}


const createLogin = (object: objForLogin) => {
    return new Promise((reslove, reject) => {
        account.createEmailSession(object.Email, object.Password)
            .then((res) => {
                reslove(res)
            })
            .catch((error) => {
                reject(error)
            })
    })
}