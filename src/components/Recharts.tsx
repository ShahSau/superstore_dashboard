import   {useEffect, useState} from 'react'
import {
    CartesianGrid,
    Tooltip,
    XAxis,
    YAxis,
    AreaChart,
    Area,
  } from "recharts";
import Data from '../libs/data'
import { Activity, DollarSign, PanelTop } from 'lucide-react';
import initialGraphData from '../libs/graphData'

 
const Recharts = ({
  sendDataToParent,
  sendDataToParentFromChild
}: {
  sendDataToParent: (data: any) => void
  sendDataToParentFromChild: (data: any) => void
}) => {
  const [year, setYear] = useState('2017')
  const [graphData] = useState(initialGraphData)

  // get the year values from the data amd sort them
  const yearVal: string[]= []
  Data.map((item) => {
    if (!yearVal.includes(item.Order_Date.split("-")[2])) {
      yearVal.push(item.Order_Date.split("-")[2])
    }
  })
  yearVal.sort((a, b) => Number(a) - Number(b))


  // fitler the data based on the year and calculate the stats
  useEffect(() => {
    Data.map((item) => {
      if (item.Order_Date.split("-")[2] == year) { 
        const month = item.Order_Date.split("-")[1]; 
        graphData[Number(month) - 1].Total = graphData[Number(month) - 1].Total + parseInt(Number(item.Sales).toFixed(2));
        graphData[Number(month) - 1].Profit = graphData[Number(month) - 1].Profit + Number(item.Profit);
        graphData[Number(month) - 1].itemsSold = graphData[Number(month) - 1].itemsSold + Number(item.Quantity);

        {/*pie chart data */}
        graphData[Number(month) - 1].region?.map((region) => { 
          if (region && region.name == item.Region) { 
            region.value = region.value + Number(item.Sales);
          }
        });

        {/*profit pie chart data */}
        graphData[Number(month) - 1].profit_region?.map((region) => {
          if (region && region.name == item.Region) {
            region.value = region.value + Number(item.Quantity);
          }
        });
      }
    });

    {/* calculate the profit ratio as we dont have profit ratio field present in the data*/}
    graphData.map((item): void => {
      item.Profit_ratio = parseFloat((item.Profit/item.Total).toFixed(3));
    });


    {/*Region data for the whole year */}
    const regionData:{
      south?: number,
      central?: number,
      east?: number,
      west?: number
    
    } ={ 
      south: 0,
      central: 0,
      east: 0,
      west: 0
     }

    const regionDataProfit:{
      south?: number,
      central?: number,
      east?: number,
      west?: number
    
    } ={ 
      south: 0,
      central: 0,
      east: 0,
      west: 0
     }
    
    graphData.map((item) => {
      item.region?.map((region) => {
        regionData[region.name.toLowerCase()] = region.value
      })
    })

    graphData.map((item) => {
      item.profit_region?.map((region) => {
        regionDataProfit[region.name.toLowerCase()] = region.value
      })
    })
    sendDataToParent(regionData)
    sendDataToParentFromChild(regionDataProfit)
   
  }
  ,[year])

  // title for the graph and the data key 
  const title =[['Profit Ratio', 'Profit_ratio'] ,['Accumulated Sales', 'Total'] ]
  
  return (
  <div className='overflow-hidden'>
    <div className="flow-root mb-4">
        <div className="float-left ml-6">
             <h1 className="text-4xl font-semibold mb-2 m-6">Line & Pie Chart</h1>
        </div>
        
        <div className="float-right mr-6">
          <select
            id="location"
            name="location"
            className="text-lg block cursor-pointer bg-[#8884d8] rounded-md border-l border-gray-200 py-2 pl-4 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 sm:text-sm sm:leading-6"
            defaultValue="2017"
            onChange={(e) => setYear(e.target.value)}
          >
            {yearVal.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

    </div>


  {
    title.map((item) => (
      <>
        <div className="flex items-center justify-center mt-4">
          <h2 className='text-2xl '>{item[0]}</h2>
        </div>
        <div className="flex items-center justify-center bg-gray-50">
          <AreaChart width={1000} height={350} data={graphData}
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
          <XAxis dataKey="Data" />
          <YAxis type="number"  unit={item[1] != 'Total' ? "%" : "$"}/>
          <CartesianGrid strokeDasharray="3 3" vertical={false} horizontal={false}/>
          <Tooltip />
          <Area type="monotone" dataKey={item[1]} stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" dot={{fill:"#2e4355",stroke:"#8884d8",strokeWidth: 2,r:2}} activeDot={{fill:"#2e4355",stroke:"#8884d8",strokeWidth: 5,r:10}}/>
          </AreaChart>
        </div>
    </>
    ))
  }

</div>
)}

export default Recharts
