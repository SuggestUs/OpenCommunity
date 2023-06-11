import { createContext, useState , Dispatch, SetStateAction, useEffect} from "react";
import {account } from '../Appwrite/service'
import { getDocument } from "../Appwrite/datbase/database";

type child = {
  children : React.ReactNode
}

type userData = {
  userId : string,
  first_name : string,
  last_name : string,
  name : string,
  email : string,
  username : string,
  communities : string[],
}

type authentication = boolean;

type contextType = {
  isAuthenticate : boolean
  userData : userData,
  setUserData : Dispatch<SetStateAction<userData>>, 
  getSession : Function
}


//  Main context 
const MainContext = createContext<contextType | undefined>(undefined); 

function MainContextProvider({children} : child) {

  const [isAutenticate , setAutenticatication] = useState<boolean>(false);
  const [userData, setUserData]= useState<userData>({
    userId : '',
    first_name : '',
    last_name : '',
    name : '',
    email : '',
    username : '',
    communities : [],
  }) 

  const checkForSession = () => {

       return new Promise(async(resolve, reject)=>{
        await account.get()
        .then((res)=>{
          console.log('res from promise inside context', res)
          setAutenticatication(true);
          setUserData({
            ...userData,
            userId : res.$id,
            email : res.email,
            name : res.name
          })
        }).then(async()=>{
          console.log("userData.userId" , userData.userId)  
          await getDocument("647c8c44c131fcc60809","647c8c5108eba726ecdb", userData.userId).then((res)=>{
            // setUserData({
              console.log("new data", res)
              resolve(res);
            // })
          })
        })
        .catch((error)=>{
          console.log(error)
          reject(new Error('User is not authenticated'))
        });
       })
  };


  const contextValues : contextType  = {
    isAuthenticate: isAutenticate,
    userData: userData,
    setUserData: setUserData, 
    getSession: checkForSession
  }

 

  useEffect(()=>{

    const fetchData = async () => {
      try {
        await checkForSession()
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    console.log("we are Inside Context hook " , userData , isAutenticate);
  }, [userData])
  return (
    <MainContext.Provider value ={contextValues}>
         {children} 
    </MainContext.Provider>
  )
}


export {MainContextProvider , MainContext};