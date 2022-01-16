export function Gallery() {
  return (
    <section className="relative bg-white py-10 2xl:py-40 overflow-hidden">
      <div className="relative max-w-4xl px-4 lg:px-0 mx-auto py-4">
        <div className="text-center mb-14 lg:mb-28">
          <span className="text-6xl text-black font-['Poppins'] font-heading font-bold">
            Our Works
          </span>
          <div className="font-['Poppins'] text-black place-items-center mt-12 px-2 py-4 bg-gray-200 rounded-full">
            <button className="font-medium px-6 py-4 mx-2 text-sm text-gray-700 rounded-lg bg-transparent hover:bg-white active:bg-grey-600 focus:bg-white focus:drop-shadow-md whitespace-nowrap">
              Flooring
            </button>
            <button className="font-medium px-6 py-4 mx-2 text-sm text-gray-700 rounded-lg bg-transparent hover:bg-white active:bg-grey-600 focus:bg-white focus:drop-shadow-md whitespace-nowrap">
              Roofing
            </button>
            <button className="font-medium px-6 py-4 mx-2 text-sm text-gray-700 rounded-lg bg-transparent hover:bg-white active:bg-grey-600 focus:bg-white focus:drop-shadow-md whitespace-nowrap">
              Woodworking
            </button>
            <button className="font-medium px-6 py-4 mx-2 text-sm text-gray-700 rounded-lg bg-transparent hover:bg-white active:bg-grey-600 focus:bg-white focus:drop-shadow-md whitespace-nowrap">
              Kitchen Reno
            </button>
            <button className="font-medium px-6 py-4 mx-2 text-sm text-gray-700 rounded-lg bg-transparent hover:bg-white active:bg-grey-600 focus:bg-white focus:drop-shadow-md whitespace-nowrap">
              Decks & Fencing
            </button>
            <button className="font-medium px-6 py-4 mx-2 text-sm text-gray-700 rounded-lg bg-transparent hover:bg-white active:bg-grey-600 focus:bg-white focus:drop-shadow-md whitespace-nowrap">
              Other
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="hidden lg:block absolute top-0 left-0 -ml-80">
            <img
              className="-ml-24 w-112 h-96 object-cover"
              src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=967&amp;q=80"
              alt=""
            />
          </div>
          <div className="hidden lg:block absolute top-0 right-0 -mr-80">
            <img
              className="-mr-52 w-112 h-96 object-cover"
              src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=967&amp;q=80"
              alt=""
            />
          </div>
          <div className="relative max-w-4xl mx-auto">
            <img
              className="w-full h-96 mb-12 object-cover"
              src="https://images.unsplash.com/photo-1617791160505-6f00504e3519?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1100&amp;q=80"
              alt=""
            />
          </div>
        </div>
        <div className="w-full">
          <div className="mx-auto px-5 flex content-center justify-center items-center">
            <button className="inline-flex mr-2 items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 active:bg-gray-200">
              <svg
                width="9"
                fill="currentColor"
                height="8"
                className=""
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z"></path>
              </svg>
            </button>
            <div className="rounded-lg w-72 p-4 m-auto">
              <div className="w-full h-2 bg-gray-400 rounded-full">
                <div className="w-1/4 h-full text-center text-xs text-white bg-green-500 rounded-full"></div>
              </div>
            </div>
            <button className="inline-flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 active:bg-gray-200">
              <svg
                width="9"
                fill="currentColor"
                height="8"
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
    </section>
  );
}
