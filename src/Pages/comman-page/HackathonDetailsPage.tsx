import HackTopicsCom from "../../component/Hackathon/HackTopics";
import HackSpeakersCom from "../../component/Hackathon/HackSpeakers";
import HackVenueCom from "../../component/Hackathon/HackVenue";
import HackDescriptionCom from "../../component/Hackathon/HackDescription";
import HackOrgCom from "../../component/Hackathon/HackOrganizer";
import NavbarForDashBord from "../../component/NavbarForDashBord";

export default function HackathonDetailsPage() {
  return (
     <section className="h-screen flex md:flex-row flex-col w-full">
            <NavbarForDashBord />
    <section className="flex flex-col my-5 min-h-[60rem]  text-black ">
      {/*  for only cover image */}
      <div className="h-96 w-full p-1">
        <img
          src="https://img.freepik.com/premium-vector/music-event-horizontal-poster-flyer-template-with-gradient-colorful-design_85212-212.jpg"
          className="h-96 w-full"
        />
      </div>
      <article className="h-full p-10 m-1 mt-5 flex-col md:grid grid-cols-2 border gap-10 ">
        <div className="w-full">
          <p className="font-bold text-left text-[1.5rem] md:text-2xl">
            Open Community Hackathon 👨‍💻
          </p>
          <HackDescriptionCom />
        </div>
        <div className="w-full md:block">
          <p className="font-bold text-left text-[1.5rem] md:text-2xl">
            Organised by 👯{" "}
          </p>
          <HackOrgCom />
        </div>
      </article>
      <article className=" p-5 m-1 border w-full md:w-[99.5%] ">
        <p className="font-bold text-left text-2xl">Hackathon Topics 📌</p>
        <HackTopicsCom />
      </article>
      <article className="p-5  m-1 w-full flex border md:w-[99.5%]">
        <p className="font-bold flex text-left  text-2xl">Judges 🧑‍⚖️</p>
        <div className="mt-5 ">
          <HackSpeakersCom />
        </div>
      </article>
      <article className=" p-5 m-1 w-full md:w-[99.5%] border">
        <p className="font-bold text-left  text-2xl">Location 🗺️</p>
        <HackVenueCom />
      </article>
    </section>
     </section>
  );
}
