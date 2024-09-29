import React from "react";

const LeftImage = ({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <img className="w-full dark:hidden" src={imageUrl} alt="left-image" />
          <div className="mt-4 md:mt-0">
            <h2 className="mb-2 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              {productName}
            </h2>
            <p className="mb-0 font-light text-gray-500 md:text-lg dark:text-gray-400">
              {productDescription}
            </p>
            <div className="flex justify-center md:justify-center lg:justify-normal">
              <a
                href={tryDemo}
                className="m-2 inline-flex items-center text-black bg-white cursor-pointer hover:bg-zinc-300 focus:ring-2 focus:ring-zinc-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900"
              >
                {tryDemo}
                <svg
                  className="ml-2 -mr-1 w-5 h-5"
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
              <a
                href={learnMore}
                className="inline-flex items-center text-black bg-white cursor-pointer hover:bg-zinc-300 focus:ring-2 focus:ring-zinc-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900"
              >
              {learnMore}
              </a>
            </div>
            <div className="flex m-2 gap-2 cursor-pointer justify-center lg:justify-normal">
              <a href={googlePlay}>
                <img src="images/googlePlayBadge.svg" alt="googlePlay" />
              </a>
              <a href={appStore}>
                <img src="images/appstoreBadge.svg" alt="appStore" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LeftImage;
