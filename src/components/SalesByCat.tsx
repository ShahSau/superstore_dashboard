import React from 'react'
import Data from '../libs/data'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const SalesByCat = () => {
    const catData:any = []

    const cat = Data.map((data) => data['Category'])
    const uniqueCat = [...new Set(cat)]

    uniqueCat.map((cat) => {
        catData.push({name: cat, Sales: 0})
    })

    Data.map((data) => {
        catData[uniqueCat.indexOf(data['Category'])].Sales += Number(data['Sales'])
    })


  return (
    <div>
         <BarChart
           width={500}
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
          <Bar dataKey="Sales" fill="#8884d8" activeBar={<Rectangle fill="#8884d8" stroke="blue" />} />
        </BarChart>
    </div>
  )
}

export default SalesByCat