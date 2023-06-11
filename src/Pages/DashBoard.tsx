import { Suspense, useEffect, useContext } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import NavbarForDashBord from "../component/NavbarForDashBord";
import DashbordForCommunity from "./community-page/DashbordForCommunity";
import CircularProgress from "@mui/material/CircularProgress";
import EventPage from "./comman-page/EventPage";
import HackathonPage from "./comman-page/HackathonPage";
import HomaPageForCommunity from "./comman-page/HomaPageForCommunity";
import HackathonDetailsPage from "./comman-page/HackathonDetailsPage";
import ProfilePage from "./comman-page/ProfilePage";
import EventDetailsPage from "./comman-page/EventDetailsPage";
import { MainContext } from '../context/context'
export default function DashBord() {

  const mainContext = useContext(MainContext);

  let permission =
    useLocation().pathname.startsWith("/home") ||
    useLocation().pathname.startsWith("/event") ||
    useLocation().pathname.startsWith("/hackathon") ||
    useLocation().pathname.startsWith("/community") ||
    useLocation().pathname.startsWith("/profile");

  if (!permission) {
    return null;
  }

  const navigate = useNavigate();

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        await mainContext?.getSession();
      } catch (error) {
        navigate("/authentication");
      }
    }
    fetchData();
  }, []);

  if(mainContext?.isAuthenticate) { 
    return (<div className=" h-screen flex md:flex-row flex-col w-full">
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
            path="/profile/:username"
            element={
              <Suspense fallback={<CircularProgress />}>
                <ProfilePage />
              </Suspense>
            }
          />
        </Routes>
        <DashbordForCommunity />
      </div>
    </div>)
  }else{
    return <h1>{'Checking for data'}</h1>
  }
}
