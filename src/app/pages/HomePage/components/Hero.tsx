/* eslint-disable jsx-a11y/anchor-has-content */
import { scrollToElement } from "../../../utils/scrollToElement";
import { RiVipDiamondFill } from "react-icons/ri";

export function Hero() {
  return (
    <div>
      <div
        id="mobileHero"
        className="block md:hidden bg-maroon z-0 h-screen grid grid-rows-2 content-between"
      >
        <div className="grid grid-rows-2 content-evenly pt-8">
          <h1 className="font-['Poppins'] font-semibold text-white text-center text-7xl">
            Diamond Finishes
          </h1>
          <RiVipDiamondFill
            color="gray"
            className="place-self-center w-96 h-96 mt-16 px-2"
          />
        </div>
        <div className="pt-40 h-72 grid grid-rows-2 gap-0 justify-items-center items-start">
          <p className="font-['Poppins'] font-light text-white text-center text-2xl">
            We bring your ideas to life
          </p>

          <a
            href="/contact"
            className="py-8 w-3/5 bg-white text-maroon w-full font-['Poppins'] text-2xl text-center font-semibold shadow-md rounded-full"
          >
            Get a quote!
          </a>
        </div>
      </div>
      <div id="hero" className="hidden md:block bg-maroon relative h-full z-0">
        <div className="flex flex-col">
          <RiVipDiamondFill
            color="#333333"
            className="w-[45rem] h-auto mx-auto -mt-16"
          />
        </div>
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center pt-20 pl-4 w-2/5">
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
                className="py-2 px-4 w-1/3 bg-gray-600 hover:bg-gray-800 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
              >
                <a href="/contact">Get A Quote!</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
