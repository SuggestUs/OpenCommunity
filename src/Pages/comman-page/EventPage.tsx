import { useContext } from "react";
import { Link } from "react-router-dom";
import { MainContext } from "../../context/context";

export default function EventPage() {

  const mainContext = useContext(MainContext)
  const callouts = [
    {
      name: "Desk and Office",
      description: "Work from home accessories",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg",
      imageAlt:
        "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
      href: "#",
    },
  ];

  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl  sm:py-14 lg:max-w-none ">
          <h2 className="text-2xl font-bold text-gray-900">{mainContext.userData.first_name}</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout, index) => (
              <Link to={`/event/${index}`}>
                <div key={index} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-14 ">
                    <img
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">
                    {callout.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
