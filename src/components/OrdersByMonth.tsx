import React from 'react'
import Data from '../libs/data'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const OrdersByMonth = () => {
    const monthData:any = []
    const month = Data.map((data) => data['Order_Date'].split('-')[1])
    const uniqueMonth = [...new Set(month)]
    uniqueMonth.sort()

    uniqueMonth.map((month) => {
        monthData.push({name: month, Order: 0})
    })

    Data.map((data) => {
        monthData[uniqueMonth.indexOf(data['Order_Date'].split('-')[1])].Order += 1
    }
    )

  return (
    <div>
       <BarChart
          width={700}
          height={290}
          data={monthData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Order" fill="#8884d8" activeBar={<Rectangle fill="#8884d8" stroke="blue" />} />
        </BarChart>

    </div>
  )
}

export default OrdersByMonth