export default function AboutUs() {
  return (
    <div className='relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0'>
      <div className='absolute inset-0 -z-10 overflow-hidden'>
        <svg
          className='absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]'
          aria-hidden='true'
        >
          <defs>
            <pattern
              id='e813992c-7d03-4cc4-a2bd-151760b470a0'
              width={200}
              height={200}
              x='50%'
              y={-1}
              patternUnits='userSpaceOnUse'
            >
              <path d='M100 200V.5M.5 .5H200' fill='none' />
            </pattern>
          </defs>
          <svg x='50%' y={-1} className='overflow-visible fill-gray-50'>
            <path
              d='M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z'
              strokeWidth={0}
            />
          </svg>
          <rect
            width='100%'
            height='100%'
            strokeWidth={0}
            fill='url(#e813992c-7d03-4cc4-a2bd-151760b470a0)'
          />
        </svg>
      </div>
      <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10'>
        <div className='lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8'>
          <div className='lg:pr-4'></div>
        </div>
        <div className='-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden'>
          <img
            className='w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]'
            src='https://images.unsplash.com/photo-1629904869392-ae2a682d4d01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80'
            alt=''
            loading='lazy'
          />
        </div>
        <div className='text-left lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8'>
          <div className='lg:pr-4'>
            <div className='max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg '>
              <p>
                We are a team of three passionate individuals dedicated to
                bringing you the latest updates, information, and opportunities
                in the world of technology events, hackathons, and online
                communities. Our goal is to create a comprehensive resource that
                connects tech enthusiasts, developers, and innovators from
                around the globe.
              </p>
              <ul role='list' className='mt-8 space-y-8 text-gray-600'>
                <li className='flex gap-x-3'>
                  With our platform, you can easily discover upcoming tech
                  events, including conferences, workshops, meetups, and
                  hackathons, providing you with a valuable platform to showcase
                  your skills, learn from industry experts, and network with
                  like-minded individuals. Whether you're a seasoned
                  professional or just starting your tech journey, we strive to
                  provide a diverse range of events suitable for all levels of
                  expertise.
                </li>
                <li className='flex gap-x-3'>
                  <span>
                    In addition to events, we curate a list of online
                    communities that foster collaboration, knowledge sharing,
                    and mentorship. These communities cover a wide array of
                    technology domains, enabling you to find the right group to
                    connect with and expand your network. Whether you're
                    interested in artificial intelligence, web development,
                    blockchain, or any other field, we've got you covered.
                  </span>
                </li>
                <li className='flex gap-x-3'>
                  Our team is dedicated to ensuring the accuracy and relevance
                  of the information we provide. We thoroughly research and
                  verify each event and community listing, striving to offer you
                  the most up-to-date and reliable information available. We
                  also welcome user submissions and feedback, as we believe in
                  the power of community involvement to enhance the platform and
                  make it even more valuable for everyone.
                </li>
              </ul>
              <p className='mt-8'>
                We are excited to have you on this journey with us, and we hope
                our platform becomes your go-to resource for all things
                tech-related. Join us today and unlock a world of opportunities,
                connections, and knowledge. Together, let's explore the vibrant
                tech ecosystem and shape the future of innovation!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
