import React from "react";

const Stats = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"> 
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-5 text-4xl font-semibold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Believe in us{" "}
            </h1>
            <section>
              <h2 className="max-w-2xl mb-1 text-2xl font-normal tracking-tight leading-none md:text-3xl xl:text-4xl dark:text-white">
                Customer-first always
              </h2>
              <p className="max-w-2xl font-light mb-3 text-gray-500 lg:mb-5 md:text-lg lg:text-xl dark:text-gray-400">
                {" "}
                That's why 1.5+ million customers trust StockEx with ৳5+ lakh
                crores of equity investments and contribute to 15% of daily
                retail exchange volumes in Bangladesh.
              </p>
            </section>
            <section>
              <h2 className="max-w-2xl mb-1 text-2xl font-normal tracking-tight leading-none md:text-3xl xl:text-4xl dark:text-white">
                The StockEx universe
              </h2>
              <p className="max-w-2xl font-light mb-3 text-gray-500 lg:mb-5 md:text-lg lg:text-xl dark:text-gray-400">
                Not just an app, but a whole ecosystem. Our investments in 30+
                fintech startups offer you tailored services specific to your
                needs.
              </p>
            </section>
            <section>
              <h2 className="max-w-2xl mb-1 text-2xl font-normal tracking-tight leading-none md:text-3xl xl:text-4xl dark:text-white">
                No spam or gimmicks
              </h2>
              <p className="max-w-2xl font-light mb-3 text-gray-500 lg:mb-5 md:text-lg lg:text-xl dark:text-gray-400">
                No gimmicks, spam, "gamification", or annoying push
                notifications. High quality apps that you use at your pace, the
                way you like.
              </p>
            </section>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="images/ecosystem.png" alt="ecosystem" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stats;
