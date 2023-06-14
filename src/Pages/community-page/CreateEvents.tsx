import EventTopicsCom from "./EventInputs/EventTopicsInput";
import EventSpeakersCom from "./EventInputs/EventSpeakersInput";
// import EventVenueCom from "./EventInputs/EventVenueInput";
import EventDescriptionCom from "./EventInputs/EventDescriptionInput";
import { useEffect, useState } from "react";
import { dataTypeForEventCreation } from "../../../utils/type";
import NavbarForDashBord from "../../component/NavbarForDashBord";


export default function CreateEvents() {

  const objForEventCreation = {
    "event-name": "",
    "coverImageUrl": '',
    "coverImageFile": undefined,
    "event-mode": "",
    "event-email": "",
    "event-date": "",
    "about-event": "",
    "event-topic": [],
    "topic-time": [],
    "event-tag": [],
    "about-topic": [],
    "speakersProfileId": [],
    "speakers-name": [],
    "speakers-post": [],
    "Location": "",
    "creatorId": "",
    "event-fees": 0,
    "City": '',
    "country": '',
    "address": ''
  };

  const [dataForEventCreation, setdataForEventCreation] =
    useState<dataTypeForEventCreation>(objForEventCreation);


  const handleChangeForCover = (event: any) => {
    let file = event.target.files[0];
    setdataForEventCreation({
      ...dataForEventCreation,
      "coverImageUrl": URL.createObjectURL(file),
      "coverImageFile": file
    });
  };



  useEffect(() => {
    if (dataForEventCreation.coverImageUrl) {
      document.getElementById("cover-place")?.classList.add("hidden");
      document.getElementById("cover-image")?.classList.remove("hidden");
    }
  }, [dataForEventCreation.coverImageUrl]);

  return (
    <>
     <section className="h-screen flex md:flex-row flex-col w-full">
            <NavbarForDashBord />
      <section className="flex flex-col">
        <div className="flex justify-center font-serif ">
          <p className="font-bold text-2xl font-inter pt-12">
            Create a Event 🎉
          </p>
        </div>
        <div className="flex flex-col mx-4 mt-10">
          <label
            htmlFor="cover-photo"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Cover photo
          </label>
          <div className=" flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 h-96 w-full">
            <div className="text-center py-40 " id="cover-place">
              <svg
                className="mx-auto h-12 w-12 text-gray-300"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                  clipRule="evenodd"
                />
              </svg>
              <div className=" flex text-sm leading-6 text-gray-600 justify-center">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer rounded-md bg-white font-semibold text-primary focus-within:outline-none focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 hover:text-purple-500"
                >
                  <span>Upload a file</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                    accept="image/*"
                    onChange={handleChangeForCover}
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs leading-5 text-gray-600">
                PNG, JPG up to 5MB
              </p>
            </div>
            <div className="center hidden" id="cover-image">
              <img src={dataForEventCreation.coverImageUrl} className="h-96 w-full" alt="#Imaage" />
            </div>
          </div>
        </div>
        <div className="border w-auto flex flex-row:md flex-col mt-10 rounded-xl mx-4 flex-wrap">
          <EventDescriptionCom
            objForEvent={dataForEventCreation}
            setObj={setdataForEventCreation}
          />
        </div>
        <div className="border flex flex-row:md flex-col mt-10 rounded-xl mx-4 ">
          {/* <div className="flex flex-row ">
            <p className="flex items-center mx-10 p-5 font-bold text-xl md:text-2xl border w-4/5">
              Event Topics 📌
            </p>
            <Button variant="outlined" onClick={setTomainObj}>Done</Button>
          </div> */}
          <EventTopicsCom
            objForEvent={dataForEventCreation}
            setObj={setdataForEventCreation}
          />
        </div>
        <div className="border w-auto flex flex-col mt-10 rounded-xl mx-4 flex-wrap">
          <p className="flex items-center justify-center pt-5 font-bold text-xl md:text-2xl">
            Event Speakers 📌
          </p>
          <EventSpeakersCom />
        </div>
        {/* <div className="border w-auto flex flex-row:md flex-col mt-10 rounded-xl mx-4 flex-wrap">
          <p className="flex items-center justify-center pt-5 font-bold text-xl md:text-2xl">
            Event Venue 📌
          </p>
          <EventVenueCom />
        </div> */}
      </section>
      </section>
    </>
  );
}
