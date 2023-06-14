const features = [
  {
    name: 'Discover a Wealth of Opportunities.',
    description:
      'Find the perfect event to enhance your skills, gain insights from industry leaders, and connect with like-minded individuals who share your passion for technology.',
  },
  {
    name: 'Unleash Your Creativity.',
    description:
      'Join thrilling hackathons that challenge your problem-solving abilities and enable you to collaborate with talented individuals from around the world. ',
  },
  {
    name: 'Expand Your Network.',
    description:
      'Explore a curated list of online communities dedicated to various technology domains. ',
  },
  {
    name: 'Reliable and Up-to-Date Information.',
    description:
      'We pride ourselves on providing accurate and timely information. Our team thoroughly researches and verifies each event and community listing to ensure you have access to the most reliable information available.',
  },
  {
    name: 'Engage and Contribute.',
    description:
      'We believe in the power of community. Share your insights, experiences, and ideas with our vibrant user community. Submit events, suggest communities, and offer feedback to help us continuously improve and tailor the platform to your needs.',
  },
]

export default function Banner() {
  return (
    <div className='overflow-hidden bg-white pb-24 sm:pb-32 text-left'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8 '>
        <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 '>
          {/* <p>
           
          </p> */}
          <div className=''>
            <div className=' '>
              <dl className='mt-2 max-w-xl  space-y-8 text-base leading-7 text-gray-600 lg:max-w-none '>
                {features.map((feature) => (
                  <div key={feature.name} className='relative pl-9'>
                    <dt className='inline font-semibold text-gray-900'>
                      {feature.name}
                    </dt>{' '}
                    <dd className='inline'>{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src='https://github.com/priyankarpal/ProjectsHut/assets/88102392/2559f89b-fa05-407e-b159-407356baa209'
            alt='developers meeting'
            loading='lazy'
            className='w-[48rem] lg:sticky max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0'
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  )
}
