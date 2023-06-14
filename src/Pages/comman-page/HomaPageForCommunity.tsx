import { MainContext } from "../../context/context";
import NavbarForDashBord from "../../component/NavbarForDashBord";

import { useContext, useEffect } from "react";


export default function HomaPageForCommunity() {
  const mainContxt = useContext(MainContext);
  
  useEffect(()=>{
    console.log("mainContxt" , mainContxt)
  },[mainContxt])
  return (
    <div className="h-screen flex md:flex-row flex-col w-full">
      <NavbarForDashBord />
      <div className="text-black">
        HomaPageForCommunity : {mainContxt?.userData.username}
      </div>
    </div>
  );
}
