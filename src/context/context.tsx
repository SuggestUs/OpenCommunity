import { createContext, useEffect } from "react";
import { account } from '../Appwrite/service'
import { getDocument } from "../Appwrite/datbase/database";

type child = {
  children: React.ReactNode
}

type userData = {
  isAuthenticate: boolean,
  userId: string,
  first_name: string,
  last_name: string,
  email: string,
  username: string,
  community: string[],
}


type contextType = {
  userData: userData,
  getSession: Function
}

//  Main context 

const objForUserContext: userData = {
  isAuthenticate: false,
  userId: '',
  first_name: '',
  last_name: '',
  email: '',
  username: '',
  community: [],
}

const checkForSession = () => {

  return new Promise(async (resolve, reject) => {
    try {
      const session = await account.get();
      const commdata: any = await getDocument("647c8c44c131fcc60809", "647c8c5108eba726ecdb", session.$id)
 
      objForUserContext.isAuthenticate = true;
      objForUserContext.community = [...commdata?.communities],
      objForUserContext.first_name = commdata.first_name,
      objForUserContext.last_name = commdata.last_name,
      objForUserContext.email = commdata.email,
      objForUserContext.userId = commdata.$id,
      objForUserContext.username = commdata.username;
      resolve(commdata)

    } catch (error) {
      reject( new Error("Error is here"))
    }
  })
};

const contextValues: contextType = {
  userData: objForUserContext,
  getSession: checkForSession
}
const MainContext = createContext<contextType>(contextValues);

function MainContextProvider({ children }: child) {

  useEffect(() => {

    async function fetchData() {
      try {
        // await checkForSession();
        console.log("updated data", objForUserContext)
      } catch (error) {
        console.log("error", error)
      }
    }
    fetchData();
  }, [objForUserContext]);
    return (
      <MainContext.Provider value={contextValues}>
        {children}
      </MainContext.Provider>

    )
}




export { MainContextProvider, MainContext };