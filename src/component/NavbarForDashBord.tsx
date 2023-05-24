import { Link, useLocation } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home'
import EventIcon from '@mui/icons-material/Event'
import WorkIcon from '@mui/icons-material/Work'
import SportsScoreIcon from '@mui/icons-material/SportsScore'

export default function NavbarForDashBord() {
  // const Shadow = {
  //     boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
  //   }
  return (
    <div
      className='md:w-1/12 md:flex md:flex-col flex-row w-full'
      //   style={Shadow}
    >
      {/* Space for add logo */}
      <div className='flex lg:flex-initial text-center justify-center items-center border md:h-20'>
        <Link to='/Dashbord' className='flex'>
          <p className='font-extrabold text-3xl text-green-500 md:block hidden'>
            O
          </p>
          <p className='font-extrabold text-3xl text-black md:block hidden'>
            C
          </p>
          <span className='text-green-500 md:hidden block'>Open</span>
          <span className='md:hidden block text-black'>Community</span>
        </Link>
      </div>
      {/* Space for adding main  */}
      <div className='flex md:flex-grow md:flex-col flex-row md:mt-4'>
        <div className='flex flex-col text-center justify-center items-center h-1/6 w-1/6 md:w-auto flex-grow-0 '>
          <Link to='/dashboard' className='flex'>
            <HomeIcon className='text-black w-8 hover:text-green-500 focus:text-green-500' />
          </Link>
          <span className='text-black'>Home</span>
        </div>
        <div className='flex flex-col text-center justify-center items-center h-1/6 w-1/6 md:w-auto flex-grow-0 '>
          <Link to='/event' className='flex'>
            <EventIcon className='text-black w-8 hover:text-green-500 focus:text-green-500' />
          </Link>
          <span className='text-black'>Event</span>
        </div>
        <div className='flex flex-col text-center justify-center items-center h-1/6 w-1/6 md:w-auto flex-grow-0 '>
          <Link to='/community' className='flex'>
            <WorkIcon className='text-black w-8 hover:text-green-500 focus:text-green-500' />
          </Link>
          <span className='text-black'>Community</span>
        </div>
        <div className='flex flex-col text-center justify-center items-center h-1/6 w-1/6 md:w-auto flex-grow-0 '>
          <Link to='/hackathon' className='flex'>
            <SportsScoreIcon className='text-black w-8 hover:text-green-500 focus:text-green-500' />
          </Link>
          <span className='text-black'>Hackathon</span>
        </div>

        {/* Repeat for other navigation items */}
      </div>
      {/* Space for additional Things  */}
      <div className='md:flex text-center justify-center border hidden '>
        <Link to='/' className='flex'>
          <p className='font-extrabold text-3xl text-green-500'>O</p>
          <p className='font-extrabold text-3xl text-black'>C</p>
        </Link>
      </div>
    </div>
  )
}
