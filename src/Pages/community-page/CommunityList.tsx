import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import { UserPlusIcon } from "@heroicons/react/20/solid";

export default function CommunityList() {
  return (
    <div className="flex flex-col w-full h-screen overflow-auto">
      <div className="flex flex-row h-16 create-community mt-8 border text-center ">
        <span className=" w-1/4 my-auto ">
        <Link to='/community/createcommunity'><UserPlusIcon
            className="text-black w-28 ml-10 hover:text-green-500 focus:text-green-500 "
            style={{
              width: "50px",
              height: "50px",
            }}
          /></Link>
        </span>
        <Link to='/community/createcommunity'><p className="flex items-center mx-5 font-extrabold shadow-sm">
          Create Community
        </p></Link>
      </div>
      {/* Section for Community Navigation */}
      <div className="flex my-4 w-full ">
        <Accordion style={{ width: "100%" }}>
          <AccordionSummary
            expandIcon={<ChevronDownIcon className="h-6 w-6 text-gray-500" />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <div className="flex flex-row ">
              <div className="">
                <Link to="/" className="flex">
                  <Stack direction="row" spacing={2}>
                    <Avatar
                      alt="Remy Sharp"
                      src="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcS1fRj89ql67_k5ahbVD8LXBt6q2-GTOQvS6RItxFRO-9lwM940loEDXjazZj10uz5KhDNs6GOhLih9-S8"
                      style={{
                        height: "60px",
                        width: "60px",
                      }}
                    />
                  </Stack>
                </Link>
              </div>
              <div className="flex mx-2 justify-center items-center  w-36">
                BJP (King of India)
              </div>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <div className="flex flex-col text-black">
              <div className=" flex w-full h-14  text-black border-b-2 justify-center items-center">
                <Link to="/community/1111/CreateEvents">
                  <span className="text-black ">Events</span>
                </Link>
              </div>
              <div className=" flex w-full h-14  text-black border-b-2 justify-center items-center">
                <Link to="/community/1111/CreateHackethons">
                  <span className="text-black ">Hackethons</span>
                </Link>
              </div>
              <div className=" flex w-full h-14  text-black border-b-2 justify-center items-center">
                <Link to="/community/1111/CreateInform">
                  <span className="text-black ">Inform</span>
                </Link>
              </div>
              <div className=" flex w-full h-14  text-black border-b-2 justify-center items-center">
                <Link to="/community/1111/Account">
                  <span className="text-black ">Profile</span>
                </Link>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
      {/* Section for Community Navigation */}
      <div className="flex my-4 w-full ">
        <Accordion style={{ width: "100%" }}>
          <AccordionSummary
            expandIcon={<ChevronDownIcon className="h-6 w-6 text-gray-500" />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <div className="flex flex-row ">
              <div className="">
                <Link to="/" className="flex">
                  <Stack direction="row" spacing={2}>
                    <Avatar
                      alt="Remy Sharp"
                      src="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcS1fRj89ql67_k5ahbVD8LXBt6q2-GTOQvS6RItxFRO-9lwM940loEDXjazZj10uz5KhDNs6GOhLih9-S8"
                      style={{
                        height: "60px",
                        width: "60px",
                      }}
                    />
                  </Stack>
                </Link>
              </div>
              <div className="flex mx-2 justify-center items-center  w-36">
                BJP (King of India)
              </div>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <div className="flex flex-col text-black">
              <div className=" flex w-full h-14  text-black border-b-2 justify-center items-center">
                <Link to="/">
                  <span className="text-black ">Events</span>
                </Link>
              </div>
              <div className=" flex w-full h-14  text-black border-b-2 justify-center items-center">
                <Link to="/">
                  <span className="text-black ">Hackethons</span>
                </Link>
              </div>
              <div className=" flex w-full h-14  text-black border-b-2 justify-center items-center">
                <Link to="/">
                  <span className="text-black ">Inform</span>
                </Link>
              </div>
              <div className=" flex w-full h-14  text-black border-b-2 justify-center items-center">
                <Link to="/">
                  <span className="text-black ">Profile</span>
                </Link>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
