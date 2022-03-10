import {
  sendEmail,
  EmailTemplateParams,
  useInput,
} from "../../../utils";
import {BsTelephoneFill} from "react-icons/bs";
import {FaRegEnvelope} from 'react-icons/fa';

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


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let params: EmailTemplateParams = {
      name,
      contact,
      message,
    };
    sendEmail(params);
    e.preventDefault();
    alert(
      `Message Sent! Thanks for your interest ${name}! We will get back to you as soon as possible.`
    );
    resetName();
    resetContact();
    resetMessage();
  };

  return (
    <div className="bg-maroon text-gray-100 px-8 py-12">
      <div className="max-w-screen-xl md:px-8 md:pr-20 grid gap-8 grid-cols-1 md:grid-cols-2 py-2 mx-auto text-gray-900">
        <div className="grid grid-cols-1 gap-8 mr-2 justify-between text-center md:text-left">
          <div>
            <h2 className="text-4xl lg:text-5xl text-white font-['Poppins'] font-bold sm:tracking-tighter md:tracking-tight">
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
                  <span className="block">Call us!</span>
                </a>
              </div>
              <div className="hover:box-border md:mt-2 px-4 py-6 md:w-3/4 text-center rounded-lg hover:border-2 hover:border-white hover:bg-maroon3 cursor-pointer">
                <a
                  className="flex flex-row items-center content-center justify-start"
                  href="mailto: DiamondFinishes2@gmail.com?subject=NewInquiryFromWebsite"
                >
                  <FaRegEnvelope color="white" className="w-10 h-10 pr-4" />
                  <span className="block">Email us!</span>
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
