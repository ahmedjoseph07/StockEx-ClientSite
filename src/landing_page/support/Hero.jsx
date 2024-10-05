import React from "react";

const Hero = () => {
  return (
    <div>
      <section className="mx-auto text-center">
        <div>
          <h1 className="font-bold text-4xl my-2 py-1">Support Portal</h1>
          <p className="my-6"><a className="hover:underline hover:text-black bg-green-600 rounded-lg p-2 font-bold" href="">Track Tickets</a></p>
        </div>
        <div className="mx-4 p-1">
          <form className="max-w-md mx-auto">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search your queries"
                required
              />
              <button
                type="submit"
                className="text-white absolute end-2.5 bottom-2.5 bg-green-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form>
        </div>
        <div className="flex flex-col mx-2 my-1 p-1 gap-y-1 font-light text-black">
          <h1 className="font-bold">Additional Links</h1>
          <a className="hover:underline hover:text-green-600" href="">Track account opening</a>
          <a className="hover:underline hover:text-green-600" href="">Track segment activation</a>
          <a className="hover:underline hover:text-green-600" href="">Intraday margins</a>
          <a className="hover:underline hover:text-green-600" href="">Kite user manual</a>
        </div>
      </section>
    </div>
  );
};

export default Hero;
