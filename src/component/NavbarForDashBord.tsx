import { Link, NavLink } from "react-router-dom";

import {
  HomeIcon,
  TicketIcon,
  RocketLaunchIcon,
  UserGroupIcon,
} from "@heroicons/react/20/solid";

export default function NavbarForDashBord() {
  //  for navlinks add navlinks using this format and add icon from heroicons
  const navLink = [
    {
      name: "Home",
      path: "/home",
      icon: (
        <HomeIcon className="text-black w-6 hover:text-primary focus:text-primary" />
      ),
    },
    {
      name: "Event",
      path: "/event",
      icon: (
        <TicketIcon className="text-black w-6 hover:text-primary focus:text-primary" />
      ),
    },

    {
      name: "Hackathon",
      path: "/hackathon",
      icon: (
        <RocketLaunchIcon className="text-black w-6 hover:text-primary focus:text-primary" />
      ),
    },
    {
      name: "Community",
      path: "/community",
      icon: (
        <UserGroupIcon className="text-black w-6 hover:text-primary focus:text-primary" />
      ),
    },
  ];

  const navDashLink = navLink.map((navLink, index) => (
    <div key={index} className="flex flex-col h-20 my-2">
      <NavLink
        to={navLink.path}
        className="flex text-center p-5 justify-center items-center h-10 w-auto flex-grow-0"
      >
        {navLink.icon}
      </NavLink>
      <NavLink to={navLink.path}>
        <span className="text-black ">{navLink.name}</span>
      </NavLink>
    </div>
  ));

  return (
    <div className="flex flex-col md:w-1/12 border justify-center items-center ">
      {/* Space for add logo */}
      <div className="flex lg:flex-initial  text-center justify-center items-center md:h-20">
        <span className="flex text-3xl">🧑🏻‍💻</span>
      </div>
      {/* Space for adding main  */}
      <div className="flex md:flex-grow justify-center md:flex-row md:mt-4">
        <ul>{navDashLink}</ul>
      </div>
      {/* Space for additional Things  */}
      <div className="flex justify-center items-center rounded-full border h-20 w-20 bg-gray-100 ">
        <Link to="/profile/editprofile" className="text-3xl ">
          👶
        </Link>
      </div>
    </div>
  );
}
