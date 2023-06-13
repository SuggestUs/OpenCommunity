import { Routes, Route, useLocation } from "react-router-dom";
import { Suspense, useEffect, useState, useContext } from "react";
import CommunityList from "./CommunityList";
import AccountForCommuntity from "./AccountForCommuntity";
import CreateHackathons from "./CreateHackathons";
import CreateTweet from "./CreateTweet";
import CreateEvents from "./CreateEvents";
import CreateCommuity from "./CreateCommuity";
import IntroToCommunity from "./IntroToCommunity";
import { CommunityContext } from "../../context/communityContext";
import { MainContext } from "../../context/context";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

export default function DashbordForCommunity() {
  if (!useLocation().pathname.startsWith("/community")) {
    return null;
  }

  const communityContext = useContext(CommunityContext);
  const mainContext = useContext(MainContext);

  const [dateRetrived, setdateRetrived] = useState(false);

  useEffect(() => {
    async function fetchDataForCommunity() {
      try {
        const responce = await communityContext.fetchData(
          "6481e700d45ab5a74280",
          "6481e72114d981b1d8bf",
          mainContext.userData.userId
        );
        console.log("responce", responce);
        setdateRetrived(true);
      } catch (error) {
        console.log("error", error);
      }
    }
    if (mainContext.userData.community.length > 0) {
      fetchDataForCommunity();
    } else {
      setdateRetrived(true);
    }
  }, [dateRetrived]);

  return (
    <>
      {dateRetrived && (
        <div className="flex flex-row w-full  h-screen text-black">
          <div className="flex flex-col border-r w-auto border  h-screen">
            <CommunityList />
          </div>
          <div className="w-full border  h-auto overflow-auto">
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
                path="/community/createhackathons"
                element={
                  <Suspense>
                    <CreateHackathons />
                  </Suspense>
                }
              />
              <Route
                path="/community/CreateEvents"
                element={<CreateEvents />}
              />
              <Route path="/community/CreateInform" element={<CreateTweet />} />
              <Route
                path="/community/Account"
                element={<AccountForCommuntity />}
              />
              <Route
                path="/community/createcommunity"
                element={<CreateCommuity />}
              />
            </Routes>
          </div>
        </div>
      )}
      {!dateRetrived && (
        <div className="h-screen flex md:flex-row flex-col w-full">
          <Box className="mx-10">
            <CircularProgress />
          </Box>
        </div>
      )}
    </>
  );
}
