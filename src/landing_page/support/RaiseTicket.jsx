import React from "react";

const RaiseTicket = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="max-w-screen-md mb-8 lg:mb-16">
            <h2 className="mb-2 text-4xl tracking-tight font-semibold text-gray-900 dark:text-white">
              To create a ticket, select a relevant topic
            </h2>
          </div>
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <i className="fa-solid fa-plus"></i>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
              Account Opening
              </h3>
              <div className="flex flex-col mx-2 my-1 p-1 gap-y-1 font-light text-black">
              <a className="hover:underline hover:text-green-600" href="">Getting started</a>
              <a className="hover:underline hover:text-green-600" href="">Online</a>
              <a className="hover:underline hover:text-green-600" href="">Offline</a>
              <a className="hover:underline hover:text-green-600" href="">Charges</a>
              <a className="hover:underline hover:text-green-600" href="">Company, Partnership and HUF</a>
              </div>
            </div>

            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <i className="fa-solid fa-user"></i>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">Your StockEx Account</h3>
              <div className="flex flex-col mx-2 my-1 p-1 gap-y-1 font-light text-black">
              <a className="hover:underline hover:text-green-600" href="">Login credentials</a>
              <a className="hover:underline hover:text-green-600" href="">Your Profile</a>
              <a className="hover:underline hover:text-green-600" href="">Account modification and segment addition</a>
              <a className="hover:underline hover:text-green-600" href="">CMR & DP ID</a>
              <a className="hover:underline hover:text-green-600" href="">Transfer and conversion of shares</a>
              </div>
            </div>
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <i className="fa-duotone fa-solid fa-bars"></i>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
              Trading and Markets
              </h3>
              <div className="flex flex-col mx-2 my-1 p-1 gap-y-1 font-light text-black">
              <a className="hover:underline hover:text-green-600" href="">Trading FAQs</a>
              <a className="hover:underline hover:text-green-600" href="">Kite</a>
              <a className="hover:underline hover:text-green-600" href="">Margins</a>
              <a className="hover:underline hover:text-green-600" href="">Product and order types</a>
              <a className="hover:underline hover:text-green-600" href="">Corporate actions</a> 
              <a className="hover:underline hover:text-green-600" href="">Kite Features</a> 
              </div>
            </div>
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <i className="fa-solid fa-briefcase"></i>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
              Funds
              </h3>
              <div className="flex flex-col mx-2 my-1 p-1 gap-y-1 font-light text-black">
              <a className="hover:underline hover:text-green-600" href="">Fund withdrawal</a>
              <a className="hover:underline hover:text-green-600" href="">Adding funds</a>
              <a className="hover:underline hover:text-green-600" href="">Adding bank accounts</a>
              <a className="hover:underline hover:text-green-600" href="">eMandates</a>
              </div>
            </div>
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <i className="fa-regular fa-circle"></i>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                Enterprise Design
              </h3>
              <div className="flex flex-col mx-2 my-1 p-1 gap-y-1 font-light text-black">
              <a className="hover:underline hover:text-green-600" href="">IPO</a>
              <a className="hover:underline hover:text-green-600" href="">Portfolio</a>
              <a className="hover:underline hover:text-green-600" href="">Funds statement</a>
              <a className="hover:underline hover:text-green-600" href="">Profile</a>
              <a className="hover:underline hover:text-green-600" href="">Reports</a>
              <a className="hover:underline hover:text-green-600" href="">Referral program</a>
              </div>
            </div>
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <i className="fa-solid fa-circle"></i>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                Coin
              </h3>
              <div className="flex flex-col mx-2 my-1 p-1 gap-y-1 font-light text-black">
              <a className="hover:underline hover:text-green-600" href="">Understanding mutual funds and Coin</a>
              <a className="hover:underline hover:text-green-600" href="">Coin app</a>
              <a className="hover:underline hover:text-green-600" href="">Coin web</a>
              <a className="hover:underline hover:text-green-600" href="">Transactions and reports</a>
              <a className="hover:underline hover:text-green-600" href="">National Pension Scheme (NPS)</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RaiseTicket;
