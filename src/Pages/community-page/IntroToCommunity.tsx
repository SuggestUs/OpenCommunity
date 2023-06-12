import { useContext } from "react";
import {CommunityContext} from '../../context/communityContext'

export default function IntroToCommunity() {

  const communitydata = useContext(CommunityContext);
  return (
    <div className="flex items-center justify-center h-screen">
      <p>hELLO</p>
    </div>
  );
}
