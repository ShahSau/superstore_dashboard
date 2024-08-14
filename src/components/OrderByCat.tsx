import React from 'react'
import Data from '../libs/data'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const OrderByCat = () => {
    const catData:any = []
    const cat = Data.map((data) => data.Category)
    const uniqueCat = [...new Set(cat)]
    uniqueCat.map((ct) => {
        catData.push({name: ct, Order: 0})
    })

    Data.map((data) => {
        catData[uniqueCat.indexOf(data.Category)].Order += 1
    })

  return (
    <div>
        <BarChart
          width={700}
          height={290}
          data={catData}
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

export default OrderByCat