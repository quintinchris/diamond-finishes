/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
export function Testimonials() {
  return (
    <div className="p-4 mt-32 mb-32">
      <p className="text-center text-3xl font-bold text-gray-800">
        Testimonials
      </p>
      <p className="text-center mb-2 text-xl font-normal text-gray-500">
        See What People Say About Our Work
      </p>
      <div className="w-full flex flex-col md:flex-row gap-4 mb-8 md:mb-0 flex-between items-center p-8">
        <div className="bg-white dark:bg-gray-800 w-72 shadow-lg mx-auto rounded-xl p-4">
          <p className="text-gray-600 dark:text-white">
            <span className="font-bold text-indigo-500 text-lg">“</span>
            To get social media testimonials like these, keep your customers
            engaged with your social media accounts by posting regularly
            yourself
            <span className="font-bold text-indigo-500 text-lg">”</span>
          </p>
          <div className="flex items-center mt-4">
            <a href="#" className="block relative">
              <img
                alt="profil"
                src="/images/blankprofile.png"
                className="mx-auto object-cover rounded-full h-10 w-10 "
              />
            </a>
            <div className="flex flex-col ml-2 justify-between">
              <span className="font-semibold text-indigo-500 text-sm">
                Jean Miguel
              </span>
              <span className="dark:text-gray-400 text-xs flex items-center">
                User of Tail-Kit
                <img src="/icons/rocket.svg" className="ml-2 h-4 w-4" />
              </span>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 w-72 shadow-lg mx-auto rounded-xl p-4">
          <p className="text-gray-600 dark:text-white">
            <span className="font-bold text-indigo-500 text-lg">“</span>
            To get social media testimonials like these, keep your customers
            engaged with your social media accounts by posting regularly
            yourself
            <span className="font-bold text-indigo-500 text-lg">”</span>
          </p>
          <div className="flex items-center mt-4">
            <a href="#" className="block relative">
              <img
                alt="profil"
                src="/images/blankprofile.png"
                className="mx-auto object-cover rounded-full h-10 w-10 "
              />
            </a>
            <div className="flex flex-col ml-2 justify-between">
              <span className="font-semibold text-indigo-500 text-sm">
                Jean Miguel
              </span>
              <span className="dark:text-gray-400 text-xs flex items-center">
                User of Tail-Kit
                <img src="/icons/rocket.svg" className="ml-2 h-4 w-4" />
              </span>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 w-72 shadow-lg mx-auto rounded-xl p-4">
          <p className="text-gray-600 dark:text-white">
            <span className="font-bold text-indigo-500 text-lg">“</span>
            To get social media testimonials like these, keep your customers
            engaged with your social media accounts by posting regularly
            yourself
            <span className="font-bold text-indigo-500 text-lg">”</span>
          </p>
          <div className="flex items-center mt-4">
            <a href="#" className="block relative">
              <img
                alt="profil"
                src="/images/blankprofile.png"
                className="mx-auto object-cover rounded-full h-10 w-10 "
              />
            </a>
            <div className="flex flex-col ml-2 justify-between">
              <span className="font-semibold text-indigo-500 text-sm">
                Luella
              </span>
              <span className="dark:text-gray-400 text-xs flex items-center">
                Renovated entire property in Historic New Castle, DE.
                <img src="/icons/rocket.svg" className="ml-2 h-4 w-4" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
