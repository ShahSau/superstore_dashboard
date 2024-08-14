import React from 'react'
import Data from '../libs/data'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const SalesBySegment = () => {
    const segmentData:any = []

    const segment = Data.map((data) => data['Segment'])
    const uniqueSegment = [...new Set(segment)]

    uniqueSegment.map((segment) => {
        segmentData.push({name: segment, Sales: 0})
    })

    Data.map((data) => {
        segmentData[uniqueSegment.indexOf(data['Segment'])].Sales += Number(data['Sales'])
    })
  return (
    <div>
        <BarChart
           width={500}
           height={290}
          data={segmentData}
         //layout="vertical"
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
          <Bar dataKey="Sales" fill="#8884d8" activeBar={<Rectangle fill="#8884d8" stroke="blue" />} />
        </BarChart>
    </div>
  )
}

export default SalesBySegment