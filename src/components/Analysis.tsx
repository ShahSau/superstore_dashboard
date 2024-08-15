import React from "react";

import CustomerByRegion from "./CustomerByRegion";
import CustomerBySubCat from "./CustomerBySubCat";
import CustomerByCat from "./CustomerByCat";
import CustomerSegment from "./CustomerSegment";
import TopCustomerSalesTable from "./TopCustomerSalesTable";
import TopCustomerProfitTable from "./TopCustomerProfitTable";
import CustomerYearLine from "./CustomerYearLine";


const Analysics = () => {
  return (
    <div className="flex">
      <div className="flex w-full">
        <div className=" h-screen flex-grow overflow-x-hidden overflow-auto flex flex-wrap content-start p-2">
          <div className="w-full p-2 xl:w-1/3">
            <div className="rounded-lg sm:h-80 h-60">
              <h2 className="text-black font-bold">Customer by region</h2>
              <CustomerByRegion />
            </div>
          </div>
          <div className="w-full p-2 xl:w-2/3">
            <div className="rounded-lg h-80">
            <h2 className="text-black font-bold text-center">Customer by Segemnt</h2>
              <CustomerSegment />
            </div>
          </div>

          <div className="w-full p-2 xl:w-1/2">
            <div className="rounded-lg h-80 mt-6">
            <h2 className="text-black font-bold text-center">Top 5 Customers by Sales</h2>
              <TopCustomerSalesTable />
            </div>
          </div>
          <div className="w-full p-2 xl:w-1/2 mt-16 md:mt-0">
            <div className="rounded-lg h-80">
            <h2 className="text-black font-bold">Customer by Sub Category</h2>
              <CustomerBySubCat />
            </div>
          </div>

          <div className="w-full p-2 xl:w-1/3 mt-32">
            <div className="rounded-lg sm:h-80 h-60">
              <h2 className="text-black font-bold">Customer by Category</h2>
              <CustomerByCat />
            </div>
          </div>
          <div className="w-full p-2 xl:w-2/3 mt-32">
            <div className="rounded-lg h-80">
            <h2 className="text-black font-bold text-center">Top 5 Customers by Profit</h2>
              <TopCustomerProfitTable />
            </div>
          </div>

          <div className="w-full p-2">
            <div className="rounded-lg h-80">
            <h2 className="text-black font-bold text-center">Total Customer by year</h2>
              <CustomerYearLine />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Analysics;