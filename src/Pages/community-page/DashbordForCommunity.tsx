import { Routes, Route, useLocation } from "react-router-dom";
import { Suspense, useState } from "react";
import CommunityList from "./CommunityList";
import AccountForCommuntity from "./AccountForCommuntity";
import CreateHackethons from "./CreateHackethons";
import CreateTweet from "./CreateTweet";
import CreateEvents from "./CreateEvents";
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { Button } from "@mui/material";
import CreateCommuity from "./CreateCommuity";

export default function DashbordForCommunity() {
  console.log("Data ", useLocation().pathname.startsWith("/community"));
  if (!useLocation().pathname.startsWith("/community")) {
    return null;
  }

  const [openSideBar , setSideBar] = useState(true);
  const toggleDrawer = (res : boolean) => (event : any) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
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
      <div className="w-4/5 border">
        <Routes>
          <Route
            path="/community/1111/CreateHackethons"
            element={
              <Suspense>
                <CreateHackethons />
              </Suspense>
            }
          />
          <Route
            path="/community/1111/CreateEvents"
            element={<CreateEvents />}
          />
          <Route
            path="/community/1111/CreateInform"
            element={<CreateTweet />}
          />
          <Route
            path="/community/1111/Account"
            element={<AccountForCommuntity />}
          />
          <Route
          path="/community/createcommunity"
          element={<CreateCommuity/>}
          />
        </Routes>
      </div>
    </div>
  );
}
