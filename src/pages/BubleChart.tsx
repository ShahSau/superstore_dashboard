import React from 'react'
import DashboardLayout from '../components/Layout'
import BubbleChart from '../components/BubbleChart'
import Data from '../libs/data'

const BubleChart = () => {
  return (
    <div>
        <DashboardLayout>
            <h1 className="text-4xl font-semibold mb-2 m-6">Bubble Chart</h1>
            <BubbleChart Data={Data}/>
        </DashboardLayout>
    </div>
  )
}

export default BubleChart