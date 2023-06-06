import { Suspense, useEffect } from "react";
import { Route, Routes, useLocation ,useNavigate } from "react-router-dom";
import NavbarForDashBord from "../component/NavbarForDashBord";
import DashbordForCommunity from "./community-page/DashbordForCommunity";
import CircularProgress from "@mui/material/CircularProgress";
import EventPage from "./comman-page/EventPage";
import HackathonPage from "./comman-page/HackathonPage";
import HomaPageForCommunity from "./comman-page/HomaPageForCommunity";
// import axios from "axios";
import { client , account } from "../Appwrite/service";
import ProfilePage from "./comman-page/ProfilePage";

export default function DashBord() {
  let permission =
    useLocation().pathname.startsWith("/home") ||
    useLocation().pathname.startsWith("/event") ||
    useLocation().pathname.startsWith("/hackathon") ||
    useLocation().pathname.startsWith("/community") ||
    useLocation().pathname.startsWith("/profile");

  if (!permission) {
    return null;
  }

  const navigate = useNavigate()
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
  useEffect(() => {
    checkForSession();

  }, [])
  return (
    <div className=" h-screen flex md:flex-row flex-col w-full">
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
            path="/hackathon"
            element={
              <Suspense fallback={<CircularProgress />}>
                <HackathonPage />
              </Suspense>
            }
          />
          <Route
            path="/profile"
            element={
              <Suspense fallback={<CircularProgress />}>
                <ProfilePage/>
              </Suspense>
            }
          />
        </Routes>
        <DashbordForCommunity />
      </div>
    </div>
  );
}
