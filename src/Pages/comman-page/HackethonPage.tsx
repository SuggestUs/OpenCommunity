export default function EventPage() {
  // const callouts = []

  return (
    <div className='bg-gray-100'>
      <div className='mx-auto max-w-7xl sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl  sm:py-14 lg:max-w-none '>
          <h2 className='text-2xl font-bold text-gray-900'>New Events</h2>

          <div className='mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0'>
            {/* {callouts.map((callout) => (
              <div key={callout.name} className='group relative'>
                <div className='relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-14 '>
                 
                </div>
                <h3 className='mt-6 text-sm text-gray-500'>
                  <a href={callout.href}>
                    <span className='absolute inset-0' />
                    {callout.name}
                  </a>
                </h3>
                <p className='text-base font-semibold text-gray-900'>
                  {callout.description}
                </p>
              </div>
            ))} */}
          </div>
        </div>
      </div>
    </div>
  )
}
