import { useEffect, useContext, Suspense, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import NavbarForDashBord from "../component/NavbarForDashBord";
import DashbordForCommunity from "./community-page/DashbordForCommunity";
import EventPage from "./comman-page/EventPage";
import HackathonPage from "./comman-page/HackathonPage";
import HomaPageForCommunity from "./comman-page/HomaPageForCommunity";
import HackathonDetailsPage from "./comman-page/HackathonDetailsPage";
import ProfilePage from "./comman-page/ProfilePage";
import EventDetailsPage from "./comman-page/EventDetailsPage";
import { MainContext, MainContextProvider } from "../context/context";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { CommunityContextProvider } from '../context/communityContext';
import AccountForCommuntity from "./community-page/AccountForCommuntity";

export default function DashBord() {

  const navigate = useNavigate();

  const mainContext = useContext(MainContext);

  const [isvalid, setisValid] = useState(false);

  let permission =
    useLocation().pathname.startsWith("/home") ||
    useLocation().pathname.startsWith("/event") ||
    useLocation().pathname.startsWith("/hackathon") ||
    useLocation().pathname.startsWith("/community") ||
    useLocation().pathname.startsWith("/profile/user") ||
    useLocation().pathname.startsWith("/profile/community") 

  if (!permission) {
    return null;
  }


  useEffect(() => {
    console.log("Run useEffect Of Dashbord")
    async function fetchData() {
      try {
        await mainContext.getSession();
        setisValid(true)
      } catch (error) {
        navigate('/');
      }
    }
    if (!mainContext.userData.isAuthenticate) {
      fetchData();
    } else {
      setisValid(true)
    }
  }, [isvalid]);


  return (
    <MainContextProvider>
      {isvalid && (
        <div className="h-screen flex md:flex-row flex-col w-full">
          <NavbarForDashBord />
          <div className=" md:w-11/12 w-full overflow-auto">
            <Routes>
              <Route
                path="/home"
                element={
                  <Suspense fallback={<CircularProgress />}>
                    <HomaPageForCommunity />
                  </Suspense>
                }
              />
              <Route
                path="/event"
                element={
                  <Suspense fallback={<CircularProgress />}>
                    <EventPage />
                  </Suspense>
                }
              />
              <Route
                path="/event/:id"
                element={
                  <Suspense fallback={<CircularProgress />}>
                    <EventDetailsPage />
                  </Suspense>
                }
              />
              <Route
                path="/hackathon"
                element={
                  <Suspense fallback={<CircularProgress />}>
                    <HackathonPage />
                  </Suspense>
                }
              />
              <Route
                path="/hackathon/:id"
                element={
                  <Suspense fallback={<CircularProgress />}>
                    <HackathonDetailsPage />
                  </Suspense>
                }
              />

              <Route
                path="/profile/community/:id"
                element={
                  <Suspense fallback={<CircularProgress />}>
                    <AccountForCommuntity />
                  </Suspense>
                }
              />
              <Route
                path="/profile/:username"
                element={
                  <Suspense fallback={<CircularProgress />}>
                    <ProfilePage />
                  </Suspense>
                }
              />
            </Routes>
            <CommunityContextProvider>
              <DashbordForCommunity />
            </CommunityContextProvider>
          </div>
        </div>
      )}
      {!isvalid && (
        <div className="h-screen flex md:flex-row flex-col w-full">
          <Box className='mx-10'>
            <CircularProgress />
          </Box>
        </div>
      )}
    </MainContextProvider>
  )
}



