import React from "react";

const Pricing = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex mr-10 md:mr-18 lg:mr-20">
            <img src="images/taka.png" alt="taka" />
          </div>
          <div className="mx-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-5 text-4xl font-semibold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Best deals with proper prices 
            </h1>
            <p className="max-w-2xl mb-2 font-light text-gray-500 lg:mb-3 md:text-lg lg:text-xl dark:text-gray-400">
            We pioneered the concept of discount broking and price transparency in Bangladesh. Flat fees and no hidden charges.
            Just invest freely and make money.
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              See pricing
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
