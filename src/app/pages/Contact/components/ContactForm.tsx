import { useState } from "react";
import { sendEmail, EmailTemplateParams, useInput } from "../../../utils";

export function ContactForm() {
  const { value:name, bind:bindName, reset:resetName } = useInput("");
  const { value:contact, bind:bindContact, reset:resetContact } = useInput("");
  const { value:message, bind:bindMessage, reset:resetMessage } = useInput("");
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);

  const selectImage = (event: any) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
};

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // call api
    // if response is success show alert saying message sent
    // else show loading spinner
    const params: EmailTemplateParams = {
      name,
      contact,
      message: message,
    };

    sendEmail(params);
    e.preventDefault();
    alert(`Submitting Name ${name}, contact ${contact}, message ${message}`);
    resetName();
    resetContact();
    resetMessage();
  };

  return (
    <div id="contactus" className="bg-maroon text-gray-100 px-8 py-12">
      <div className="max-w-screen-xl shadow-lg px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
        <div className="flex flex-col gap-8 mr-2 justify-between">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Let's talk about your next project!
            </h2>
            <div className="text-gray-700 mt-8">
              Hate forms? Send us an{" "}
              <span className="underline">
                <a href="mailto: DiamondFinishes2@gmail.com?subject=NewInquiryFromWebsite">
                  email
                </a>
              </span>{" "}
              instead.
            </div>
          </div>
          <div className="mt-8 text-center">
            <img
              src="/icons/contact-3.svg"
              alt="contact us"
              className="w-full -mx-10 -mt-10 p-0"
            />
          </div>
        </div>
        <div className="ml-4">
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
              <button
                className="uppercase text-sm font-bold tracking-wide bg-red-900 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline hover:bg-red-700">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
