import React from 'react'
import Data from '../libs/data'
import { PieChart, Pie, Cell, Legend } from 'recharts';

const COLORS = [
  '#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF0000','#FF8042"',
  '#36013F', '#9D00FF', '#8884D8', '#88FF00', '#0000FF','#82CA9D',
  '#5C3317', '#FC6C85', '#8A9A5B', '#FF00FF', '#56A5EC','#01F9C6',
];

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
        <PieChart width={400} height={400}>
          <Pie
            data={subCatData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="Customer"

          >
            {subCatData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend verticalAlign="top" height={12}/>
        </PieChart>
    </div>
  )
}

export default CustomerBySubCat