import EventTopicsCom from '../../component/Event/EventTopics'
import EventSpeakersCom from '../../component/Event/EventSpeakers'
import EventVenueCom from '../../component/Event/EventVenue'
import EventDescriptionCom from '../../component/Event/EventDescription'
import EventOrgCom from '../../component/Event/EventOrganizer'
import NavbarForDashBord from '../../component/NavbarForDashBord'

export default function EventDetailsPage() {
  return (
    <section className='h-screen flex md:flex-row flex-col w-full lg:sticky'>
      <NavbarForDashBord />
      <section className='flex flex-col my-5 min-h-[60rem]  text-black '>
        {/*  for only cover image */}
        <div className='h-96 w-full p-1'>
          <img
            src='https://img.freepik.com/premium-vector/music-event-horizontal-poster-flyer-template-with-gradient-colorful-design_85212-212.jpg'
            className='h-96 w-full'
          />
        </div>
        <article className='h-full p-10 m-1 mt-5 flex-col md:grid grid-cols-2 border gap-10 '>
          <div className='w-full'>
            <p className='font-bold text-left text-[1.5rem] md:text-2xl'>
              Open Community Event 👨‍💻
            </p>
            <EventDescriptionCom />
          </div>
          <div className='w-full md:block'>
            <p className='font-bold text-left text-[1.5rem] md:text-2xl'>
              Organised by 👯{' '}
            </p>
            <EventOrgCom />
          </div>
        </article>
        <article className=' p-5 m-1 border w-full md:w-[99.5%] '>
          <p className='font-bold text-left text-2xl'>Event Topics 📌</p>
          <EventTopicsCom />
        </article>
        <article className='p-5  m-1 w-full flex border md:w-[99.5%]'>
          <p className='font-bold flex text-left  text-2xl'>Speakers 🧑‍⚖️</p>
          <div className='mt-5 '>
            <EventSpeakersCom />
          </div>
        </article>
        <article className=' p-5 m-1 w-full md:w-[99.5%] border'>
          <p className='font-bold text-left  text-2xl'>Location 🗺️</p>
          <EventVenueCom />
        </article>
      </section>
    </section>
  )
}
