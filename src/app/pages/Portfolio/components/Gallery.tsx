// TODO: extract image slider, arrow buttons to component
import { useState, useRef, useEffect } from "react";
import {
  DeckAndPatioImages,
  FlooringImages,
  KitchenAndBathImages,
  RoofingImages,
  WoodworkingImages,
  OtherImages,
} from "../../../utils";

export function Gallery() {
  const ref = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [index, setIndex] = useState(0);
  const [images, setImages] = useState(KitchenAndBathImages);
  
  useEffect(() => {
    imageRef.current!.src = images[index];
    let progress;
    if (index + 1 > images.length) {
      progress = 100;
    } else {
      progress = Math.floor((index / images.length) * 100);
    }
    updateProgressBar(progress);
  });

  const updateImageSet = (set: Array<string>) => {
    setImages(set);
    setIndex(0);
    updateProgressBar(0);
  }

  const updateProgressBar = (progress: number) => {
    ref.current!.style.width = `${progress}%`;
    ref.current!.style.transition = "width 0.5s";
  };

  const next = () => {
    setIndex((i) => (
      i + 1 >= images.length ? i = 0 : i + 1
    ));
  };

  const prev = () => {
    setIndex((i) => (
      i - 1 <= 0 ? i = images.length -1 : i - 1
    ));
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
              <button
                onClick={() => updateImageSet(KitchenAndBathImages)}
                className="font-medium px-6 py-4 mx-2 text-sm text-gray-700 rounded-xl bg-transparent hover:bg-white active:bg-grey-600 active:text-black focus:bg-white focus:drop-shadow-md whitespace-nowrap"
              >
                Kitchen & Bath
              </button>
              <button
                onClick={() => updateImageSet(RoofingImages)}
                className="font-medium px-6 py-4 mx-2 text-sm text-gray-700 rounded-xl bg-transparent hover:bg-white active:bg-grey-600 active:text-black focus:bg-white focus:drop-shadow-md whitespace-nowrap"
              >
                Roofing
              </button>
              <button
                onClick={() => updateImageSet(FlooringImages)}
                className="font-medium px-6 py-4 mx-2 text-sm text-gray-700 rounded-xl bg-transparent hover:bg-white active:bg-grey-600 active:text-black focus:bg-white focus:drop-shadow-md whitespace-nowrap"
              >
                Flooring
              </button>
              <button
                onClick={() => updateImageSet(WoodworkingImages)}
                className="font-medium px-6 py-4 mx-2 text-sm text-gray-700 rounded-xl bg-transparent hover:bg-white active:bg-grey-600 active:text-black focus:bg-white focus:drop-shadow-md whitespace-nowrap"
              >
                Woodworking
              </button>
              <button
                onClick={() => updateImageSet(DeckAndPatioImages)}
                className="font-medium px-6 py-4 mx-2 text-sm text-gray-700 rounded-xl bg-transparent hover:bg-white active:bg-grey-600 active:text-black focus:bg-white focus:drop-shadow-md whitespace-nowrap"
              >
                Decks & Fencing
              </button>
              <button
                onClick={() => updateImageSet(OtherImages)}
                className="font-medium px-6 py-4 mx-2 text-sm text-gray-700 rounded-xl bg-transparent hover:bg-white active:bg-grey-600 active:text-black focus:bg-white focus:drop-shadow-md whitespace-nowrap"
              >
                Other
              </button>
            </div>
          </div>
          <div className="relative my-20 flex flex-row">
            <div className="place-self-center content-center justify-center mx-auto">
              <img
                ref={imageRef}
                className="w-112 h-96 object-cover transition-all duration-500"
                alt=""
              />
            </div>
          </div>
          <div className="w-full pb-6">
            <div className="mx-auto w-3/4 flex content-center justify-center items-center">
              <button
                onClick={prev}
                className="inline-flex mr-2 items-center justify-center w-10 h-12 rounded-full hover:bg-gray-100 active:bg-gray-200"
              >
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
              <div
                className="rounded-lg w-72 mx-24 p-4 m-auto"
              >
                <div className="w-full h-2 bg-gray-400 rounded-full">
                  <div
                    ref={ref}
                    className="h-full w-0 text-center text-xs text-white bg-red-800 rounded-full"
                  ></div>
                </div>
              </div>
              <button
                onClick={next}
                className="inline-flex items-center justify-center w-10 h-12 rounded-full hover:bg-gray-100 active:bg-gray-200"
              >
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
