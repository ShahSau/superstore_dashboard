import React from 'react'
import Data from '../libs/data'
import { PieChart, Pie, Cell, Legend } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const CustomerByRegion = () => {
    const regionData:any = []

    const region = Data.map((data) => data.Region)
    const uniqueRegion = [...new Set(region)]

    uniqueRegion.map((region) => {
        regionData.push({name: region, Customer: 0})
    })
    Data.map((data) => {
        regionData[uniqueRegion.indexOf(data.Region)].Customer += 1
    }
    )

  return (
    <div>
        <PieChart width={400} height={400}>
          <Pie
            data={regionData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="Customer"

          >
            {regionData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend verticalAlign="top" height={12}/>
        </PieChart>
    </div>
  )
}

export default CustomerByRegion