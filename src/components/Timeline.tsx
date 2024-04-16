import moment from 'moment'
import { useEffect, useState } from 'react'
import {
    CartesianGrid,
    Tooltip,
    XAxis,
    YAxis,
    AreaChart,
    Area,
  } from "recharts";


const Timeline = ({Data, selection}: {Data: any[], selection:string}) => {

    const [graphData, setGraphData] = useState({})


    // custom function to get week number
    // because there are 52.1429 weeks in a year, we need to account for the 53rd week
    function getWeek ({dateold}: {dateold: string}) {
        if(dateold.split("-")[1] === "12" && moment(dateold, "DD-MM-YYYY").week() === 1){
            return 53
        }
        return moment(dateold, "DD-MM-YYYY").week();
    }

    // array of months for month selection
    const monthsString = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

    // graph name 
    const values = ['Sales','Profit','Quantity','DaysToShip','Discount','ProfitRatio', 'Returns']

    useEffect(() => {
        let obj: {[key: string]: any} = {}

        Data.map((data: any) => {
            if(selection === 'year'){
                obj[data.Order_Date.split("-")[2]] ={
                  Sales: obj[data.Order_Date.split("-")[2]]?.Sales  ? obj[data.Order_Date.split("-")[2]]?.Sales + parseInt(data.Sales) : parseInt(data.Sales),
                  Profit: obj[data.Order_Date.split("-")[2]]?.Profit ? obj[data.Order_Date.split("-")[2]]?.Profit + parseInt(data.Profit) : parseInt(data.Profit),
                  Quantity: obj[data.Order_Date.split("-")[2]]?.Quantity ? obj[data.Order_Date.split("-")[2]]?.Quantity + Number(data.Quantity) : Number(data.Quantity),
                  DaysToShipSum: obj[data.Order_Date.split("-")[2]]?.DaysToShipSum ? obj[data.Order_Date.split("-")[2]]?.DaysToShipSum + Number(data.DaysToShip) : Number(data.DaysToShip),
                  DiscountSum: obj[data.Order_Date.split("-")[2]]?.DiscountSum ? obj[data.Order_Date.split("-")[2]]?.DiscountSum + Number(data.Discount) : Number(data.Discount),
                  ProfitRatioSum: obj[data.Order_Date.split("-")[2]]?.ProfitRatioSum ? obj[data.Order_Date.split("-")[2]]?.ProfitRatioSum + Number(data.ProfitRatio) : Number(data.ProfitRatio),
                  Returns: obj[data.Order_Date.split("-")[2]]?.Returns ? obj[data.Order_Date.split("-")[2]]?.Returns + (data.Returned === 'Yes' ? 1  : 0) : (data.Returned=== 'Yes' ? 1  : 0),
                  items: obj[data.Order_Date.split("-")[2]]?.items ? obj[data.Order_Date.split("-")[2]]?.items + 1 : 1,
                  year: data.Order_Date.split("-")[2]
                }
            }
            if(selection === 'quarter'){
                obj[Math.ceil(Number(data.Order_Date.split("-")[1])/3)] ={
                    Sales: obj[Math.ceil(Number(data.Order_Date.split("-")[1])/3)]?.Sales  ? obj[Math.ceil(Number(data.Order_Date.split("-")[1])/3)]?.Sales + parseInt(data.Sales) : parseInt(data.Sales),
                    Profit: obj[Math.ceil(Number(data.Order_Date.split("-")[1])/3)]?.Profit ? obj[Math.ceil(Number(data.Order_Date.split("-")[1])/3)]?.Profit + parseInt(data.Profit) : parseInt(data.Profit),
                    Quantity: obj[Math.ceil(Number(data.Order_Date.split("-")[1])/3)]?.Quantity ? obj[Math.ceil(Number(data.Order_Date.split("-")[1])/3)]?.Quantity + Number(data.Quantity) : Number(data.Quantity),
                    DaysToShipSum: obj[Math.ceil(Number(data.Order_Date.split("-")[1])/3)]?.DaysToShipSum ? obj[Math.ceil(Number(data.Order_Date.split("-")[1])/3)]?.DaysToShipSum + Number(data.DaysToShip) : Number(data.DaysToShip),
                    DiscountSum: obj[Math.ceil(Number(data.Order_Date.split("-")[1])/3)]?.DiscountSum ? obj[Math.ceil(Number(data.Order_Date.split("-")[1])/3)]?.DiscountSum + Number(data.Discount) : Number(data.Discount),
                    ProfitRatioSum: obj[Math.ceil(Number(data.Order_Date.split("-")[1])/3)]?.ProfitRatioSum ? obj[Math.ceil(Number(data.Order_Date.split("-")[1])/3)]?.ProfitRatioSum + Number(data.ProfitRatio) : Number(data.ProfitRatio),
                    Returns: obj[Math.ceil(Number(data.Order_Date.split("-")[1])/3)]?.Returns ? obj[Math.ceil(Number(data.Order_Date.split("-")[1])/3)]?.Returns + (data.Returned === 'Yes' ? 1  : 0) : (data.Returned=== 'Yes' ? 1  : 0),
                    items: obj[Math.ceil(Number(data.Order_Date.split("-")[1])/3)]?.items ? obj[Math.ceil(Number(data.Order_Date.split("-")[1])/3)]?.items + 1 : 1,
                    quarter: Math.ceil(Number(data.Order_Date.split("-")[1])/3)
                }
            }
            if(selection === 'month'){
                obj[data.Order_Date.split("-")[1]] ={
                    Sales: obj[data.Order_Date.split("-")[1]]?.Sales  ? obj[data.Order_Date.split("-")[1]]?.Sales + parseInt(data.Sales) : parseInt(data.Sales),
                    Profit: obj[data.Order_Date.split("-")[1]]?.Profit ? obj[data.Order_Date.split("-")[1]]?.Profit + parseInt(data.Profit) : parseInt(data.Profit),
                    Quantity: obj[data.Order_Date.split("-")[1]]?.Quantity ? obj[data.Order_Date.split("-")[1]]?.Quantity + Number(data.Quantity) : Number(data.Quantity),
                    DaysToShipSum: obj[data.Order_Date.split("-")[1]]?.DaysToShipSum ? obj[data.Order_Date.split("-")[1]]?.DaysToShipSum + Number(data.DaysToShip) : Number(data.DaysToShip),
                    DiscountSum: obj[data.Order_Date.split("-")[1]]?.DiscountSum ? obj[data.Order_Date.split("-")[1]]?.DiscountSum + Number(data.Discount) : Number(data.Discount),
                    ProfitRatioSum: obj[data.Order_Date.split("-")[1]]?.ProfitRatioSum ? obj[data.Order_Date.split("-")[1]]?.ProfitRatioSum + Number(data.ProfitRatio) : Number(data.ProfitRatio),
                    Returns: obj[data.Order_Date.split("-")[1]]?.Returns ? obj[data.Order_Date.split("-")[1]]?.Returns + (data.Returned === 'Yes' ? 1  : 0) : (data.Returned=== 'Yes' ? 1  : 0),
                    items: obj[data.Order_Date.split("-")[1]]?.items ? obj[data.Order_Date.split("-")[1]]?.items + 1 : 1,
                    month: monthsString[Number(data.Order_Date.split("-")[1]) - 1]
                }
            }
            if(selection === 'week'){
                obj[getWeek({dateold: data.Order_Date})] ={
                    Sales: obj[getWeek({dateold: data.Order_Date})]?.Sales  ? obj[getWeek({dateold: data.Order_Date})]?.Sales + parseInt(data.Sales) : parseInt(data.Sales),
                    Profit: obj[getWeek({dateold: data.Order_Date})]?.Profit ? obj[getWeek({dateold: data.Order_Date})]?.Profit + parseInt(data.Profit) : parseInt(data.Profit),
                    Quantity: obj[getWeek({dateold: data.Order_Date})]?.Quantity ? obj[getWeek({dateold: data.Order_Date})]?.Quantity + Number(data.Quantity) : Number(data.Quantity),
                    DaysToShipSum: obj[getWeek({dateold: data.Order_Date})]?.DaysToShipSum ? obj[getWeek({dateold: data.Order_Date})]?.DaysToShipSum + Number(data.DaysToShip) : Number(data.DaysToShip),
                    DiscountSum: obj[getWeek({dateold: data.Order_Date})]?.DiscountSum ? obj[getWeek({dateold: data.Order_Date})]?.DiscountSum + Number(data.Discount) : Number(data.Discount),
                    ProfitRatioSum: obj[getWeek({dateold: data.Order_Date})]?.ProfitRatioSum ? obj[getWeek({dateold: data.Order_Date})]?.ProfitRatioSum + Number(data.ProfitRatio) : Number(data.ProfitRatio),
                    Returns: obj[getWeek({dateold: data.Order_Date})]?.Returns ? obj[getWeek({dateold: data.Order_Date})]?.Returns + (data.Returned === 'Yes' ? 1  : 0) : (data.Returned=== 'Yes' ? 1  : 0),
                    items: obj[getWeek({dateold: data.Order_Date})]?.items ? obj[getWeek({dateold: data.Order_Date})]?.items + 1 : 1,
                    week: getWeek({dateold: data.Order_Date})
                }
            }
        })
        obj = Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, {...value, DaysToShip: (value.DaysToShipSum/value.items).toFixed(2), Discount: (value.DiscountSum/value.items).toFixed(2), ProfitRatio: (value.ProfitRatioSum/value.items).toFixed(2)}]))
        setGraphData(obj)
    }, [selection])
    console.log(graphData)
    return (
    <div className="mt-2">
        {values.map((value) => {
            return (
                <div key={value} className=" bg-gray-50">
                    <p className=" bg-gray-50 ml-4">{value}</p>
                    {/*numerical sorting unless it's a month filter*/}
                    <AreaChart width={700} height={200} data={selection === 'month' ? Object.values(graphData).sort((a:any,b:any) => monthsString.indexOf(a.month) - monthsString.indexOf(b.month)) : Object.values(graphData).sort((a:any,b:any) => Number(a[selection]) - Number(b[selection]))}
                    margin={{ top: 0, right: 30, left: 25, bottom: 0 }}>
                    <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                    </linearGradient>
                    </defs>
                    <XAxis dataKey={selection} />
                    {/* //unit={'$'} */}
                    <YAxis type="number" /> 
                    <CartesianGrid strokeDasharray="3 3" vertical={false} horizontal={false}/>
                    <Tooltip />
                    <Area type="monotone" dataKey={value} stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" dot={{fill:"#2e4355",stroke:"#8884d8",strokeWidth: 2,r:2}} activeDot={{fill:"#2e4355",stroke:"#8884d8",strokeWidth: 5,r:10}}/>
                    </AreaChart>
                </div>
            )
        })}
    </div>
    )
}

export default Timeline