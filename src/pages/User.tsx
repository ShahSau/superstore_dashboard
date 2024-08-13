import React from 'react'
import Data from '../libs/data'
import TanStackTable from '../components/UserTable/TanStackTable'
import DashboardLayout from '../components/Layout'

const User = () => {
  const tableData:{
    [key: string]: {
      ID: string,
      Segment: string,
      City: string,
      State: string,
      Postal_Code: string,
      Region: string,
      Sales: number,
      Quantity: number,
      Discount: number,
      Profit: number,
      Customer_Name: string
    }
  } ={}
  Data.map((data) => {
    if(data.Customer_Name in tableData){
      tableData[data.Customer_Name].Sales += Number(data.Sales)
      tableData[data.Customer_Name].Quantity += Number(data.Quantity)
      tableData[data.Customer_Name].Discount += Number(data.Discount)
      tableData[data.Customer_Name].Profit += Number(data.Profit)
    }
    else{
      tableData[data.Customer_Name] = {
        ID: data.Customer_ID,
        Segment: data.Segment,
        City: data.City,
        State: data.State,
        Postal_Code: data.Postal_Code,
        Region: data.Region,
        Sales: Number(data.Sales),
        Quantity:Number( data.Quantity),
        Discount: Number(data.Discount),
        Profit: Number(data.Profit),
        Customer_Name: data.Customer_Name
      }
    }
  })
  const newDataTable = Object.values(tableData)
  newDataTable.map((data) => {
    data.Sales = Number(data.Sales.toFixed(2))
    data.Quantity = Number(data.Quantity.toFixed(2))
    data.Discount = Number(data.Discount.toFixed(2))
    data.Profit = Number(data.Profit.toFixed(2))
  })
  

  console.log(Object.keys(tableData).length)
  return (

    <div>
      <DashboardLayout>
        <h1 className="text-2xl font-bold m-6  top-0">Customer</h1>
        <TanStackTable data={newDataTable}/>
      </DashboardLayout>
    </div>
  )
}

export default User