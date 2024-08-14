import React from 'react'
import Data from '../libs/data'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
const SalesBySubCat = () => {
    const subCatData:any = []

    const subCat = Data.map((data) => data['Sub-Category'])
    const uniqueSubCat = [...new Set(subCat)]

    uniqueSubCat.map((subCat) => {
        subCatData.push({name: subCat, Sales: 0})
    })

    Data.map((data) => {
        subCatData[uniqueSubCat.indexOf(data['Sub-Category'])].Sales += Number(data['Sales'])
    })

    subCatData.sort((a: { Sales: number,_name:string }, b: { Sales: number,_name:string }) => b.Sales - a.Sales)

    subCatData.map((data: { Sales: number, _name:string }) => {
        data.Sales = Math.round(data.Sales)
    })
    const top10Data = subCatData.slice(0,10)
  return (
    <div>
        <BarChart
           width={500}
           height={290}
          data={top10Data}
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

export default SalesBySubCat