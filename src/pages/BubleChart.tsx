import React from 'react'
import DashboardLayout from '../components/Layout'
import BubbleChart from '../components/BubbleChart'
import Data from '../libs/data'

const BubleChart = () => {
  return (
    <div>
        <DashboardLayout>
            <h1 className="text-2xl font-bold m-6 top-0">User Analysis</h1>
            <BubbleChart Data={Data}/>
        </DashboardLayout>
    </div>
  )
}

export default BubleChart