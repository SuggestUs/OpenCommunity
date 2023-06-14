import { useEffect, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NavbarForDashBord from '../component/NavbarForDashBord'
import DashbordForCommunity from './community-page/DashbordForCommunity'
import { MainContext, MainContextProvider } from '../context/context'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import { CommunityContextProvider } from '../context/communityContext'

export default function DashBord() {
  const mainContext = useContext(MainContext)
  const [isvalid, setisValid] = useState(false)

  const navigate = useNavigate()

  async function fetchData() {
    try {
      await mainContext.getSession()
      setisValid(true)
    } catch (error) {
      console.log('error', error)
      navigate('/authentication')
    }
  }

  useEffect(() => {
    if (!mainContext.userData.isAuthenticate) {
      fetchData()
    } else {
      setisValid(true)
    }
  }, [isvalid])

  return (
    <MainContextProvider>
      {isvalid ? (
        <div className='h-screen flex md:flex-row flex-col w-full'>
          <NavbarForDashBord />
          <div className='md:w-11/12 w-full overflow-auto'>
            <CommunityContextProvider>
              <DashbordForCommunity />
            </CommunityContextProvider>
          </div>
        </div>
      ) : (
        <Box className='mx-10 flex justify-center text-center'>
          <CircularProgress />
        </Box>
      )}
    </MainContextProvider>
  )
}
