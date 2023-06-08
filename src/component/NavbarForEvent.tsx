const navigation = [
    { name: "About", to: "#about" },
    { name: "Topics", to: "#topics" },
    { name: "Spekers", to: "#spekers" },
    { name: "Venues", to: "#venues" },
];


export default function NavbarForEvent() {
    return (
        <header className=" absolute top-0 z-50 w-4/5 bg-white ">
            <nav
                className="flex items-center justify-between p-6 lg:px-8 border"
                aria-label="Global"
            >
                <div className="flex lg:flex-1">
                    <a href="#event-poster" className="-m-1.5 p-1.5 flex">
                        <span className="font-extrabold text-3xl text-primary">Event Name</span>
                    </a>
                </div>
                {/* <div className="flex lg:hidden">
                    {/* <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button> */}
                {/* </div> */} 
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        <a
                            key={item.name}
                            href={item.to}
                            className="text-sm font-semibold leading-6 text-gray-900"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
                {/* Additional elemnt of navbar */}
                {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <a href="#">
                        Log in<span aria-hidden="true">&rarr;</span>
                    </a>
                </div> */}
            </nav>
        </header>
    )
}
