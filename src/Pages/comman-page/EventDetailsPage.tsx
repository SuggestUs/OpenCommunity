import EventTopicsCom from "../../component/Event/EventTopics";
import EventSpeakersCom from "../../component/Event/EventSpeakers";
import EventVenueCom from "../../component/Event/EventVenue";
import EventDescriptionCom from "../../component/Event/EventDescription";
import EventOrgCom from "../../component/Event/EventOrganizer";

export default function EventDetailsPage() {
  return (
    <section className="flex flex-col  my-5 min-h-[60rem]  text-black ">
      {/*  for only cover image */}
      <div id="event-poster" className="h-96 w-[95%] mx-auto">
        <img
          src="https://img.freepik.com/premium-vector/music-event-horizontal-poster-flyer-template-with-gradient-colorful-design_85212-212.jpg"
          className="h-96 w-full"
        />
      </div>
      <article className="h-full  p-10 m-9 grid grid-cols-2 border gap-10 ">
        <div className="w-full">
          <p className="font-bold text-left text-2xl">
            Open Community Event 👨‍💻
          </p>
          <EventDescriptionCom />
        </div>
        <div className="w-full md:block">
          <p className="font-bold text-left text-2xl">Organised by 👯 </p>
          <EventOrgCom />
        </div>
      </article>
      <article className=" p-5 ml-9 border w-[95%]">
        <p className="font-bold text-left text-2xl">Event Topics 📌</p>
        <EventTopicsCom />
      </article>
      <article className="p-5  ml-9 flex border mt-9 w-[95%]  justify-between ">
        <p className="font-bold text-left  text-2xl">Speakers 🧑‍⚖️</p>
        <div className="mt-5">
          <EventSpeakersCom />
        </div>
      </article>
      <article className=" p-5 mt-9 w-[95%] ml-9 border">
        <p className="font-bold text-left  text-2xl">Location 🗺️</p>
        <EventVenueCom />
      </article>
    </section>
  );
}
