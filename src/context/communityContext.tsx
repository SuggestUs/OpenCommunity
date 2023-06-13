import { createContext } from "react";
import { getCommunityData } from "../Appwrite/datbase/database";


type child = {
    children: React.ReactNode
}

type objTypeForCommunity = {
    "community-name": string,
    "community-email": string,
    "creator-email": string,
    "organized-events": string[],
    "organized-hack	": string[],
    "profileId": string,
    "uniqueID" : string
}

type communityContextType = objTypeForCommunity[];

const objForCommunity: communityContextType = [];

type typeForContext = {
    dataloaded: boolean,
    dataForCommunity: communityContextType
    fetchData: Function
}



// const mainContxt = useContext(MainContext);


const fetchCommunityData = (databaseId :string, collectionID : string , userID:string ) => {
    console.log("userID", userID)
    return new Promise(async (resolve, reject) => {
        try {
            const data : any = await getCommunityData(databaseId , collectionID , userID )
            console.log("data", data.documents);
            // if(data.length >0){
                data.documents.map((item : any, index : number)=>{
                    console.log('item', item)
                    const obj =  {
                        "community-name": '',
                        "community-email": '',
                        "creator-email": '',
                        "organized-events": [],
                        "organized-hack	": [],
                        "profileId": '',
                        "uniqueID" : ''
                    }
                    obj["community-name"] = item["community-name"],
                    obj["community-email"] = item["community-email"],
                    obj["creator-email"] = item["creator-email"],
                    obj["uniqueID"] = item["$id"]
                   
                    objForCommunity[index] = obj;

                })
            

            resolve(data)
        } catch (error) {
            reject(new Error(`${error}`))
        }

    })
}

const contextForCommunity: typeForContext = {
    dataloaded: false,
    dataForCommunity: objForCommunity,
    fetchData: fetchCommunityData
}

const CommunityContext = createContext<typeForContext>(contextForCommunity)

function CommunityContextProvider({ children }: child) {


    return (
        <CommunityContext.Provider value={contextForCommunity}>
            {children}
        </CommunityContext.Provider>
    )
}

export { CommunityContextProvider, CommunityContext };