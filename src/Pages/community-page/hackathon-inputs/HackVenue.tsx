export default function HackVenueCom() {
  return (
    <div className="mx-auto max-w-7xl sm:px-6 p-10 lg:px-8">
      <div className="relative isolate overflow-hidden   px-6 pt-16 border sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
        <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
          <input
            className="text-3xl font-bold tracking-tight text-black sm:text-4xl outline-none border p-2 rounded-md"
            placeholder="Lorem ipsum dolor, sit amet consectetur adipisicing elit"
          />
          <input
            className="mt-6 text-lg leading-8 text-gray-500 border outline-none p-2 rounded-md"
            placeholder="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit,
            quisquam odio nihil et ipsam eum nisi"
          />
          <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
            <a
              href="#"
              className="rounded-md bg-white border px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              View on map{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
