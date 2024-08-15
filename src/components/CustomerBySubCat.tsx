import React from 'react'
import Data from '../libs/data'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const CustomerBySubCat = () => {
    const subCatData:any = []

    const subCat = Data.map((data) => data['Sub-Category'])
    const uniqueSubCat = [...new Set(subCat)]

    uniqueSubCat.map((subCat) => {
        subCatData.push({name: subCat, Customer: 0})
    })

    Data.map((data) => {
        subCatData[uniqueSubCat.indexOf(data['Sub-Category'])].Customer += 1
    }
    )

  return (
    <div>
      <BarChart
          width={700}
          height={290}
          data={subCatData}
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
      </BarChart>
    </div>
  )
}

export default CustomerBySubCat