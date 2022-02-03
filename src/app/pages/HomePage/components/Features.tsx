import { FaHardHat } from "react-icons/fa";
import { GiDrill, GiWoodBeam } from "react-icons/gi";
import { IoConstruct } from "react-icons/io5";
import { MdFence } from "react-icons/md";
import { BsHouseDoor } from "react-icons/bs";

export function Features() {
  return (
    <section className="bg-white">
      <div className="max-w-screen-xl px-4 py-16 mx-auto space-y-8 sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-center text-5xl font-bold font-['Poppins'] text-gray-800 mb-16">
            Our Services
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="block p-8 border-2 border-gray-800 shadow-lg rounded-xl">
            <BsHouseDoor color="maroon" className="w-8 h-8" />
            <h3 className="mt-3 text-xl font-bold text-black">Renovations</h3>
            <p className="mt-4 text-md text-black">
              Whether you're just looking for a small upgrade, or doing a
              complete renovation, we can help you get there from start to
              finish.
            </p>
          </div>
          <div className="block p-8 border-2 border-gray-800 shadow-lg rounded-xl">
            <IoConstruct color="maroon" className="w-8 h-8" />
            <h3 className="mt-3 text-xl font-bold text-black">
              Something else
            </h3>
            <p className="mt-4 text-md text-black">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
              eius labore nisi tempore modi vel voluptate ullam nostrum adipisci
              suscipit eaque quae cupiditate, accusamus minus laboriosam totam
              laborum, deserunt sint.
            </p>
          </div>
          <div className="block p-8 border-2 border-gray-800 shadow-lg rounded-xl">
            <GiWoodBeam color="maroon" className="w-8 h-8" />
            <h3 className="mt-3 text-xl font-bold text-black">
              Woodworking
            </h3>
            <p className="mt-4 text-md text-black">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
              eius labore nisi tempore modi vel voluptate ullam nostrum adipisci
              suscipit eaque quae cupiditate, accusamus minus laboriosam totam
              laborum, deserunt sint.
            </p>
          </div>
          <div className="block p-8 border-2 border-gray-800 shadow-lg rounded-xl">
            <MdFence color="maroon" className="w-8 h-8" />
            <h3 className="mt-3 text-xl font-bold text-black">
              Decks &amp; Fencing
            </h3>
            <p className="mt-4 text-md text-black">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
              eius labore nisi tempore modi vel voluptate ullam nostrum adipisci
              suscipit eaque quae cupiditate, accusamus minus laboriosam totam
              laborum, deserunt sint.
            </p>
          </div>
          <div className="block p-8 border-2 border-gray-800 shadow-lg rounded-xl">
            <GiDrill color="maroon" className="w-10 h-8" />
            <h3 className="mt-3 text-xl font-bold text-black">
              Flooring
            </h3>
            <p className="mt-4 text-md text-black">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
              eius labore nisi tempore modi vel voluptate ullam nostrum adipisci
              suscipit eaque quae cupiditate, accusamus minus laboriosam totam
              laborum, deserunt sint.
            </p>
          </div>
          <div className="block p-8 border-2 border-gray-800 shadow-lg rounded-xl">
            <FaHardHat color="maroon" className="w-8 h-8" />
            <h3 className="mt-3 text-xl font-bold text-black">
              Custom Projects
            </h3>
            <p className="mt-4 text-md text-black">
              We are carpenters with experience and expertise in all aspects. If
              you have a custom project in mind, we can help you get it done.
            </p>
          </div>
        </div>
        <div className="text-center">
          <a
            className="inline-block font-['Poppins'] px-5 py-3 mt-6 text-md font-medium text-white bg-maroon rounded-lg hover:bg-red-900"
            href="/portfolio"
          >
            View Our Work
          </a>
        </div>
      </div>
    </section>
  );
}
