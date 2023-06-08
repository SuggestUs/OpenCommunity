function EventTopicsCom() {
  const posts = [
    {
      id: 0,
      title: "Full-Stack Development",
      href: "#",
      description:
        "You have to build a full-stack application using any technology you prefer. You can use any framework or library for frontend",
      date: "June 9, 2023",

      category: { title: "Web Development" },
    },
    {
      id: 1,
      title: "Machine Learning",
      href: "#",
      description:
        "You have to build a ML model using any technology you prefer. To make it more interesting, you can use any framework or library",
      date: "June 9, 2023",

      category: { title: "Machine Learning" },
    },
    {
      id: 1,
      title: "Web3 Development",
      href: "#",
      description:
        "Build a Web3 web app like a Dapp, NFT marketplace, or anything you want. You can use any framework or library for frontend",
      date: "June 9, 2023",

      category: { title: "Web3" },
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
              <time dateTime={post.date} className="text-gray-500">
                {post.date}
              </time>
              <p className="relative z-10 rounded-full bg-gray-300 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                {post.category.title}
              </p>
            </div>
            <div className="group relative">
              <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                <a href={post.href}>
                  <span className="absolute inset-0" />
                  {post.title}
                </a>
              </h3>
              <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                {post.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default EventTopicsCom;
