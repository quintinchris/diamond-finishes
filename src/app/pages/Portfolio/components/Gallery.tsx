import { useState, useRef  } from "react";
import {
  DeckAndPatioImages,
  FlooringImages,
  KitchenAndBathImages,
  RoofingImages,
  WoodworkingImages,
  OtherImages,
} from "../../../utils";
// TODO: extract image slider to component

export function Gallery() {
  const [index, setIndex] = useState(0);
  const images = KitchenAndBathImages;
  // TODO: switch source based on tab selected
  const ref = useRef<HTMLDivElement>(null);

  const assignProgressToEachImage = (images: Array<string>) => {
    const progress = Math.floor(100 / images.length);
    const imagesWithProgress = images.map((image, index) => {
      return {
        image: image,
        progress: progress * index,
      };
    }, []);
    
  };


  const updateProgressBarFill = (index: number, images: Array<string>) => {
    const progress = Math.floor((index / images.length) * 100);
    ref.current!.style.width = `${progress}%`;
    ref.current!.style.transition = "width 0.7s ease-in-out";
  };
  
  const next = () => {
    setIndex((i) => (i + 1) % images.length);
    updateProgressBarFill(index, images);
    // TODO: add function to update loading bar progress
  };
  const prev = () => {
    setIndex((i) => (i - 1) % images.length);
    updateProgressBarFill(index, images);
    // TODO: add function to update loading bar progress
  };

  return (
    <section className="relative bg-maroon overflow-hidden pb-12">
      <div className="relative mx-6 my-8 pt-12 bg-white shadow-md rounded-lg">
       <div className="">
        <div className="text-center mb-14 lg:mb-28">
          <span className="text-6xl text-black font-['Poppins'] font-heading font-extrabold">
            Portfolio
          </span>
          <div className="font-['Poppins'] text-black place-items-center mt-12 mx-24 py-4 bg-gray-200 rounded-full">
            <button className="font-medium px-6 py-4 mx-2 text-sm text-gray-700 rounded-xl bg-transparent hover:bg-white active:bg-grey-600 active:text-black focus:bg-white focus:drop-shadow-md whitespace-nowrap">
              Kitchen & Bath
            </button>
            <button className="font-medium px-6 py-4 mx-2 text-sm text-gray-700 rounded-xl bg-transparent hover:bg-white active:bg-grey-600 active:text-black focus:bg-white focus:drop-shadow-md whitespace-nowrap">
              Roofing
            </button>
            <button className="font-medium px-6 py-4 mx-2 text-sm text-gray-700 rounded-xl bg-transparent hover:bg-white active:bg-grey-600 active:text-black focus:bg-white focus:drop-shadow-md whitespace-nowrap">
              Flooring
            </button>
            <button className="font-medium px-6 py-4 mx-2 text-sm text-gray-700 rounded-xl bg-transparent hover:bg-white active:bg-grey-600 active:text-black focus:bg-white focus:drop-shadow-md whitespace-nowrap">
              Woodworking
            </button>
            <button className="font-medium px-6 py-4 mx-2 text-sm text-gray-700 rounded-xl bg-transparent hover:bg-white active:bg-grey-600 active:text-black focus:bg-white focus:drop-shadow-md whitespace-nowrap">
              Decks & Fencing
            </button>
            <button className="font-medium px-6 py-4 mx-2 text-sm text-gray-700 rounded-xl bg-transparent hover:bg-white active:bg-grey-600 active:text-black focus:bg-white focus:drop-shadow-md whitespace-nowrap">
              Other
            </button>
          </div>
        </div>
        <div className="relative my-20 flex flex-row">
          <div className="hidden">
            <img
              className="w-112 h-96 object-cover ease-in-out duration-300"
              src={images[index - 1]}
              alt=""
            />
          </div>
          <div className="place-self-center content-center justify-center mx-auto">
            <img
              className="w-112 h-96 object-cover ease-in-out duration-500 animate-fade-out"
              src={images[index]}
              alt=""
            />
          </div>
          <div className="hidden">
            <img
              className="h-96 mb-12 object-cover animate-fade-in ease-in-out duration-300"
              src={images[index + 1]}
              alt=""
            />
          </div>
        </div>
        <div className="w-full pb-6">
          <div className="mx-auto w-3/4 flex content-center justify-center items-center">
            <button onClick={prev} className="inline-flex mr-2 items-center justify-center w-10 h-12 rounded-full hover:bg-gray-100 active:bg-gray-200">
              <svg
                width="12"
                fill="currentColor"
                height="28"
                className=""
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z"></path>
              </svg>
            </button>
            <div id="progressBar" className="rounded-lg w-72 mx-24 p-4 m-auto">
              <div className="w-full h-2 bg-gray-400 rounded-full">
                <div id="progressBarFill" ref={ref} className="h-full w-0 text-center text-xs text-white bg-red-800 rounded-full"></div>
              </div>
            </div>
            <button onClick={next} className="inline-flex items-center justify-center w-10 h-12 rounded-full hover:bg-gray-100 active:bg-gray-200">
              <svg
                width="12"
                fill="currentColor"
                height="28"
                className=""
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
              </svg>
            </button>
          </div>
        </div>
       </div>
      </div>
    </section>
  );
}
