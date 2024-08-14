import { useEffect, useState } from 'react'
import DashboardLayout from '../components/Layout'
import { Activity, BadgeDollarSign, DollarSign, ListOrdered, PanelTop, User } from 'lucide-react';
import Data from '../libs/data';
import SalesByYear from '../components/SalesByYear';
import ProductSoldByYear from '../components/ProductSoldByYear';
import ProfitByYear from '../components/ProfitByYear';
import SalesBySubCat from '../components/SalesBySubCat';
import SalesByCat from '../components/SalesByCat';
import SalesBySegment from '../components/SalesBySegment';


const Home = () => {
  const [grandTotal, setGrandTotal] = useState(0)
  const [itemsSold, setItemsSold] = useState(0)
  const [profit, setProfit] = useState(0)
  const [numUsers, setNumUsers] = useState(0)
  const [numOrders, setNumOrders] = useState(0)

  const stats = [
    { id: 1, name: 'Total Sales', stat:Math.trunc(grandTotal), icon: DollarSign },
    { id: 2, name: 'No of Items sold', stat: itemsSold, icon: PanelTop },
    { id: 3, name: 'Overall Profit', stat: Math.trunc(profit), icon: Activity },
    { id: 4, name: 'Number of Users', stat: numUsers, icon: User },
    {id : 5, name: 'Number of Orders', stat: numOrders, icon: ListOrdered},
    {id : 6, name: 'Average spent per order', stat: Math.trunc(grandTotal/numOrders), icon: BadgeDollarSign}
  ]

  useEffect(() => {
    setGrandTotal(0)
    setItemsSold(0)
    setProfit(0)
    setNumUsers(0)

  Data.map((item) => {
    setGrandTotal((prev) => prev + parseInt(Number(item.Sales).toFixed(2)))
    setItemsSold((prev) => prev + Number(item.Quantity))
    setProfit((prev) => prev + Number(item.Profit))
    setNumUsers(793)
    setNumOrders(Data.length)

  })
  }, [])
  return (
    <div>
      <DashboardLayout>
        <div className="p-6 sm:p-10 space-y-6">
          <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
            <div className="mr-6">
              <h1 className="text-4xl font-semibold mb-2">Dashboard</h1>
            </div>
          </div>

          <section>
            <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {stats.map((item) => (
                <div
                  key={item.id}
                  className="overflow-hidden rounded-lg bg-gray-50 px-4 pb-2 pt-2 shadow sm:px-6 sm:pt-6  items-center"
                >
                  <dt>
                    <div className="absolute rounded-md bg-[#8884d8] p-3">
                      <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <p className="ml-16 truncate text-sm font-medium text-gray-500">{item.name}</p>
                  </dt>
                  <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
                    {item.id  == 1 || item.id == 3 || item.id == 6 ? <p className="text-2xl font-semibold text-gray-900">${item.stat}</p>:<p className="text-2xl font-semibold text-gray-900">{item.stat}</p>}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
          <section className=''>
            <div className="lg:flex">
              <div className="lg:shrink-0">
                <div className=" w-full lg:h-full">
                  <h2 className='text-center'>Sales by SubCategory</h2>
                  <SalesBySubCat />
                  <h2 className='text-center'>Sales by Category</h2>
                  <SalesByCat />
                  <h2 className='text-center'>Sales by Segment</h2>
                  <SalesBySegment />
                </div>
              </div>
              <div className="p-8 w-full">
                <h2 className='text-center'>Sales by year</h2>
                <SalesByYear />
                <h2 className='text-center'>Product sold by year</h2>
                <ProductSoldByYear />
                <h2 className='text-center'>Profit by year</h2>
                <ProfitByYear />
              </div>
            </div>
          </section>

        </div>

      </DashboardLayout>
    </div>
  )
}

export default Home