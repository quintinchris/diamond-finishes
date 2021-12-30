/* eslint-disable jsx-a11y/anchor-is-valid */
export function Footer() {
  return (
    <footer className="bg-gray-300 dark:bg-gray-800 w-full h-1/2 pt-6 pb-4 overfow:hidden">
      <div className="max-w-screen-xl mx-auto px-4">
        <ul className="max-w-screen-md mx-auto text-lg font-light flex flex-wrap justify-between">
          <li className="my-2">
            <a
              className="text-black hover:text-white dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
              href="#"
            >
              FAQ
            </a>
          </li>
          <li className="my-2">
            <a
              className="text-black hover:text-white dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
              href="#"
            >
              Portfolio
            </a>
          </li>
          <li className="my-2">
            <a
              className="text-black hover:text-white dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
              href="#"
            >
              Contact
            </a>
          </li>
        </ul>
        <div className="text-center text-gray-500 dark:text-gray-200 sm:pt-4 font-light flex items-center justify-center">
          © 2022 Diamond Finishes LLC
        </div>
      </div>
    </footer>
  );
}
