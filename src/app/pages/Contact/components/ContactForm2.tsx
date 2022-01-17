import { useState } from "react";
import { promises } from "stream";
import {
  sendEmail,
  EmailTemplateParams,
  useInput,
  callImageApi,
} from "../../../utils";

export function ContactForm() {
  const { 
      value: name, 
      bind: bindName, 
      reset: resetName 
  } = useInput("");
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
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);

  const selectImage = (event: any) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const reader = new FileReader();
    reader.onloadend = function () {
      console.log("RESULT", reader.result);
    };
    const uploadedImage = reader.readAsDataURL(selectedFile ?? new Blob());
    const imageUrl = isFilePicked ? callImageApi(uploadedImage) : null;
    const emailMessage = imageUrl ? message + `\n\nSee Images at: ${imageUrl}` : null;
    const params: EmailTemplateParams = {
      name,
      contact,
      message: emailMessage ?? message,
    };

    sendEmail(params);
    e.preventDefault();
    alert(
      `Submitting Name ${name}, contact ${contact}, message ${
        emailMessage ?? message
      }`
    );
    resetName();
    resetContact();
    resetMessage();
  };

  return (
    <div className="bg-red-900 text-gray-100 px-8 py-12">
      <div className="max-w-screen-xl px-8 pr-20 grid gap-8 grid-cols-1 md:grid-cols-2 py-2 mx-auto text-gray-900">
        <div className="flex flex-col gap-8 mr-2 justify-between">
          <div>
            <h2 className="text-4xl lg:text-5xl text-white font-['Poppins'] font-bold leading-tight">
              Get a quote
            </h2>
            <div className="text-gray-300 mt-8 w-5/6">
              Fill out the form and our team will get back to you within 24 hours.
            </div>
            <div className="text-center text-white mt-16">
               <div className="flex flex-row px-4 py-6 w-3/4 items-center content-center justify-start text-center rounded-lg hover:bg-maroon3 hover:border-2 hover:border-white cursor-pointer">
                <img
                  src="/icons/phone.svg"
                  alt="phone"
                  className="w-10 h-10 pr-4 fill-white"
                />
                <span>+1 302-504-5409</span>
              </div>
              <div className="mt-2 px-4 py-6 w-3/4 text-center rounded-lg hover:border-2 hover:border-white hover:bg-maroon3 cursor-pointer">
               <a className="flex flex-row items-center content-center justify-start" href="mailto: DiamondFinishes2@gmail.com?subject=NewInquiryFromWebsite">
                <img
                  src="/icons/envelope.svg"
                  alt="envelope"
                  className="w-10 h-10 pr-4 fill-white"
                />
                <span>diamondfinishes2@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="ml-6 rounded-lg bg-gray-200 shadow-lg px-6 py-8 -mt-4 -mr-14">
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
            <div className="mt-8">
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
            <div className="mt-8">
              <span className="uppercase text-sm text-gray-600 font-bold">
                Message
              </span>
              <textarea
                name="message"
                {...bindMessage}
                className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              ></textarea>
            </div>
            <div className="mt-8">
              <button className="uppercase text-sm font-bold tracking-wide bg-red-900 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline hover:bg-red-700">
                Send Message
              </button>
            </div>
            <div className="mt-8">
              <input type="file" name="file" onChange={selectImage} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
