import React from 'react'
import Data from '../libs/data'
import {
    CartesianGrid,
    Tooltip,
    XAxis,
    YAxis,
    AreaChart,
    Area,
  } from 'recharts';

const SalesByYear = () => {
    const yearSales:any = []
    const year = Data.map((data) => data['Order_Date'].split('-')[2])
    const uniqueYear = [...new Set(year)]
    uniqueYear.sort()

    uniqueYear.map((year) => {
        yearSales.push({name: year, Sales: 0})
    })

    Data.map((data) => {
        yearSales[uniqueYear.indexOf(data['Order_Date'].split('-')[2])].Sales += parseFloat(data['Sales'])
    })

    yearSales.map((data: { Sales: number; _name:string })=>{
        data.Sales = Math.round(data.Sales)
    })

  return (
    <div className='flex justify-center items-center'>
        <AreaChart width={750} height={300} data={yearSales}
        margin={{ top: 10, right: 30, left: 18, bottom: 0 }}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
          <YAxis type='number'/>
          <CartesianGrid strokeDasharray="3 3" vertical={false} horizontal={false}/>
          <Tooltip />
          <Area type="monotone" dataKey="Sales"  stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" dot={{fill:"#2e4355",stroke:"#8884d8",strokeWidth: 2,r:2}} activeDot={{fill:"#2e4355",stroke:"#8884d8",strokeWidth: 5,r:10}}/>
        </AreaChart>
    </div>
  )
}

export default SalesByYear