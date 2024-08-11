import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Data from '../libs/data';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
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
        //item.Sub-Category = item["Sub-Category"]
        // item[Sub] = item["Sub-Category"];
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

    console.log(dataResult);
    return (
      <ResponsiveContainer width="100%" height="95%">
        <BarChart
          width={500}
          height={300}
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
          <YAxis />
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
