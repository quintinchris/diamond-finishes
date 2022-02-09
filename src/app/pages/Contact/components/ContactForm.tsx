import { useState } from "react";
import {
  sendEmail,
  EmailTemplateParams,
  useInput,
  getImageUrl,
  convertToBase64
} from "../../../utils";
import {BsTelephoneFill} from "react-icons/bs";
import {FaRegEnvelope} from 'react-icons/fa';
import {MdOutlineUpload} from 'react-icons/md';

export function ContactForm() {
  const { value: name, bind: bindName, reset: resetName } = useInput("");
  const {
    value: contact,
    bind: bindContact,
    reset: resetContact,
  } = useInput("");
  const {
    value: message,
    bind: bindMessage,
    reset: resetMessage,
  } = useInput("");
  const [selectedFile, setSelectedFile] = useState<any>();
  const [isFilePicked, setIsFilePicked] = useState(false);

  const handleImageUpload = async (e: any) => {
    const file = e.target.files[0];
    if (file) {
      let base64Image = await convertToBase64(file);
      setSelectedFile(base64Image);
      setIsFilePicked(true);
    } else {
      alert("Please select an image");
    }
  }
  
  const getImageForMessage = async (base64Image: string) => {
    if (isFilePicked && selectedFile) {
      const res = await getImageUrl(base64Image);
      console.log(res);
      return res.data.image.url;
    } else {
      alert("No image selected");
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isFilePicked && selectedFile) {
      const imageUrl = await getImageForMessage(selectedFile);
      const paramsWithImage: EmailTemplateParams = {
        name,
        contact,
        message: message + `\n\nSee Images at: ${imageUrl}`,
      };
      sendEmail(paramsWithImage);
      alert(
        `Submitting Name ${paramsWithImage.name}, contact ${paramsWithImage.contact}, message ${paramsWithImage.message}`
      );
      resetName();
      resetContact();
      resetMessage();
      setIsFilePicked(false);
    } else {
      let params: EmailTemplateParams = {
        name,
        contact,
        message,
      };
      sendEmail(params);
      e.preventDefault();
      alert(
        `Submitting Name ${params.name}, contact ${params.contact}, message ${params.message}`
      );
      resetName();
      resetContact();
      resetMessage();
    }
  };

  return (
    <div className="bg-maroon text-gray-100 px-8 py-12 overflow-hidden">
      <div className="max-w-screen-xl md:px-8 md:pr-20 grid gap-8 grid-cols-1 md:grid-cols-2 py-2 mx-auto text-gray-900">
        <div className="grid grid-cols-1 gap-8 mr-2 justify-between text-center md:text-left">
          <div>
            <h2 className="text-4xl lg:text-5xl text-white font-['Poppins'] font-bold leading-tight">
              Get a quote
            </h2>
            <div className="text-gray-200 mt-6 md:w-5/6">
              Fill out the form and our team will get back to you as soon as
              possible!
            </div>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-1 text-center text-white mt-8 md:mt-16">
              <div className="hover:box-border px-4 py-6 md:w-3/4 text-center rounded-lg hover:bg-maroon3 hover:border-2 hover:border-white cursor-pointer">
                <a
                  className="flex flex-row items-center content-center justify-start"
                  href="tel:302-279-6114"
                >
                  <BsTelephoneFill color="white" className="w-10 h-10 pr-4" />
                  <span className="hidden md:block">(302) 279-6114</span>
                  <span className="block md:hidden">Call us!</span>
                </a>
              </div>
              <div className="hover:box-border md:mt-2 px-4 py-6 md:w-3/4 text-center rounded-lg hover:border-2 hover:border-white hover:bg-maroon3 cursor-pointer">
                <a
                  className="flex flex-row items-center content-center justify-start"
                  href="mailto: DiamondFinishes2@gmail.com?subject=NewInquiryFromWebsite"
                >
                  <FaRegEnvelope color="white" className="w-10 h-10 pr-4" />
                  <span className="hidden md:block">
                    diamondfinishes2@gmail.com
                  </span>
                  <span className="block md:hidden">Email us!</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="md:ml-6 rounded-lg bg-gray-200 shadow-lg px-6 py-8 md:-mt-4 md:-mr-14">
          <form onSubmit={handleSubmit}>
            <div>
              <span className="uppercase text-sm text-gray-600 font-bold">
                Full Name
              </span>
              <input
                className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                name="name"
                placeholder=""
                {...bindName}
              />
            </div>
            <div className="mt-4">
              <span className="uppercase text-sm text-gray-600 font-bold">
                Email
              </span>
              <input
                className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                name="contact"
                {...bindContact}
              />
            </div>
            <div className="mt-4">
              <span className="uppercase text-sm text-gray-600 font-bold">
                Message
              </span>
              <textarea
                name="message"
                {...bindMessage}
                className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              ></textarea>
            </div>
            <div className="mt-4 flex flex-row">
              <div className="rounded-full bg-gray-800 hover:bg-slate-900 px-4 py-1 w-1/2 overflow:hidden">
                <input
                  className="cursor-pointer z-0 opacity-0 absolute place-self-center"
                  type="file"
                  name="file"
                  onChange={handleImageUpload}
                />
                <div className="flex flex-row items-center content-center justify-start cursor-pointer z-10">
                  <MdOutlineUpload
                    color="white"
                    className="w-10 h-10 pr-4 cursor-pointer"
                  />
                  <span className="text-white font-['Poppins'] text-sm cursor-pointer">
                    Upload Image
                  </span>
                </div>
              </div>
              {isFilePicked ? (
                <div className="pl-6 w-1/2 text-center place-self-center font-['Poppins']">
                  <p>Filename: {selectedFile?.name}</p>
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <div className="mt-8">
              <button
                type="submit"
                className="uppercase text-sm font-bold tracking-wide bg-red-900 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline hover:bg-maroon"
              >
                Send Message!
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
