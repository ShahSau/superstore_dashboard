
import { useState } from 'react'
import Card from '../components/Card'
import DashboardLayout from '../components/Layout'
import PieChartGraph from '../components/PieChart'
import Recharts from '../components/Recharts'


const Home = () => {
  
  //most sold items
  // customer who paid the most top 5
  
 
  return (
    <div>
      <DashboardLayout>
        <div className="grid grid-cols-12 gap-2 ml-4 h-full">
            Dashboard
        </div>
      </DashboardLayout>
    </div>
  )
}

export default Home