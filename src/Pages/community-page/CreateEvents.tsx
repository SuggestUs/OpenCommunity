import EventTopicsCom from ".././community-page/EventInputs/EventTopics";
import EventSpeakersCom from ".././community-page/EventInputs/EventSpeakers";
import EventVenueCom from ".././community-page/EventInputs/EventVenue";
import EventDescriptionCom from ".././community-page/EventInputs/EventDescription";
import { useEffect, useState } from "react";

export default function CreateEvents() {

  const [coverImage , setCoverImage] = useState<File|undefined>(undefined);

  const [url , setUrl] = useState<string>('')

  const handleChangeForCover = (event : any)=>{
      let file = event.target.files[0];
      setUrl(URL.createObjectURL(file));
      setCoverImage(file);
  }



  useEffect(()=>{
     if(url){
      document.getElementById('cover-place')?.classList.add('hidden')
      document.getElementById('cover-image')?.classList.remove('hidden')
     }
  }, [coverImage])

  return (
    <section className="my-5 min-h-[60rem]  text-black ">
      <p className="text-2xl font-bold mb-5">Create a Event 🎉</p>
      {/*  for only cover image */}
      <div className="col-span-full w-[94%] mx-auto" >
        <label
          htmlFor="cover-photo"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Cover photo
        </label>
        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 h-96" >
          <div className="text-center py-40" id='cover-place'>
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
            <div className="mt-4 flex text-sm leading-6 text-gray-600">
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
            <img src={url} className='h-96 w-full' alt="#Imaage"/>
          </div>
        </div>
      </div>
      <article className="h-full  p-10 m-9  grid grid-cols-2 border gap-10 ">
        <div className=" ">
          <EventDescriptionCom />
        </div>
      </article>
      <article className=" p-5 ml-9 border w-[95%] ">
        <p className="font-bold text-left text-2xl">Event Topics 📌</p>
        <EventTopicsCom />
      </article>
      <article className="p-5  ml-9 flex border mt-9 w-[95%]  justify-between  ">
        <p className="font-bold text-left  text-2xl ">Speakers 🧑‍⚖️</p>
        {/* <div className="mt-2 border border-yellow-400 w-full"> */}
          <EventSpeakersCom />
        {/* </div> */}
      </article>
      <article className=" p-5 mt-9 w-[95%] ml-9 border">
        <p className="font-bold text-left text-2xl">Location 🗺️</p>
        <EventVenueCom />
      </article>
    </section>
  );
}
