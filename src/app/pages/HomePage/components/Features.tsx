export function Features() {
  return (
    <div className="container mx-auto px-6 p-6 bg-white dark:bg-gray-800">
      <div className="mb-16 text-center">
        <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
          Our Services
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          A better way to live
        </p>
      </div>
      <div className="flex flex-wrap my-12 dark:text-white">
        <div className="w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8">
          <div className="flex items-center mb-6">
            <img src="/icons/floor.svg" className="h-7 w-7" alt="Floor Icon" />
            <div className="ml-4 text-xl">Flooring</div>
          </div>
          <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
            Receive more sales by selling across multple sales channels instead
            of just having a single point of entry.
          </p>
        </div>
        <div className="w-full border-b md:w-1/2 lg:w-1/3 lg:border-r p-8">
          <div className="flex items-center mb-6">
            <img src="/icons/wood.svg" className="h-7 w-7" alt="Floor Icon" />
            <div className="ml-4 text-xl">Woodworking</div>
          </div>
          <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
            Apply beautiful overlays to every product image distributed through
            our platform. A visual touch.
          </p>
        </div>
        <div className="w-full border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0 p-8">
          <div className="flex items-center mb-6">
            <img src="/icons/roof.svg" className="h-7 w-7" alt="Floor Icon" />
            <div className="ml-4 text-xl">Roofing</div>
          </div>
          <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
            Apply filters and control which products to sell on each sales
            channel. E.g. exclude products with low margins.
          </p>
        </div>
        <div className="w-full border-b md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0 p-8">
          <div className="flex items-center mb-6">
            <img src="/icons/kitchen.svg" className="h-7 w-7" alt="Floor Icon" />
            <div className="ml-4 text-xl">Kitchen Renovation</div>
          </div>
          <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
            Whether you're just looking for a small upgrade, or doing a complete renovation,
            we can help you get there from start to finish.
          </p>
        </div>
        <div className="w-full border-b md:w-1/2 md:border-r md:border-b-0 lg:w-1/3 lg:border-b-0 p-8">
          <div className="flex items-center mb-6">
            <img src="/icons/fence.svg" className="h-7 w-7" alt="Floor Icon" />
            <div className="ml-4 text-xl">Decks & Patios</div>
          </div>
          <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
            Modify products with extra properties and achieve the maximum output
            for each installed sales channel.
          </p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 p-8">
          <div className="flex items-center mb-6">
            <img src="/icons/customize.svg" className="h-7 w-7" alt="Floor Icon" />
            <div className="ml-4 text-xl">Custom Projects</div>
          </div>
          <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
            We're more than just carpenters - we're <strong>creative perfectionists</strong>. 
            Have an idea not mentioned here? We'll use our experience and skill to turn that idea into a reality!
          </p>
        </div>
      </div>
    </div>
  );
}
