import { createContext, useState , Dispatch, SetStateAction, useEffect} from "react";
import {account } from '../Appwrite/service'


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
  Events : string[],  
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
    Events : [],
  }) 

  const checkForSession = () => {

       return new Promise((resolve, reject)=>{
        account.get().then((res)=>{
          console.log('res from promise inside context', res)
          setAutenticatication(true);
          setUserData({
            ...userData,
            userId : res.$id,
            email : res.email,
            name : res.name
          })
          resolve(res);
        }).catch((error)=>{
          console.log(error)
          reject(new Error('User id not authenticated'))
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
        await checkForSession();
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    console.log("we are Inside Context hook " , userData , isAutenticate);
  }, [])
  return (
    <MainContext.Provider value ={contextValues}>
         {children} 
    </MainContext.Provider>
  )
}


export {MainContextProvider , MainContext};