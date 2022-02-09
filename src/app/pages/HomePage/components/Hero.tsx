/* eslint-disable jsx-a11y/anchor-has-content */
import { scrollToElement } from "../../../utils/scrollToElement";
import {RiVipDiamondFill} from "react-icons/ri";

export function Hero() {
  return (
    <div className="bg-maroon dark:bg-gray-800 relative overflow-hidden h-full z-0">
      <div className="flex flex-col content-center justify-center align-center">
        <RiVipDiamondFill color="black" className="place-self-center w-4/5 h-screen"/>
      </div>
      <div className="hidden md:block absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center pt-24 pl-4 w-2/5">
        <div className="flex flex-col justify-items-center">
          <h2 className="font-['Poppins'] font-semibold text-white dark:text-white sm:text-4xl">
            <span className="block text-6xl leading-tight place-self-center">
              Bring your ideas to life
            </span>
          </h2>
          <p className="text-md text-center place-self-center mt-6 w-3/4 text-slate-300">
            Providing Quality Carpentry Services In &amp; Around Historic New
            Castle, DE.
          </p>
          <div className="mt-10 -ml-2">
            <button
              type="button"
              onClick={() => scrollToElement(".contact")}
              className="py-2 px-4 w-1/3 bg-gray-600 hover:bg-gray-800 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
              <a href="/contact">Get A Quote!</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
