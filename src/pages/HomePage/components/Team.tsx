/* eslint-disable jsx-a11y/anchor-is-valid */
export function Team() {
  return (
    <div className="p-4">
      <p className="text-center text-3xl font-bold text-gray-800">
        Our team
      </p>
      <p className="text-center mb-32 text-xl font-normal text-gray-500">
        Meet the best team in the world
      </p>
      <div className="flex items-center space-y-24 md:space-y-0 flex-col md:flex-row justify-evenly">
        <div className="p-4 relative">
          <div className="text-center mb-4 absolute -top-16 right-1/2 transform translate-x-1/2">
            <a href="src/pages/HomePage/components/Team#" className="block relative">
              <img
                alt="profil"
                src="public/images/blankprofile.png"
                className="mx-auto object-cover rounded-lg h-40 w-40  border-2 border-white dark:border-gray-800"
              />
            </a>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow px-8 py-4 pt-24">
            <div className="text-center">
              <p className="text-2xl text-gray-800 dark:text-white">
                James Kelleher
              </p>
              <p className="text-xl text-gray-500 dark:text-gray-200 font-light">
                Founder &amp; Carpenter
              </p>
              <p className="text-md text-gray-500 w-60 dark:text-gray-400 mx-auto py-4 font-light">
                Patrick Sébastien, born November 14, 1953 in Brive-la-Gaillarde,
                is an imitator.
              </p>
            </div>
          </div>
        </div>
        <div className="p-4 relative">
          <div className="text-center mb-4 absolute -top-16 right-1/2 transform translate-x-1/2">
            <a href="src/pages/HomePage/components/Team#" className="block relative">
              <img
                alt="profil"
                src="public/images/blankprofile.png"
                className="mx-auto object-cover rounded-lg h-40 w-40  border-2 border-white dark:border-gray-800"
              />
            </a>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow px-8 py-4 pt-24">
            <div className="text-center">
              <p className="text-2xl text-gray-800 dark:text-white">
                Cameron Foster
              </p>
              <p className="text-xl text-gray-500 dark:text-gray-200 font-light">
                Founder &amp; Carpenter
              </p>
              <p className="text-md text-gray-500 w-60 dark:text-gray-400 mx-auto py-4 font-light">
                Thierry Halliday, born November 4, 1993 in Saint hilaire de
                riez, is css specialist.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
