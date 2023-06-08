import TopicsCom from "../../component/Topics";
import SpeakersCom from "../../component/Speakers";
import VenueCom from "../../component/Venue";
import DescriptionCom from "../../component/Description";
import OrgCom from "../../component/Organizer";

export default function HackathonDetailsPage() {
  return (
    <section className="flex flex-col  my-5 min-h-[60rem]  text-black ">
      {/*  for only cover image */}
      <div id="event-poster" className="h-96 w-[90%] mx-auto">
        <img
          src="https://media.istockphoto.com/id/1125107251/vector/hackathon-background-hack-marathon-coding-event-glitch-poster-and-saturated-binary-data-code.jpg?s=612x612&w=0&k=20&c=aqnvlYk_4_8qIQi8bUbg6LQeNBBl8c-FyuSPyXCNgro="
          className="h-96 w-full"
        />
      </div>
      <article className="h-full  my-10 mx-10 flex md:flex-row flex-col justify-center  gap-5 ">
        <div className="w-full">
          <DescriptionCom />
        </div>
        <div className=" md:w w-full hidden md:block">
          <p className="font-bold">Organised by </p>
          <OrgCom />
        </div>
      </article>
      <article className=" p-5 ml-14">
        <p className="font-bold text-left  text-xl">Topics</p>
        <TopicsCom />
      </article>
      <article className="p-5 ml-14 flex justify-between ">
        <p className="font-bold text-left  text-xl">Judges</p>
        <div className="mt-5">
          <SpeakersCom />
        </div>
      </article>
      <article className=" p-5 ml-14">
        <p className="font-bold text-left  text-xl">Location</p>
        <VenueCom />
      </article>
    </section>
  );
}
