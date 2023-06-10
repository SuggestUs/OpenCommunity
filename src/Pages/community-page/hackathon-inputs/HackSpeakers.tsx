export default function SpeakersCom() {
  const people = [
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
        className=" gap-x-8 gap-y-12 sm:grid-cols-3 sm:gap-y-16 xl:col-span-2"
      >
        {people.map((person) => (
          <li key={person.name}>
            <div className="flex items-center gap-x-6">
              <input
                className="border rounded-md p-2  "
                src={person.imageUrl}
                type="file"
                accept="image/*"
              />
              <div className="space-y-3">
                <input
                  className="text-base outline-none border p-2 rounded-md text-gray-900"
                  placeholder="Speaker Name "
                />
                <input
                  className="text-base outline-none p-2 border text-indigo-600 rounded-md"
                  placeholder="Speaker's small bio"
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
