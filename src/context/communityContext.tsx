import { createContext, useState , Dispatch, SetStateAction, useEffect} from "react";
import {account } from '../Appwrite/service'

type child = {
    children : React.ReactNode
}
type communityContextType = {

}

const CommunityContext = createContext<communityContextType | undefined>(undefined)

function communityContextProvider({children} : child){
    
    const [communityData , setCommunityData] = useState<communityContextType>({
       first_name : '',
       last_name : '',
       username : '',
       communities : '',
    })
}