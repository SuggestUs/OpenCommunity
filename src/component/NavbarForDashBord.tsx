import { Link, NavLink } from 'react-router-dom'

import {
  HomeIcon,
  TicketIcon,
  RocketLaunchIcon,
  UserGroupIcon,
} from '@heroicons/react/20/solid'

export default function NavbarForDashBord() {
  //  for navlinks add navlinks using this format and add icon from heroicons
  const navLink = [
    {
      name: 'Home',
      path: '/dashboard',
      icon: (
        <HomeIcon className='text-black w-4 md:w-6 hover:text-primary focus:text-primary ' />
      ),
    },
    {
      name: 'Event',
      path: '/event',
      icon: (
        <TicketIcon className='text-black w-4 md:w-6 hover:text-primary focus:text-primary' />
      ),
    },

    {
      name: 'Hackathon',
      path: '/hackathon',
      icon: (
        <RocketLaunchIcon className='text-black w-4 md:w-6 hover:text-primary focus:text-primary' />
      ),
    },
    {
      name: 'Community',
      path: '/community',
      icon: (
        <UserGroupIcon className='text-black w-4 md:w-6 hover:text-primary focus:text-primary' />
      ),
    },
  ]

  //  fetching navlinks from navlink array
  const navDashLink = navLink.map((navLink, index) => (
    <div key={index} className='flex flex-col mr-2 md:m-0'>
      <NavLink
        to={navLink.path}
        className='flex text-center m-5 justify-center items-center '
      >
        {navLink.icon}
      </NavLink>
      <NavLink to={navLink.path}>
        <span className='text-black hidden md:flex  justify-center '>
          {navLink.name}
        </span>
      </NavLink>
    </div>
  ))

  return (
    <section className='flex flex-block md:flex-col md:w-1/12 border justify-between md:pt-10 md:pb-10 items-center pr-5 '>
      {/* Space for add logo */}
      <div className=''>
        <span className='text-3xl hidden md:flex'>🧑🏻‍💻</span>
      </div>
      {/* Space for adding menus  */}
      <div className=''>
        <ul className='flex flex-block md:flex-col '>{navDashLink}</ul>
      </div>
      {/* Space for profile   */}
      <div className='flex justify-center items-center rounded-full border h-2 w-2 md:h-20 md:w-20 bg-gray-100 '>
        <Link to='/profile/editprofile' className='text-sm md:text-3xl  '>
          👶
        </Link>
      </div>
    </section>
  )
}
