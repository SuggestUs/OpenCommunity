import { MainContext } from "../../context/context";
import { useContext } from "react";

export default function HomaPageForCommunity() {
  const mainContxt = useContext(MainContext);
  return (
    <div className="text-black">
      HomaPageForCommunity : {mainContxt?.userData.username}
    </div>
  );
}
