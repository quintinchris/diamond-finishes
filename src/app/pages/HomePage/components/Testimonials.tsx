import { BsPersonCircle } from "react-icons/bs";

export function Testimonials() {
  return (
    <div className="p-4 mt-32 mb-32">
      <p className="text-center text-5xl font-bold font-['Poppins'] text-gray-800 mt-8 mb-20">
        What Our Customers Are Saying
      </p>
      <div className="max-w-screen grid grid-rows-3 lg:grid-cols-3 lg:grid-rows-1 gap-16 mb-8 mx-8">
        <div className="bg-white h-auto w-auto shadow-lg mx-auto rounded rounded-tr-3xl px-4 pt-8 pb-2 border-2 border-maroon">
          <div className="flex flex-col justify-start mt-2 mb-6">
            <div className="self-start pb-8">
              <p className="text-gray-600 font-['Ubuntu'] font-bold">
                "The Diamond Finishes team did amazing work renovating my
                property in Historic New Castle. They put a huge emphasis on
                quality while also working fast. I look forward to working with
                them again in the future!"
              </p>
            </div>
            <div className="justify-self-end pt-6 flex justify-start">
              <BsPersonCircle color="gray" className="object-cover rounded-full h-10 w-10" />
              <div className="flex flex-col ml-2 justify-between content-end">
                <span className="font-semibold text-maroon text-sm">
                  Jean Miguel
                </span>
                <span className="dark:text-gray-400 text-xs">Homeowner</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white h-auto w-auto shadow-lg mx-auto rounded rounded-tr-3xl px-4 pt-8 pb-2 border-2 border-maroon">
          <div className="flex flex-col mt-2 mb-6">
            <div className="self-start pb-8">
              <p className="text-gray-600 font-['Ubuntu'] font-bold">
                "Diamond Finishes team does the best work in Delaware! I had
                them renovate my property and they helped me create some custom
                peices that I wouldn't have been able to have done anywhere
                else! Highly recommend the team to anyone looking for custom
                woodworking!"
              </p>
            </div>
            <div className="justify-self-end flex justify-start">
              <BsPersonCircle color="gray" className="object-cover rounded-full h-10 w-10" />
              <div className="flex flex-col ml-2 justify-between content-end">
                <span className="font-semibold text-maroon text-sm">
                  Jean Miguel
                </span>
                <span className="dark:text-gray-400 text-xs">Homeowner</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white h-auto w-auto shadow-lg mx-auto rounded rounded-tr-3xl px-4 pt-8 pb-2 border-2 border-maroon">
          <div className="flex flex-col mt-2 mb-6">
            <div className="self-start pb-8">
              <p className="text-gray-600 font-['Ubuntu'] font-bold">
                "Diamond Finishes does high quality work faster than anyone else
                I've worked with. They're dedication to craftsmanship is
                something to behold. If you need a professional renovation, you
                should choose Diamond Finishes!"
              </p>
            </div>
            <div className="justify-self-end pt-6 flex justify-start">
              <BsPersonCircle color="gray" className="object-cover rounded-full h-10 w-10" />
              <div className="flex flex-col ml-2 justify-between content-end">
                <span className="font-semibold text-maroon text-sm">
                  Jean Miguel
                </span>
                <span className="dark:text-gray-400 text-xs">Homeowner</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
