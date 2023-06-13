import { MainContext } from "../../context/context";
import { useContext } from "react";
import NavbarForDashBord from "../../component/NavbarForDashBord";

export default function HomaPageForCommunity() {
  const mainContxt = useContext(MainContext);
  return (
    <div className="h-screen flex md:flex-row flex-col w-full">
      <NavbarForDashBord />
      <div className="text-black">
        HomaPageForCommunity : {mainContxt?.userData.username}
      </div>
    </div>
  );
}
