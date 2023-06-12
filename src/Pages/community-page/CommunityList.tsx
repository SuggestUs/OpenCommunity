import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";

export default function CommunityList() {
  return (
    <div className="flex flex-col w-full overflow-auto pl-2 pr-2 border  ">
      <div className="flex mt-5 items-center justify-center">
        <Link
          to="/community/createcommunity"
          className=" border pr-14 pl-10 pt-5 pb-5 border-gray-300 hover:border-gray-500 rounded-md bg-gray-100"
        >
          Create Community
        </Link>
      </div>
      {/* Section for Community Navigation */}

      <div className="flex my-4 w-full rounded-sm justify-center ">
        <Accordion>
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
                      src="https://static.vecteezy.com/system/resources/previews/004/218/321/original/cute-cat-white-pet-cartoon-character-free-vector.jpg"
                    />
                  </Stack>
                </Link>
              </div>
              <div className="flex mx-2 justify-center items-center w-36">
                Test Community
              </div>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <div className="flex flex-col text-black">
              <div className=" flex w-full h-14  text-black border-b-2 justify-center items-center">
                <Link to="/community/CreateEvents">
                  <span className="text-black ">Events</span>
                </Link>
              </div>
              <div className=" flex w-full h-14  text-black border-b-2 justify-center items-center">
                <Link to="/community/createHackathons">
                  <span className="text-black ">Hackathons</span>
                </Link>
              </div>
              <div className=" flex w-full h-14  text-black border-b-2 justify-center items-center">
                <Link to="/community/CreateInform">
                  <span className="text-black ">Inform</span>
                </Link>
              </div>
              <div className=" flex w-full h-14  text-black border-b-2 justify-center items-center">
                <Link to="/community/Account">
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
