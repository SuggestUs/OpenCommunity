import { useEffect } from "react";
import { account, client } from "../../Appwrite/service";
import { useNavigate } from "react-router-dom";
export default function CreateCommuity() {

const navigate = useNavigate();    
const checkForSession = async () => {
        const promise = account.get();
        promise.then((res) => {
            console.log('res', res)
        })
        .catch((error) => {
            console.log("Error ", error.message)
            navigate('/authentication')
          })
      }
useEffect(()=>{
    checkForSession();
})
  return (
    <div>CreateCommuity</div>
  )
}



// 