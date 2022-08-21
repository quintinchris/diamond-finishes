import { FaHardHat } from "react-icons/fa";
import { GiDrill, GiWoodBeam } from "react-icons/gi";
import { IoConstruct } from "react-icons/io5";
import { MdFence } from "react-icons/md";
import { BsHouseDoor, BsPersonCircle } from "react-icons/bs";

export function Features() {
  return (
    <section className="bg-white">
      <div className="max-w-screen-xl px-4 py-16 mx-auto space-y-8 sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-center text-5xl font-bold font-['Poppins'] text-gray-800 mb-16 sm:tracking-tighter md:tracking-tight">
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
              Kitchen &amp; Bath
            </h3>
            <p className="mt-4 text-md text-black">
              Enjoy cooking for your loved ones, but can't stand your cabinet,
              countertop, or backsplash? We can fix that! Let us upgrade your
              kitchen so you can get the most out of your kitchen.
            </p>
          </div>
          <div className="block p-8 border-2 border-gray-800 shadow-lg rounded-xl">
            <GiWoodBeam color="maroon" className="w-8 h-8" />
            <h3 className="mt-3 text-xl font-bold text-black">Woodworking</h3>
            <p className="mt-4 text-md text-black">
              Our team consists of true craftsmen and can create custom pieces
              to enhance your space. Doors, cabinets, built-in's, and more!
            </p>
          </div>
          <div className="block p-8 border-2 border-gray-800 shadow-lg rounded-xl">
            <MdFence color="maroon" className="w-8 h-8" />
            <h3 className="mt-3 text-xl font-bold text-black">
              Patios, Decks &amp; Fences
            </h3>
            <p className="mt-4 text-md text-black">
              Let us enhance your backyard by building you a deck to host your
              barbecue's, a patio to soak up the sun on, or a fence to provide
              some privacy. Whatever your backyard needs are, we can make them a
              reality!
            </p>
          </div>
          <div className="block p-8 border-2 border-gray-800 shadow-lg rounded-xl">
            <GiDrill color="maroon" className="w-10 h-8" />
            <h3 className="mt-3 text-xl font-bold text-black">Flooring</h3>
            <p className="mt-4 text-md text-black">
              Whether you're looking for tile, wood flooring, carpet or laminate, we
              can help you pick out and install a new tile flooring that can
              transform your space!
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
            href="/Portfolio"
          >
            View Our Work
          </a>
        </div>
      </div>
    </section>
  );
}
