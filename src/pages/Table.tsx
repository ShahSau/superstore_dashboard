
import DataTable from '../components/DataTable'
import DashboardLayout from '../components/Layout'

const Table = () => {
  return (
    <div>
      <DashboardLayout>
        <h1 className="text-4xl font-semibold mb-2 m-6">Order Details</h1>
        <DataTable />
      </DashboardLayout>
    </div>
  )
}

export default Table