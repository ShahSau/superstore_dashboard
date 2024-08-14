import React from 'react'
import DashboardLayout from '../components/Layout'
import Analysics from '../components/Analysis'

const UserAnalysis = () => {
  return (
    <div>
        <DashboardLayout>
          <h1 className="text-4xl font-semibold mb-2 m-6">User Analysis</h1>
          <Analysics />
        </DashboardLayout>
    </div>
  )
}

export default UserAnalysis