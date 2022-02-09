import {BsTelephoneFill} from "react-icons/bs";
import {IoDiamondOutline} from 'react-icons/io5';
import {FaRegEnvelope} from 'react-icons/fa';

/* eslint-disable jsx-a11y/anchor-is-valid */
export function Footer() {
  return (
    <footer className="bg-maroon h-1/2 pt-24 pb-4 overfow:hidden">
      {/* <hr className="h-px mb-20 border-gray-400 dark:bg-gray-700" /> */}
      <div className="mx-auto px-4 pb-8">
        <div className="flex items-center justify-between mx-4">
          <div className="ml-4">
            <a
              href="/"
              className="text-md tracking-tighter text-white font-['Poppins'] hover:text-gray-300"
            >
              © 2022 Diamond Finishes LLC
            </a>
          </div>
          <div>
            <IoDiamondOutline color="white" className="fill-white h-7 w-8 mr-20" />
          </div>
          <div className="flex flex-row space-x-4 mr-6">
            <a href="mailto: DiamondFinishes2@gmail.com?subject=NewInquiryFromWebsite">
              <FaRegEnvelope color="white" className="h-7 w-8" />
            </a>
            <a href="tel:302-279-6114">
              <BsTelephoneFill color="white" className="h-7 w-8" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
