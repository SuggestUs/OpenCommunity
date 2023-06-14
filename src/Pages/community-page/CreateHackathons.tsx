import HackTopicsCom from "./hackathon-inputs/HackTopicsInput";
import HackSpeakersCom from "./hackathon-inputs/HackCoOrganizersInput";
import HackVenueCom from "./hackathon-inputs/HackVenueInput";
import HackDescriptionCom from "./hackathon-inputs/HackDescriptionInput";
import { dataTypeForEventCreation } from "../../../utils/type";
import { useEffect, useState } from "react";
// import HackJudgeInput from "./hackathon-inputs/HackJudgeInput";
import HackResourceInput from "./hackathon-inputs/HackResourceInput";

export default function CreateEvents() {
  const [coverImage, setCoverImage] = useState<File | undefined>(undefined);

  const objForEventCreation = {
    "event-name": "",
    coverImageId: "",
    "event-mode": "",
    "event-email": "",
    "event-date": "",
    "about-event": "",
    "event-topic": [],
    "event-tag": [],
    "about-topic": [],
    speakersProfileId: [],
    "speakers-name": [],
    "speakers-post": [],
    Location: "",
    creatorId: "",
    "event-fees": "Free",
  };

  const [dataForEventCreation, setdataForEventCreation] =
    useState<dataTypeForEventCreation>(objForEventCreation);

  const [url, setUrl] = useState<string>("");

  const handleChangeForCover = (event: any) => {
    let file = event.target.files[0];
    setUrl(URL.createObjectURL(file));
    setCoverImage(file);
  };

  useEffect(() => {
    if (url) {
      document.getElementById("cover-place")?.classList.add("hidden");
      document.getElementById("cover-image")?.classList.remove("hidden");
    }
  }, [coverImage]);

  return (
    <>
      <section className="flex flex-col">
        <div className="flex justify-center font-serif ">
          <p className="font-bold text-2xl font-inter pt-12">
            Create a Hackathon 🎉
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
              <img src={url} className="h-96 w-full" alt="#Imaage" />
            </div>
          </div>
        </div>
        <div className="border w-auto flex flex-row:md flex-col mt-10 rounded-xl mx-4 flex-wrap">
          <HackDescriptionCom />
        </div>
        <div className="border w-auto flex flex-col mt-10 rounded-xl mx-4 flex-wrap">
          <p className="flex items-center md:justify-center text-center pt-5 font-bold text-xl md:text-2xl">
            Topics For Projects 📌
          </p>
          <HackTopicsCom />
        </div>
        <div className="border w-auto flex flex-col mt-10 rounded-xl mx-4 flex-wrap">
          <p className="flex items-center md:justify-center text-center  pt-5 font-bold text-xl md:text-2xl">
            {" "}
            Add Resources📌{" "}
          </p>
          <HackResourceInput />
        </div>
        <div className="border w-auto flex flex-col mt-10 rounded-xl mx-4 flex-wrap">
          <p className="flex items-center justify-center p-10 font-bold text-xl md:text-2xl ">
            {" "}
            Rules & Regulations
          </p>
          <HackSpeakersCom />
        </div>
        <div className="border w-auto flex flex-row:md flex-col mt-10 rounded-xl mx-4 flex-wrap">
          <p className="flex items-center justify-center p-10 font-bold text-xl md:text-2xl">
            Event Venue 📌
          </p>
          <HackVenueCom />
        </div>
      </section>
    </>
  );
}
