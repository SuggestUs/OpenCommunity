import { Link, NavLink } from "react-router-dom";
import {
  HomeIcon,
  TicketIcon,
  RocketLaunchIcon,
  UserGroupIcon,
} from "@heroicons/react/20/solid";
import Avatar from '@mui/material/Avatar'

export default function NavbarForDashBord() {
  //  for navlinks add navlinks using this format and add icon from heroicons
  const navLink = [
    {
      name: "Home",
      path: "/home",
      icon: (
        <HomeIcon className="text-black w-8 hover:text-primary focus:text-primary" />
      ),
    },
    {
      name: "Event",
      path: "/event",
      icon: (
        <TicketIcon className="text-black w-8 hover:text-primary focus:text-primary" />
      ),
    },

    {
      name: "Hackathon",
      path: "/hackathon",
      icon: (
        <RocketLaunchIcon className="text-black w-8 hover:text-primary focus:text-primary" />
      ),
    },
    {
      name: "Community",
      path: "/community",
      icon: (
        <UserGroupIcon className="text-black w-8 hover:text-primary focus:text-primary" />
      ),
    },
  ];

  const navDashLink = navLink.map((navLink, index) => (
    <div key={index} className="flex flex-col h-20 my-2">
      <div>
        <NavLink
          to={navLink.path}
          className="flex text-center p-5 justify-center items-center h-10 w-auto flex-grow-0"
        >
          {navLink.icon}
        </NavLink>
      </div>
      <NavLink to={navLink.path}><span className="text-black">{navLink.name}</span></NavLink>
    </div>
  ));

  //  for shadow
  const Shadow = {
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
  };
  return (
    <div
      className="md:w-1/12 md:flex md:flex-col flex-row w-full"
      style={Shadow}
    >
      {/* Space for add logo */}
      <div className="flex lg:flex-initial text-center justify-center items-center border md:h-20">
        <Link to="/" className="flex">
          <p className="font-extrabold text-3xl text-primary md:block hidden">
            O
          </p>
          <p className="font-extrabold text-3xl text-black md:block hidden">
            C
          </p>
          <span className="text-primary md:hidden block">Open</span>
          <span className="md:hidden block text-black">Community</span>
        </Link>
      </div>
      {/* Space for adding main  */}
      <div className="flex md:flex-grow md:flex-col flex-row mt-4">
        {navDashLink}
      </div>
      {/* Space for additional Things  */}
      <div className="md:flex text-center justify-center items-center border hidden h-20  ">
        <Link to="/profile/pmoModi">
          <Avatar
            style={{
              // marginLeft: "30px",
            }}
            src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSfwGAluvdBkYjaFfxCMgTbu05yncARfEF13Jy94w4GKmUS0cfgXPiGKAkJTJJ8aeMgIfnqjigy6i-0CBM"
            sx={{ width: 60, height: 60 }}
          />
        </Link>
      </div>
    </div>
  );
}
