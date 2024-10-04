import React from "react";

const PriceList = () => {
  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
            Charges for account opening
          </caption>
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Type of account
              </th>
              <th scope="col" className="px-6 py-3">
                Charges
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Online account
              </th>
              <td className="px-6 py-4">
                <span className="bg-green-400 text-green-800 text-xs font-bold me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                  Free
                </span>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Offline account
              </th>
              <td className="px-6 py-4">
                <span className="bg-green-400 text-green-800 text-xs font-bold me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                  Free
                </span>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                International account (offline only)
              </th>
              <td className="px-6 py-4">500 TK</td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Corporate accounts (offline only)
              </th>
              <td className="px-6 py-4">500 TK</td>
            </tr>
          </tbody>
        </table>
      </div>

      <br />

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
            Charges for optional value added services
          </caption>
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Service
              </th>
              <th scope="col" className="px-6 py-3">
                Billing Frquency
              </th>
              <th scope="col" className="px-6 py-3">
                Charges
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Tickertape
              </th>
              <td className="px-6 py-4">Monthly / Annual</td>
              <td className="px-6 py-4">Free: 0 | Pro: 249/2399</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Smallcase
              </th>
              <td className="px-6 py-4">Per transaction</td>
              <td className="px-6 py-4">Buy & Invest More: 100 | SIP: 10</td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Kite Connect
              </th>
              <td className="px-6 py-4">Monthly</td>
              <td className="px-6 py-4">Connect: 2000 | Historical: 2000</td>
            </tr>
          </tbody>
        </table>
      </div>
      <br /><hr />
    </div> 
  );
};

export default PriceList;
