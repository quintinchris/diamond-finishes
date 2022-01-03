/* eslint-disable jsx-a11y/anchor-has-content */
import { scrollToElement } from "../../../utils/scrollToElement";

export function Hero4() {
  return (
    // gradient background
    // <div className="bg-gradient-to-r bg-blur-sm from-maroon/90 via-maroon to-maroon/90 dark:bg-gray-800 overflow-hidden h-screen flex">
    <div className="bg-maroon dark:bg-gray-800 relative overflow-hidden h-screen">
      <img className="absolute object-fill mix-blend-multiply z-10" src="/icons/diamond-gray.svg" alt="Workflow" />
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center pt-12 z-20">
        <h2 className="font-['Poppins'] font-semibold text-white dark:text-white sm:text-4xl">
          <span className="block text-5xl leading-tight">
            Bring your ideas to life with Diamond Finishes
          </span>
        </h2>
        <p className="text-md mt-4 text-slate-200">
          Providing Quality Carpentry Services In &amp; Around Historic New
          Castle, DE.
        </p>
        <div className="lg:mt-0 lg:flex-shrink-0">
          <div className="mt-12 inline-flex rounded-md shadow">
            <button
              type="button"
              onClick={() => scrollToElement("#contactus")}
              className="py-2 px-4 bg-gray-600 hover:bg-gray-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
