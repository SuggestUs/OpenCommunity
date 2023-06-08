export default function EventSpeakersCom() {
  const people = [
    {
      name: "Leslie Alexander",
      role: "Co-Founder / CEO",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Leslie Alexander",
      role: "Co-Founder / CEO",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Leslie Alexander",
      role: "Co-Founder / CEO",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ];
  return (
    <div className="mx-auto grid max-w-7xl gap-x-8  gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
      <ul
        role="list"
        className="grid gap-x-8 gap-y-12 sm:grid-cols-3 sm:gap-y-16 xl:col-span-2"
      >
        {people.map((person) => (
          <li key={person.name}>
            <div className="flex items-center gap-x-6">
              <img
                className="h-16 w-16 rounded-full"
                src={person.imageUrl}
                alt=""
              />
              <div>
                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                  {person.name}
                </h3>
                <p className="text-sm font-semibold leading-6 text-indigo-600">
                  {person.role}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
