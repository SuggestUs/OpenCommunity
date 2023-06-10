import { Routes, Route, useLocation } from "react-router-dom";
import { Suspense, useState } from "react";
import CommunityList from "./CommunityList";
import AccountForCommuntity from "./AccountForCommuntity";
import CreateHackathons from "./CreateHackathons";
import CreateTweet from "./CreateTweet";
import CreateEvents from "./CreateEvents";
// import SwipeableDrawer from '@mui/material/SwipeableDrawer';
// import { Button } from "@mui/material";
import CreateCommuity from "./CreateCommuity";
import IntroToCommunity from "./IntroToCommunity";

export default function DashbordForCommunity() {
  console.log("Data ", useLocation().pathname.startsWith("/community"));
  if (!useLocation().pathname.startsWith("/community")) {
    return null;
  }

  const [openSideBar, setSideBar] = useState(true);
  const toggleDrawer = (res: boolean) => (event: any) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setSideBar(res);
  };
  return (
    <div className="flex flex-row border w-full h-screen text-black">
      <div className="flex flex-col  border w-auto">
        {/* <Button variant="contained" color="primary">Open</Button> */}

        <CommunityList />
      </div>
      <div className="w-4/5">
        <Routes>
          <Route
            path="/community"
            element={
              <Suspense>
                <IntroToCommunity />
              </Suspense>
            }
          />
          <Route
            path="/community/createHackathons"
            element={
              <Suspense>
                <CreateHackathons />
              </Suspense>
            }
          />
          <Route path="/community/CreateEvents" element={<CreateEvents />} />
          <Route path="/community/CreateInform" element={<CreateTweet />} />
          <Route path="/community/Account" element={<AccountForCommuntity />} />
          <Route
            path="/community/createcommunity"
            element={<CreateCommuity openDrawer={true} />}
          />
        </Routes>
      </div>
    </div>
  );
}
