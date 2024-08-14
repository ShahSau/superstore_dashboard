import React from 'react'
import DashboardLayout from '../components/Layout'
import OrderByRegion from '../components/OrderByRegion'
import OrderByState from '../components/OrderByState'
import OrderByCat from '../components/OrderByCat'
import OrdersByMonth from '../components/OrdersByMonth'
import TopProductTable from '../components/TopProductTable'
import OrderYearLine from '../components/OrderYearLine'


const OrderAnalysis = () => {

  return (
    <div>
        <DashboardLayout>
          <h1 className="text-4xl font-semibold mb-2 m-6">Order Analysis</h1>
          <div className="flex">
            <div className="flex w-full">
                <div className=" h-screen flex-grow overflow-x-hidden overflow-auto flex flex-wrap content-start p-2">
                    <div className="w-full p-2 lg:w-1/3">
                        <div className="rounded-lg sm:h-80 h-60">
                          <h2 className="text-black font-bold">Orders by region</h2>
                          <OrderByRegion />
                        </div>
                    </div>
                    <div className="w-full p-2 lg:w-2/3">
                        <div className="rounded-lg h-80">
                          <h2 className="text-black font-bold text-center">Order by State</h2>
                          <OrderByState />
                        </div>
                    </div>

                    <div className="w-full p-2 lg:w-1/2">
                        <div className="rounded-lg h-80 mt-6">
                          <h2 className="text-black font-bold text-center"> Order by category</h2>
                          <OrderByCat />
                        </div>
                    </div>
                    <div className="w-full p-2 lg:w-1/2">
                        <div className="rounded-lg h-80">
                        <h2 className="text-black font-bold">Orders by month</h2>
                        <OrdersByMonth />
                        </div>
                    </div>

                    <div className="w-full p-2">
                        <div className="rounded-lg sm:h-80 h-60">
                        <h2 className="text-black font-bold text-center">Most ordered Items</h2>
                        <TopProductTable />
                        </div>
                    </div>

                    <div className="w-full p-2">
                        <div className="rounded-lg h-80">
                        <h2 className="text-black font-bold text-center">Total Order by year</h2>
                        <OrderYearLine />
                        </div>
                    </div>
          
                </div>
            </div>
          </div>
        </DashboardLayout>
    </div>
  )
}

export default OrderAnalysis