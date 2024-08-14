import React from 'react'
import DashboardLayout from '../components/Layout'
import Analysics from '../components/Analysis'

const UserAnalysis = () => {
  return (
    <div>
        <DashboardLayout>
          <h1 className="text-2xl font-bold m-6  top-0">User Analysis</h1>
          <Analysics />
        </DashboardLayout>
    </div>
  )
}

export default UserAnalysis