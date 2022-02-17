import { useEffect, useRef, useState } from 'react';
import {GrDiamond} from 'react-icons/gr';

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    isOpen ? ref.current!.className = `block ease-out transition duration-500` : ref.current!.className = `hidden`;
  })

  return (
    <header className="sticky top-0 bg-white z-10 backdrop-filter backdrop-blur-lg bg-opacity-30 firefox:bg-opacity-90">
      <div className="max-w-7xl mx-auto lg:pl-6 lg:pr-4 sm:pl-2 sm:pr-2">
        <div className="flex items-center justify-between h-10">
          <div className="w-full justify-between flex items-center">
            <div className="flex flex-shrink-0 justify-between">
              <a href="/">
                <GrDiamond color="black" className="h-7 w-8" />
              </a>
              <span className="hidden md:block pl-2 my-auto text-xl font-['Poppins'] font-semibold text-black">
                Diamond Finishes
              </span>
            </div>
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
                  Portfolio
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
            <button
              onClick={toggle}
              className="text-gray-800 dark:text-white inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
            >
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
      <div ref={ref} className="hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 grid col-auto justify-end text-right">
          <a
            className="text-black hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium"
            href="/"
          >
            Home
          </a>
          <a
            className="text-black hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium"
            href="/portfolio"
          >
            Portfolio
          </a>
          <a
            className="text-black hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium"
            href="/contact"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}
