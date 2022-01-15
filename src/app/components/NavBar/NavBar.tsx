export function NavBar() {
  return (
    <header className="sticky top-0 bg-white z-10 backdrop-filter backdrop-blur-lg bg-opacity-30 firefox:bg-opacity-90">
      <div className="max-w-7xl mx-auto pl-6 pr-4">
        <div className="flex items-center justify-between h-10">
          <div className="w-full justify-between flex items-center">
            <a className="flex flex-shrink-0 justify-between" href="/">
              <img
                className="h-7 w-8"
                src="/icons/diamond.svg"
                alt="Workflow"
              />
              <span className="pl-2 my-auto font-['Poppins'] font-semibold text-black">
                Diamond Finishes
              </span>
            </a>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  className="text-black  hover:text-gray-500 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  href="/"
                >
                  Home
                </a>
                <a
                  className="text-black  hover:text-gray-500 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  href="/portfolio"
                >
                  Gallery
                </a>
                <a
                  className="text-black  hover:text-gray-500 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  href="/contact"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button className="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="h-8 w-8"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            href="/#"
          >
            Home
          </a>
          <a
            className="text-gray-800 dark:text-white block px-3 py-2 rounded-md text-base font-medium"
            href="/#"
          >
            Gallery
          </a>
          <a
            className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            href="/#"
          >
            Content
          </a>
          <a
            className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            href="/#"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}
