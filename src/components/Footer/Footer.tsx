import {BsTelephoneFill} from "react-icons/bs";
import {IoDiamondOutline} from 'react-icons/io5';
import {FaRegEnvelope} from 'react-icons/fa';

/* eslint-disable jsx-a11y/anchor-is-valid */
export function Footer() {
  return (
    <footer className="bg-maroon h-1/2 pt-24 pb-4 overfow:hidden">
      <div className="mx-auto md:px-4 md:pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 md:justify-evenly justify-items-center mx-4">
          <div className="md:justify-self-start">
            <a
              href="/src/pages"
              className="text-md tracking-tighter text-white font-['Poppins'] hover:text-gray-300"
            >
              © 2022 Diamond Finishes LLC
            </a>
          </div>
          <div className="hidden md:block md:justify-self-center md:ml-12">
            <a href="/src/pages">
              <IoDiamondOutline color="white" className="h-7 w-8" />
            </a>
          </div>
          <div className="hidden md:block md:grid md:grid-cols-2 md:gap-2 md:justify-self-end">
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
