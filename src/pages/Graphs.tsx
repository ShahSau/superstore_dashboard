
import BubbleChart from '../components/BubbleChart'
import DashboardLayout from '../components/Layout'


const Graphs = () => {
  return (
    <div>
      <DashboardLayout>
        <h1 className="text-2xl font-bold">Graphs</h1>
        <div className="grid h-screen grid-cols-2">
          {/* left side */}
          <div className="col-span-1 bg-gray-100">
            <h1 className="text-2xl font-bold">Graph 1</h1>
            </div>
          {/* right side */}
          <div className="col-span-1 mt-2">
            <h1 className="text-2xl font-bold">Bubble chart</h1>
            <BubbleChart />
          </div>
        </div>
        
      </DashboardLayout>
    </div>
  )
}

export default Graphs