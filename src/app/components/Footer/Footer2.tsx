/* eslint-disable jsx-a11y/anchor-is-valid */
export function Footer() {
  return (
    <footer className="bg-black h-1/2 pt-24 pb-4 overfow:hidden">
      <div className="mx-auto px-4">
        {/* <hr className="h-px mt-6 border-gray-400 dark:bg-gray-700" /> */}
        <div className="w-full flex flex-row justify-around pb-16">
          <div className="mr-60">
            <a
              href="/"
              className="text-md tracking-tighter text-white font-['Poppins'] hover:text-gray-400"
            >
              © 2022 Diamond Finishes LLC
            </a>
          </div>
          <div>
            <img
              className="h-7 w-8 mr-72"
              src="/icons/diamond-white.svg"
              alt="Diamond"
            />
          </div>
          <div className="flex flex-row space-x-4 -mr-6">
            <img className="h-7 w-8" src="/icons/envelope.svg" alt="Diamond" />
            <img className="h-7 w-8" src="/icons/phone.svg" alt="Diamond" />
          </div>
        </div>
      </div>
    </footer>
  );
}
