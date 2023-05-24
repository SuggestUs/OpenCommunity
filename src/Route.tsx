import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import HomePage from './Pages/HomePage'
import Navbar from './component/Navbar'
import WhoWeAre from './Pages/WhoWeAre'
import Authentication from './component/Authentication'
import LogInPage from './Pages/LogInPage'
import SignInPage from './Pages/SignInPage'
import Mission from './Pages/Mission'
import DashBord from './Pages/DashBord'
import Footer from './component/Footer'
import DashbordForCommunity from './Pages/community-page/DashbordForCommunity'

import EventPage from './Pages/comman-page/EventPage'
import HackethonPage from './Pages/comman-page/HackethonPage'

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
            path='/WhoWeAre'
            element={
              <Suspense fallback={<CircularProgress />}>
                <WhoWeAre />
              </Suspense>
            }
          />
          <Route
            path='/Mission'
            element={
              <Suspense fallback={<CircularProgress />}>
                <Mission />
              </Suspense>
            }
          />
          <Route
            path='/Authentication'
            element={
              <Suspense fallback={<CircularProgress />}>
                <Authentication />
              </Suspense>
            }
          />
          <Route
            path='/LogInPage'
            element={
              <Suspense fallback={<CircularProgress />}>
                <LogInPage />
              </Suspense>
            }
          />
          <Route
            path='/SignInPage'
            element={
              <Suspense fallback={<CircularProgress />}>
                <SignInPage />
              </Suspense>
            }
          />
       
          <Route>
            {' '}
            <Route path='/dashboard' element={<DashBord />} />
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
                  <EventPage />
                </Suspense>
              }
            />
            <Route
              path='/hackathon'
              element={
                <Suspense fallback={<CircularProgress />}>
                  <HackethonPage />
                </Suspense>
              }
            />
            <Route
              path='/hackathon/:id'
              element={
                <Suspense fallback={<CircularProgress />}>
                  <HackethonPage />
                </Suspense>
              }
            />
            <Route
              path='/community'
              element={
                <Suspense fallback={<CircularProgress />}>
                  <DashbordForCommunity />
                </Suspense>
              }
            />
            <Route
              path='/community/:id'
              element={
                <Suspense fallback={<CircularProgress />}>
                  <DashbordForCommunity />
                </Suspense>
              }
            />
          </Route>
        </Routes>
        <Footer />
      </main>
    </Router>
  )
}
