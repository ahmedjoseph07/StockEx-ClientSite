import React from "react";

const Brokerage = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
    <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Disclaimer</h2>
            <p className="mb-4">For Delivery based trades, a minimum of 0.01 taka will be charged per contract note. Clients who opt to receive physical contract notes will be charged 20 taka per contract note plus courier charges. Brokerage will not exceed the rates specified by WB and the exchanges. <br /><br /> All statutory and regulatory charges will be levied at actuals. Brokerage is also charged on expired, exercised, and assigned options contracts. Free investments are available only for our retail individual clients. Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or 20 taka (whichever is less) as delivery brokerage. A brokerage of 0.25% of the contract value will be charged for contracts where physical delivery happens. For netted off positions in physically settled contracts, a brokerage of 0.1% will be charged.</p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
            <img className="w-full rounded-lg" src="/images/pricing0.svg" alt="office content 1"/>
            <img className="mt-4 w-full lg:mt-10 rounded-lg" src="/images/intradayTrades.svg" alt="office content 2"/>
        </div>
    </div>
</section>
    </div>
        
  );
};

export default Brokerage;
