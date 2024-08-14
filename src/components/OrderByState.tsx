import React from 'react'
import Data from '../libs/data'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const OrderByState = () => {
    const stateData:any = []
    const state = Data.map((data) => data.State)
    const uniqueState = [...new Set(state)]
    uniqueState.map((st) => {
        stateData.push({name: st, Order: 0})
    })

    Data.map((data) => {
        stateData[uniqueState.indexOf(data.State)].Order += 1
    })

  return (
    <div>
        <BarChart
          width={700}
          height={290}
          data={stateData}
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

export default OrderByState