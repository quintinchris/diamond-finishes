/* eslint-disable jsx-a11y/anchor-has-content */
import { scrollToElement } from "../../../utils/scrollToElement";

export function Hero3() {
  return (
    <div className="bg-white dark:bg-gray-800 overflow-hidden h-fit lg:flex lg:items-center">
      <div className="w-1/2 h-screen flex px-1 pr-8 pb-20">
        <img
          src="/images/IMG-0682.jpg"
          className="rounded-md self-end"
          alt="Tree"
        />
      </div>
      <div className="w-3/4 h-screen pt-16 px-4 sm:px-6 lg:px-0 text-center">
        <h2 className="font-sans font-semibold text-black dark:text-white sm:text-4xl">
          <span className="block text-6xl leading-tight">
            Making Your Dream Projects A Reality
          </span>
        </h2>
        <p className="text-md mt-4 text-slate-800">
          Providing Quality Carpentry Services In &amp; Around Historic New
          Castle, DE.
        </p>
        <div className="lg:mt-0 lg:flex-shrink-0">
          <div className="mt-12 inline-flex rounded-md shadow">
            <button
              type="button"
              onClick={() => scrollToElement("#contactus")}
              className="py-2 px-4 bg-red-900 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
      <div className="w-1/2 h-screen px-1 py-6 pb-36 content-center pl-12 lg:pl-16">
        <img
          src="/images/IMG-0350.jpg"
          className="rounded-md h-full"
          alt="Tree"
        />
      </div>
    </div>
  );
}
