
import BubbleChart from '../components/BubbleChart'
import DashboardLayout from '../components/Layout'
import Data from "../libs/data";

const Graphs = () => {
  Data.map((data: any) => {
    const orderMonth = data.Order_Date.split("-")[1]
    const orderDay = data.Order_Date.split("-")[0]
    const shipMonth = data.Ship_Date.split("-")[1]
    const shipDay = data.Ship_Date.split("-")[0]
    if(orderMonth === shipMonth){
      data["DaysToShip"] = Math.abs(Number(shipDay) - Number(orderDay))
    }
    else{
      data["DaysToShip"] = Math.abs((30 - Number(orderDay)) + Number(shipDay))
    }

    data["ProfitRatio"] = parseFloat((data.Profit/data.Sales).toFixed(3))
  }
  )

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
            <BubbleChart Data={Data}/>
          </div>
        </div>
        
      </DashboardLayout>
    </div>
  )
}

export default Graphs