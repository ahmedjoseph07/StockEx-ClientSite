import React from "react";

const OpenAccount = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className=" max-w-screen-xl px-4 py-8 text-center mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="flex flex-col flex-wrap justify-center items-center lg:mx-auto place-self-center lg:col-span-7 ">
              <h1 className="max-w-2xl mb-2 text-3xl font-bold tracking-tight leading-none md:text-4xl xl:text-5xl dark:text-white">
                Open a <span className="text-green-500">StockEx</span> account
              </h1>
              <p className="max-w-2xl mb-2 font-light text-gray-500 lg:mb-3 md:text-lg lg:text-xl dark:text-gray-400">
              Modern platforms and apps, zero investments and F&O trades.
              </p>
              <div>
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                >
                  Sign up for free
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
          </div>
      </section>
    </div>
  );
};

export default OpenAccount;
