import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Data from '../libs/data';

interface DataResultItem {
  name: string;
  [key: string]: number | string;
}

const dataResult: DataResultItem[] = [
  {
    name: "Furniture",
  },
  {
    name: "Office Supplies",
  },
  {
    name: "Technology",
  },
];
const BarChartData = () => {
    Data.map((item) => {
        if(item.Category === "Furniture"){
            const Sub = item["Sub-Category"];
            dataResult[0][Sub] = Number(item.Sales);
        }
        if(item.Category === "Office Supplies"){
            const Sub = item["Sub-Category"]
            dataResult[1][Sub] = Number(item.Sales);
        }
        if(item.Category === "Technology"){
            const Sub = item["Sub-Category"]
            dataResult[2][Sub] = Number(item.Sales);
        }
    });

    return (
      <ResponsiveContainer width="100%" height="91%">
        <BarChart
          width={500}
          height={100}
          data={dataResult}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis type="number"  unit="$"/>
          <Tooltip />
          <Legend />
          <Bar dataKey="Bookcases" stackId="a" fill="#8884d8" />
          <Bar dataKey="Chairs" stackId="a" fill="#82ca9d" />
          <Bar dataKey="Tables" stackId="a" fill="#ffc658" />
          <Bar dataKey="Furnishings" stackId="a" fill="#ff7300" />
          <Bar dataKey="Art" stackId="a" fill="#ff0000" />
          <Bar dataKey="Appliances" stackId="a" fill="#88ff00" />
          <Bar dataKey="Binders" stackId="a" fill="#0000ff" />
          <Bar dataKey="Envelopes" stackId="a" fill="#ff00ff" />
          <Bar dataKey="Fasteners" stackId="a" fill="#00ffff" />
          <Bar dataKey="Labels" stackId="a" fill="#56A5EC" />
          <Bar dataKey="Paper" stackId="a" fill="#01F9C6" />
          <Bar dataKey="Storage" stackId="a" fill="#8A9A5B" />
          <Bar dataKey="Supplies" stackId="a" fill="#9D00FF" />
          <Bar dataKey="Phones" stackId="a" fill="#36013F" />
          <Bar dataKey="Accessories" stackId="a" fill="#FC6C85" />
          <Bar dataKey="Copiers" stackId="a" fill="#5C3317" />
          <Bar dataKey="Machines" stackId="a" fill="#A0D6B4" />
        </BarChart>
      </ResponsiveContainer>
    );
  }


export default BarChartData;
