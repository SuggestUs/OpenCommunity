export default function EventVenueCom() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl  sm:px-6 p-10 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <circle
              cx={512}
              cy={512}
              r={512}
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit,
              quisquam odio nihil et ipsam eum nisi
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href="#"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                View on map{" "}
              </a>
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8">
            <iframe
              className="absolute left-0 top-0 w-[57rem] h-[35rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224097.62384740493!2d76.92842363118233!3d28.64398388186441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi%2C%20India!5e0!3m2!1sen!2suk!4v1686238653415!5m2!1sen!2suk"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
