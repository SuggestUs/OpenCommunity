import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Suspense } from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import HomePage from './Pages/HomePage'
import Navbar from './component/Navbar'
import AboutUs from './Pages/AboutUs'
import Authentication from './component/Authentication'
import Footer from './component/Footer'
import EventDetailsPage from './Pages/comman-page/EventDetailsPage'
import EventPage from './Pages/comman-page/EventPage'
import HackathonDetailsPage from './Pages/comman-page/HackathonDetailsPage'
import HackathonPage from './Pages/comman-page/HackathonPage'
import ProfilePage from './Pages/comman-page/ProfilePage'
import AccountForCommuntity from './Pages/community-page/AccountForCommuntity'
import CreateCommuity from './Pages/community-page/CreateCommuity'
import CreateEvents from './Pages/community-page/CreateEvents'
import CreateHackathons from './Pages/community-page/CreateHackathons'
import DashbordForCommunity from './Pages/community-page/DashbordForCommunity'
import IntroToCommunity from './Pages/community-page/IntroToCommunity'
export default function MainRoute() {
  return (
    <Router>
      <main className=' w-full h-screen'>
        <Navbar />
        <Routes>
          <Route
            path='/'
            element={
              <Suspense fallback={<CircularProgress />}>
                <HomePage />{' '}
              </Suspense>
            }
          />
          <Route
            path='/about'
            element={
              <Suspense fallback={<CircularProgress />}>
                <AboutUs />
              </Suspense>
            }
          />
          <Route
            path='/authentication'
            element={
              <Suspense fallback={<CircularProgress />}>
                <Authentication />
              </Suspense>
            }
          />
          <Route
            path='/dashboard'
            element={
              <Suspense fallback={<CircularProgress />}>
                <IntroToCommunity />
              </Suspense>
            }
          />
          <Route
            path='/event'
            element={
              <Suspense fallback={<CircularProgress />}>
                <EventPage />
              </Suspense>
            }
          />
          <Route
            path='/event/:id'
            element={
              <Suspense fallback={<CircularProgress />}>
                <EventDetailsPage />
              </Suspense>
            }
          />
          <Route
            path='/hackathon'
            element={
              <Suspense fallback={<CircularProgress />}>
                <HackathonPage />
              </Suspense>
            }
          />
          <Route
            path='/hackathon/:id'
            element={
              <Suspense fallback={<CircularProgress />}>
                <HackathonDetailsPage />
              </Suspense>
            }
          />

          <Route
            path='/profile/community/:id'
            element={
              <Suspense fallback={<CircularProgress />}>
                <AccountForCommuntity />
              </Suspense>
            }
          />
          <Route
            path='/profile/:username'
            element={
              <Suspense fallback={<CircularProgress />}>
                <ProfilePage />
              </Suspense>
            }
          />
          <Route
            path='/community'
            element={
              <Suspense>
                <DashbordForCommunity />
              </Suspense>
            }
          />
          <Route
            path='/community/createhackathons'
            element={
              <Suspense>
                <CreateHackathons />
              </Suspense>
            }
          />
          <Route path='/community/CreateEvents' element={<CreateEvents />} />
          <Route path='/community/Account' element={<AccountForCommuntity />} />
          <Route
            path='/community/createcommunity'
            element={<CreateCommuity />}
          />
        </Routes>
        <Footer />
      </main>
    </Router>
  )
}
