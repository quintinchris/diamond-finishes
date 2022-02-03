import { RiNumber1, RiNumber2, RiNumber3 } from "react-icons/ri";

export const WorkFlow: React.FC<{}> = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center pb-8">
          <h2 className="text-5xl font-['Poppins'] font-bold">How It Works</h2>
          <p className="mt-6 text-gray-800">
            Check out our process, so you know what to expect when having us
            work on a project.
          </p>
        </div>

        <dl className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-3 sm:mt-16">
          <div className="flex items-start md:flex-col">
            <span className="flex-shrink-0 p-4 bg-maroon rounded-lg">
              <RiNumber1 color="white" className="" />
            </span>
            <div className="ml-3 md:mt-3 md:ml-0">
              <dt className="text-xl font-medium font-['Poppins']">Planning</dt>
              <dd className="mt-1 text-gray-800">
                Once you've chosen your project, we'll take a look and build an
                estimate of the work we need to do. This will include the
                design, layout, and production of your project.
              </dd>
            </div>
          </div>

          <div className="flex items-start md:flex-col">
            <span className="flex-shrink-0 p-4 bg-maroon rounded-lg">
              <RiNumber2 color="white" className="" />
            </span>
            <div className="ml-3 md:mt-3 md:ml-0">
              <dt className="text-xl font-medium font-['Poppins']">Schedule</dt>
              <dd className="mt-1 text-gray-800">
                Once we've got an estimate, we'll schedule a time that works for
                you to come out and complete the project.
              </dd>
            </div>
          </div>

          <div className="flex items-start md:flex-col">
            <span className="flex-shrink-0 p-4 bg-maroon rounded-lg">
              <RiNumber3 color="white" className="" />
            </span>
            <div className="ml-3 md:mt-3 md:ml-0">
              <dt className="text-xl font-medium font-['Poppins']">
                Production
              </dt>
              <dd className="mt-1 text-gray-800">
                Now that we've scheduled a date, we'll get to work on your
                project! We'll keep you updated with our progress as we go.
              </dd>
            </div>
          </div>
        </dl>
      </div>
    </section>
  );
};
