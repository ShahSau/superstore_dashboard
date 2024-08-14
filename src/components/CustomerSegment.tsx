import React from 'react'
import Data from '../libs/data'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const CustomerSegment = () => {
  const segData:any = []
  const segment = Data.map((data) => data['Segment'])
  const uniqueSegment = [...new Set(segment)]
  uniqueSegment.map((seg) => {
        segData.push({name: seg, Customer: 0})
  })

  Data.map((data) => {
    segData[uniqueSegment.indexOf(data['Segment'])].Customer += 1
  })
  return (
    <div className='m-2'>
        <BarChart
          width={700}
          height={290}
          data={segData}
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
          <Bar dataKey="Customer" fill="#8884d8" activeBar={<Rectangle fill="#8884d8" stroke="blue" />} />
          {/* <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} /> */}
        </BarChart>
    </div>
  )
}

export default CustomerSegment