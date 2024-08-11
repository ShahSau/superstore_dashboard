
import { useState } from 'react'
import Card from '../components/Card'
import DashboardLayout from '../components/Layout'
import PieChartGraph from '../components/PieChart'
import Recharts from '../components/Recharts'


const LineChart = () => {
  const [data, setData] = useState<{
    south: number,
    north: number,
    east: number,
    west: number
  }>({
    south: 0,
    north: 0,
    east: 0,
    west: 0
  })

  const [graphData, setGraphData] = useState<{
    south: number,
    north: number,
    east: number,
    west: number
  }>({
    south: 0,
    north: 0,
    east: 0,
    west: 0
  })

  {/*two way data bindings */}
  const handleDataFromChild = (data: {
    south: number,
    north: number,
    east: number,
    west: number
  
  }) => {
    setData(data)
  }
  
  const handleDataGraphFromChild = (data: {
    south: number,
    north: number,
    east: number,
    west: number
  }) => {
    setGraphData(data)
  }
  
  console.log(data,"DDDDD")
  return (
    <div>
      <DashboardLayout>
        <div className="grid grid-cols-12 gap-2 ml-4 h-full">
          {/* left side*/}
          <div className=' col-span-9 h-full mt-2'>
            <Recharts 
            sendDataToParent={(data: object) => handleDataFromChild(data as { south: number, north: number, east: number, west: number })} 
            sendDataToParentFromChild={(data: object) => handleDataGraphFromChild(data as { south: number, north: number, east: number, west: number })}
            />
          </div>
          
          {/* Right side*/}
          <div className=' col-span-3 mt-12 '>
            <div className='w-full mt-50 items-center'>
              <h2 className='text-2xl ml-8 mb-4 text-center'>Sold Product Ratio</h2>
              <div className='flex justify-center items-center'>
                <PieChartGraph data={graphData}/>
              </div>
            </div>
            <div className='w-full mt-20 '>
              <h2 className='text-2xl ml-8 mb-4 text-center'>Accumulated sales Ratio</h2>
              <div className='flex justify-center items-center'>
                <PieChartGraph data={data}/>
              </div>
            </div>
           
          </div>
        </div>
      </DashboardLayout>
    </div>
  )
}

export default LineChart