import  {useEffect, useState} from 'react'
import {
    PieChart,
    Pie,
    Legend,
    Cell,
  } from "recharts";

  
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: { cx: number, cy: number, midAngle: number, innerRadius: number, outerRadius: number, percent: number }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};


const PieChartGraph = ({
    data
}: { data: any }) => {
    const [initialData, setInitialData] = useState([
        { name: "South", value: 0 },
        { name: "Central", value: 0 },
        { name: "East", value: 0 },
        { name: "West", value: 0}
    ])
    useEffect(() => {
        setInitialData([
            { name: "South", value: (data as { south: number }).south },
            { name: "Central", value: (data as { central: number }).central },
            { name: "East", value: (data as { east: number }).east },
            { name: "West", value: (data as { west: number }).west }
        ])
    }, [data])
  return (
    <div>
        <PieChart width={200} height={400}>
        <Pie
            data={initialData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
        >
            {initialData.map((_item, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
        </Pie>
          <Legend verticalAlign="top" height={36}/>
        </PieChart>
    </div>
  )
}

export default PieChartGraph