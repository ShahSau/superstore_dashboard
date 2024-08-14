import React from 'react'
import Data from '../libs/data'
import { PieChart, Pie, Cell, Legend } from 'recharts';

const COLORS = ['#5C3317', '#FC6C85', '#8A9A5B'];

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

const CustomerByCat = () => {
    const catData:any = []

    const cat = Data.map((data) => data['Category'])
    const uniqueCat = [...new Set(cat)]

    uniqueCat.map((cat) => {
        catData.push({name: cat, Customer: 0})
    })

    Data.map((data) => {
        catData[uniqueCat.indexOf(data['Category'])].Customer += 1
    }
    )

  return (
    <div>
        <PieChart width={400} height={400}>
          <Pie
            data={catData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="Customer"

          >
            {catData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend verticalAlign="top" height={12}/>
        </PieChart>
    </div>
  )
}

export default CustomerByCat