import React from 'react'
import DashboardLayout from '../components/Layout'
import BarChartData from '../components/BarChart'

const BarChart = () => {
  return (
    <div>
        <DashboardLayout>
            <div className="grid grid-cols-12 gap-2 ml-4 h-full">
                <div className=' col-span-12 h-full mt-4 overflow-hidden'>
                  <h2 className="text-2xl font-semibold">Bar Chart</h2>
                  <h2 className='text-2xl text-center'>Accumulated Sales</h2>
                  <BarChartData />
                </div>
            </div>
        </DashboardLayout>
    </div>
  )
}

export default BarChart