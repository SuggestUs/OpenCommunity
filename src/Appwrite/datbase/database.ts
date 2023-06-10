import { account, client, database , storage , ID} from '../service'
type objForCommunity = {
    'community-name' : string,
    'community-email' :  string,
    'creatorId' : string | undefined,
    'creator-email':string | undefined,
    'profileId' : string
}
export const createCommunity = async (obj : objForCommunity , file : File | undefined) => {
    try {
           //    
        const createProfile :any  = await addProfileForCommunity( "64846e25dd7c75444ae1" , file)
        console.log("Profile added" , createProfile);
        obj.profileId  = createProfile.$id;  

        const datastored : any  = await storeDataForCommunity("6481e700d45ab5a74280" , "6481e72114d981b1d8bf",ID.unique(),obj);
        console.log("datastored" , datastored);
        
        // get data about user details 
        const getData : any = await getDocument("647c8c44c131fcc60809","647c8c5108eba726ecdb", obj.creatorId)
        console.log("getData" , getData.communities)

        let updatedArray = [...getData.communities , datastored?.$id] 
        
        const updateData = await updateUserData("647c8c44c131fcc60809","647c8c5108eba726ecdb", obj.creatorId , {communities : [...updatedArray]})
        console.log("updateUserData", updateData)   
    } catch (error) {
        throw new Error(`${error}`).message
    }
}

const storeDataForCommunity = (databaseId: string, collectionId: string, documentId: any, object: object) => {
    return new Promise((resolve, reject) => {
        database.createDocument(databaseId , collectionId , documentId , object).then((res)=>{
            resolve(res);           
        }).catch((error)=>{
            reject(new Error(error))
        })

    })
}


const updateUserData =(databaseId: string, collectionId: string, documentId: any, object: object)=>{
    
    return new Promise((reolve , reject)=>{
        database.updateDocument(databaseId, collectionId , documentId, object).then((res)=>{
              reolve(res);
              console.log("Updated documents", res)
        }).catch((error)=>{
            reject(new Error(error))
        })
    })
}


const getDocument  = (databaseId: string, collectionId: string, documentId: any)=>{
       return new Promise((relove , reject)=>{
         database.getDocument(databaseId, collectionId, documentId).then((res)=>{
            console.log("get data about user" , res);
            relove(res)
         }).catch((error)=>{
              reject(new Error(error))
         })
       })
}


const addProfileForCommunity = (bucketId: string ,file : File | undefined)=>{
    
    console.log("file" , file)
    return new Promise((resolve , reject)=>{
        file !== undefined && storage.createFile(bucketId , ID.unique(), file).then((res)=>{
            resolve(res)
        }).catch((error)=>{
            reject(new Error(error));
        })

        // reject(new Error("Pictutre is not available or not suitable"))
        
    })
}