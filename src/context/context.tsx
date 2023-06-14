import { createContext, useEffect } from "react"; 
import { account } from '../Appwrite/service'
import { getDocument } from "../Appwrite/datbase/database";

type Child = {
  children: React.ReactNode;
};

type UserData = {
  isAuthenticate: boolean;
  userId: string;
  first_name: string;
  last_name: string;
  email: string;
  username: string;
  community: string[];
};

type ContextType = {
  userData: UserData;
  getSession: Function;
};

// Main context

const objForUserContext: UserData = {
  isAuthenticate: false,
  userId: "",
  first_name: "",
  last_name: "",
  email: "",
  username: "",
  community: [],
};

const checkForSession = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const session = await account.get();
      const commdata: any = await getDocument(
        "647c8c44c131fcc60809",
        "647c8c5108eba726ecdb",
        session.$id
      );
        
      objForUserContext.isAuthenticate = true;
      objForUserContext.community = [...commdata?.communities];
      objForUserContext.first_name = commdata.first_name;
      objForUserContext.last_name = commdata.last_name;
      objForUserContext.email = commdata.email;
      objForUserContext.userId = commdata.$id;
      objForUserContext.username = commdata.username;
      resolve(commdata);
    } catch (error) {
      reject( new Error(`${error}`))
    }
  });
};

const contextValues: ContextType = {
  userData: objForUserContext,
  getSession: checkForSession,
};

const MainContext = createContext<ContextType>(contextValues);

function MainContextProvider({ children }: Child) {

  // const [isUpdated , setisUpdated] = useState(false)

  useEffect(() => {
    async function fetchData() {
      try {
        await checkForSession();
        // setisUpdated(true)
        console.log("Updated data", objForUserContext);
      } catch (error) {
        console.log("Error", error);
      }
    }
    fetchData();
  }, []);
   console.log("contextValues", contextValues.userData.username)
    return (
      <MainContext.Provider value={contextValues}>
        {children}
      </MainContext.Provider>
    )
}

export { MainContextProvider, MainContext };
