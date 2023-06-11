import { createContext, useState , Dispatch, SetStateAction, useEffect , useContext} from "react";
import {account } from '../Appwrite/service'
import { getDocument } from "../Appwrite/datbase/database";

type child = {
  children : React.ReactNode
}

type userData = {
  userId : string,
  first_name : string,
  last_name : string,
  email : string,
  username : string,
  community : string[],
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

  
  // const context = useContext(MainContext);

  const [isAutenticate , setAutenticatication] = useState<boolean>(false);
  const [userData, setUserData]= useState<userData>({
    userId : '',
    first_name : '',
    last_name : '',
    email : '',
    username : '',
    community : [],
  }) 

   const checkForSession = async() => {
    
        const res = await account.get()
        console.log('res from promise inside context', res);
        setAutenticatication(true);
  
        console.log("isAutenticate", isAutenticate);
  
        const commdata : any = await getDocument("647c8c44c131fcc60809", "647c8c5108eba726ecdb", res.$id)

          console.log("new data", commdata);
          setUserData({
            ...userData,
            community :  [...commdata?.communities],
            first_name : commdata.first_name,
            last_name : commdata.last_name,
            username : commdata.username,
            userId: commdata.$id,
            email: commdata.email,
          })
          
  };
  
  const contextValues : contextType  = {
    isAuthenticate: isAutenticate,
    userData: userData,
    setUserData: setUserData, 
    getSession: checkForSession
  }

  
  useEffect(()=>{
    checkForSession()
  }, []);
  
  console.log("we are Inside Context hook " , userData);

    return (
      <MainContext.Provider value ={contextValues}>
         {children} 
    </MainContext.Provider>
  )
 }



export {MainContextProvider , MainContext};