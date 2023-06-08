function OrgCom() {
  const posts = [
    {
      id: 1,
      title: "Boost your conversion rate",
      href: "#",
      description:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
    },
  ];
  return (
    <div className="mx-auto text-left w-full pb-10 ">
      <div className="mx-auto mt-10 grid w-full grid-cols-1 gap-x-8 gap-y-16  lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.id}
            className="flex w-[20rem] border p-5 hover:border-gray-600 rounded-md flex-col "
          >
            <div className="flex items-center gap-x-4 text-xs">
              <time dateTime={post.datetime} className="text-gray-500">
                {post.date}
              </time>
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

export default OrgCom;
