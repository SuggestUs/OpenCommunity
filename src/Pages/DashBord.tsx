import { Route, Routes } from 'react-router-dom'
import NavbarForDashBord from '../component/NavbarForDashBord'
import DashbordForCommunity from './community-page/DashbordForCommunity'
import CircularProgress from '@mui/material/CircularProgress'
import { lazy, Suspense } from 'react'
import EventPage from './comman-page/EventPage'
import HackethonPage from './comman-page/HackethonPage'
// import

export default function DashBord() {
  return (
    <div className=' h-screen flex md:flex-row flex-col w-full'>
      <NavbarForDashBord />
     
    
    </div>
  )
}
