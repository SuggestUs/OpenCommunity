import { account, ID, database } from '../service';

type objForSignIn = {
    First_Name: string,
    Last_Name: string,
    Username : string
    Email: string,
    Password: string,
    Confirm_Password: string,
}

export const signInWithAppwrite = async (object: objForSignIn) => {

    try {
        const userCreation: any = await createUser(object);
        console.log("User Created", userCreation);

        const sessionCreation = await createSession(object.Email, object.Password)
        console.log("User Created", sessionCreation);


        const userDatabase = await createUserData('647c8c44c131fcc60809', '647c8c5108eba726ecdb',
            userCreation.$id, {
            first_name: object.First_Name,
            last_name: object.Last_Name,
            email: object.Email,
            username : object.Username
        });
        console.log("User Created", userDatabase);


    } catch (error) {
        throw new Error(`${error}`).message
    }
}

const createUser = (object: objForSignIn) => {
    return new Promise((resolve, reject) => {
        account.create(ID.unique(), object.Email, object.Password, object.First_Name + " " + object.Last_Name)
            .then((user) => {
                resolve(user);
            }).catch((error) => {
                reject(new Error(error))
            })
    })
}

const createSession = (email: string, password: string) => {
    return new Promise((resolve, reject) => {
        account.createEmailSession(email, password)
            .then((session) => {
                resolve(session)
            })
            .catch((error) => {
                reject(new Error(error))
            })
    })
}

const createUserData = (databaseId: string, collectionId: string, documentId: any, object: object) => {
    return new Promise((resolve, reject) => {
        database.createDocument(databaseId, collectionId, documentId, object)
            .then((data) => {
                resolve(data)
            })
            .catch((error) => {
                reject(new Error(error))
            })
    })
}




