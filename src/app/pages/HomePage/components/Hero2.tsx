/* eslint-disable jsx-a11y/anchor-has-content */
import { scrollToElement } from '../../../utils/scrollToElement';

export function Hero2() {
  return (
    <div className="bg-white dark:bg-gray-800 overflow-hidden h-screen pb-14 lg:flex lg:items-center">
      <div className="w-3/4 py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
          <span className="block text-5xl">
            Making Your Dream Projects A Reality
          </span>
        </h2>
        <p className="text-md mt-4 text-gray-400">
          Providing Quality Carpentry Services In &amp; Around Historic New
          Castle, DE.
        </p>
        <div className="lg:mt-0 lg:flex-shrink-0">
          <div className="mt-12 inline-flex rounded-md shadow">
            <button
              type="button"
              onClick={() => scrollToElement("#contactus")}
              className="py-2 px-4 bg-green-500 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 rounded-xl text-gray-100 px-8 mr-4 py-12 w-11/12">
        <div className="flex items-center gap-8">
          <img
            src="/images/IMG-0350.jpg"
            className="rounded-lg w-1/2"
            alt="Tree"
          />
          <div>
            <img
              src="/images/IMG-0682.jpg"
              className="rounded-lg mb-8"
              alt="Tree"
            />
            <img src="/images/IMG-0170.jpg" className="rounded-lg" alt="Tree" />
          </div>
        </div>
      </div>
    </div>
  );
}
