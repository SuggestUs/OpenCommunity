import { MainContext } from "../../context/context";
import { useContext, useEffect } from "react";

export default function HomaPageForCommunity() {
  const mainContxt = useContext(MainContext);
  
  useEffect(()=>{
    console.log("mainContxt" , mainContxt)
  },[mainContxt])
  return (
    <div className="text-black">
      HomaPageForCommunity : {mainContxt?.userData.username}
    </div>
  );
}
