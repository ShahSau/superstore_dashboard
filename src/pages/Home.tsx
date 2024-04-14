
import { useState } from 'react'
import Card from '../components/Card'
import DashboardLayout from '../components/Layout'
import PieChartGraph from '../components/PieChart'
import Recharts from '../components/Recharts'


const Home = () => {
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

  const handleDataFromChild = (data: {
    south: number,
    north: number,
    east: number,
    west: number
  
  }) => {
    setData(data)
  }
  
  return (
    <div>
      <DashboardLayout>
        <div className="grid grid-cols-12 gap-2 ml-4 h-full">
          <div className=' col-span-9 h-full mt-2'>
            <Recharts sendDataToParent={(data: any) => handleDataFromChild(data as { south: number, north: number, east: number, west: number })} />
          </div>
          <div className=' col-span-3 mt-6 '>
            <Card />
            <div className='w-full bg-gray-100 mt-60 '>
              <h2 className='text-2xl ml-8 mb-12'>Accumulated sales by region</h2>
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

export default Home