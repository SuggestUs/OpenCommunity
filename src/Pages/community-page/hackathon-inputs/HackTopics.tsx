function HackTopicsCom() {
  const posts = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
  ];
  return (
    <div className="mx-auto text-left max-w-7xl pb-10 ">
      <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16  lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.id}
            className="flex max-w-xl border p-5 hover:border-gray-600 rounded-md flex-col items-start justify-between"
          >
            <div className="flex items-center gap-x-4 text-xs">
              <input type="date" className="text-gray-500 outline-none" />
              <input
                type="text"
                placeholder="web development"
                className="relative z-10 rounded-full w-1/2 outline-none  bg-gray-300 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
              />
            </div>
            <div className="group relative">
              <h3 className="mt-3 text-lg font-semibold leading-6">
                <input
                  type="text"
                  placeholder="Front-end Development"
                  className="outline-none text-black "
                />
              </h3>
              <input
                className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 outline-none"
                placeholder="Add Hackathon topic details"
              />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default HackTopicsCom;
