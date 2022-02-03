/* eslint-disable jsx-a11y/anchor-is-valid */
export function Footer() {
  return (
    <footer className="bg-maroon h-1/2 pt-24 pb-4 overfow:hidden">
      {/* <hr className="h-px mb-20 border-gray-400 dark:bg-gray-700" /> */}
      <div className="mx-auto px-4 pb-8">
        <div className="flex items-center justify-between">
          <div className="ml-4">
            <a
              href="/"
              className="text-md tracking-tighter text-white font-['Poppins'] hover:text-gray-300"
            >
              © 2022 Diamond Finishes LLC
            </a>
          </div>
          <div>
            <img
              className="h-7 w-8 mr-16"
              src="/icons/diamond-white.svg"
              alt="Diamond"
            />
          </div>
          <div className="flex flex-row space-x-4 mr-6">
            <a href="mailto: DiamondFinishes2@gmail.com?subject=NewInquiryFromWebsite">
              <img
                className="h-7 w-8"
                src="/icons/envelope.svg"
                alt="Envelope"
              />
            </a>
            <a href="tel:302-279-6114">
              <img className="h-7 w-8" src="/icons/phone.svg" alt="Phone" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
