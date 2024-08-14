
import { useState } from 'react';
import BubbleChart from '../components/BubbleChart'
import DashboardLayout from '../components/Layout'
import Timeline from '../components/Timeline';
import Data from "../libs/data";
import returnData from '../libs/returnData';

const Graphs = () => {
  const [selection, setSelection] = useState("year")
  const returnItemIds = [...new Set(returnData.map((data: any) => data.Order_ID))]
  Data.map((data: any) => {
    {/* same month */}
    if(data.Order_Date.split("-")[1] === data.Ship_Date.split("-")[1]){
      data["DaysToShip"] = Math.abs(Number(data.Ship_Date.split("-")[0]) - Number(data.Order_Date.split("-")[0]))
    }
    else{
      {/* different month */}
      data["DaysToShip"] = Math.abs((30 - Number(data.Order_Date.split("-")[0])) + Number(data.Ship_Date.split("-")[0]))
    }
    returnItemIds.includes(data.Order_ID)? data["Returned"] = "Yes" : data["Returned"] = "No"

    data["ProfitRatio"] = parseFloat((data.Profit/data.Sales).toFixed(3))
  }
  )

  return (
    <div>
      <DashboardLayout>
        <h1 className="text-2xl font-bold mb-4 ml-2">Graphs</h1>
        <div className="grid h-screen grid-cols-2">
          {/* left side */}
          <div className="col-span-1 bg-gray-100">
            <div className='flex items-center justify-center'>
              Select Granularity:
              <select
                id="selection"
                name="selection"
                className="text-lg block cursor-pointer bg-[#8884d8] rounded-md border-l border-gray-200 py-2 pl-4 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 sm:text-sm sm:leading-6"
                defaultValue={selection}
                onChange={(e) => {setSelection(e.target.value)}}
              >
                <option>year</option>
                <option>quarter</option>
                <option>month</option>
                <option>week</option>
              </select>
            </div>
            <Timeline Data={Data} selection={selection}/>
          </div>
            
          {/* right side */}
          {/* <div className="col-span-1 mt-2">
            <h1 className="text-2xl font-bold">Bubble chart</h1>
            <BubbleChart Data={Data}/>
          </div> */}
        </div>
        
      </DashboardLayout>
    </div>
  )
}

export default Graphs