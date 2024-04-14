
import DataTable from '../components/DataTable'
import DashboardLayout from '../components/Layout'

const Table = () => {
  return (
    <div>
      <DashboardLayout>
        <h1 className="text-2xl font-bold m-6  top-0">Data Table</h1>
        <DataTable />
      </DashboardLayout>
    </div>
  )
}

export default Table