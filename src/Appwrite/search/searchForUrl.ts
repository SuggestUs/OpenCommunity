import {account , client, database ,storage } from '../service'


export function getDataForCommunityProfile(uniqueId : string){
   return new Promise((resolve , reject)=>{
       database.getDocument('6481e700d45ab5a74280', '6481e72114d981b1d8bf' , uniqueId).then((res)=>{
         resolve(res)
       }).catch((error)=>{
        console.log(error)
        reject(new Error(`${error}`))
       })
   })
}

export function getProfileForCommunity(fileId : string){
   return new Promise((resolve , reject)=>{
    try {
      const URL = storage.getFilePreview("64846e25dd7c75444ae1" ,fileId)
      resolve(URL);
    } catch (error) {
      reject(new Error(`${error}`))
    }

   })
}