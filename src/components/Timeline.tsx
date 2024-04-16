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
    const values = ['Sales','Profit','Quantity','DaysToShip','Discount','ProfitRatio']

    useEffect(() => {
        const obj: {[key: string]: any} = {}

        Data.map((data: any) => {
            if(selection === 'year'){
                obj[data.Order_Date.split("-")[2]] ={
                  Sales: obj[data.Order_Date.split("-")[2]]?.Sales  ? obj[data.Order_Date.split("-")[2]]?.Sales + parseInt(data.Sales) : parseInt(data.Sales),
                  Profit: obj[data.Order_Date.split("-")[2]]?.Profit ? obj[data.Order_Date.split("-")[2]]?.Profit + parseInt(data.Profit) : parseInt(data.Profit),
                  Quantity: obj[data.Order_Date.split("-")[2]]?.Quantity ? obj[data.Order_Date.split("-")[2]]?.Quantity + Number(data.Quantity) : Number(data.Quantity),
                  DaysToShip: obj[data.Order_Date.split("-")[2]]?.DaysToShip ? obj[data.Order_Date.split("-")[2]]?.DaysToShip + Number(data.DaysToShip) : Number(data.DaysToShip),
                  Discount: obj[data.Order_Date.split("-")[2]]?.Discount ? obj[data.Order_Date.split("-")[2]]?.Discount + Number(data.Discount) : Number(data.Discount),
                  ProfitRatio: obj[data.Order_Date.split("-")[2]]?.ProfitRatio ? obj[data.Order_Date.split("-")[2]]?.ProfitRatio + Number(data.ProfitRatio) : Number(data.ProfitRatio),
                  //Return: objyear[data.Order_Date.split("-")[2]]?.Return ? objyear[data.Order_Date.split("-")[2]]?.Return + Number(data.Return) : Number(data.Return),
                  year: data.Order_Date.split("-")[2]
                }
            }
            if(selection === 'quarter'){
                obj[Math.ceil(Number(data.Order_Date.split("-")[1])/3)] ={
                    Sales: obj[Math.ceil(Number(data.Order_Date.split("-")[1])/3)]?.Sales  ? obj[Math.ceil(Number(data.Order_Date.split("-")[1])/3)]?.Sales + parseInt(data.Sales) : parseInt(data.Sales),
                    Profit: obj[Math.ceil(Number(data.Order_Date.split("-")[1])/3)]?.Profit ? obj[Math.ceil(Number(data.Order_Date.split("-")[1])/3)]?.Profit + parseInt(data.Profit) : parseInt(data.Profit),
                    Quantity: obj[Math.ceil(Number(data.Order_Date.split("-")[1])/3)]?.Quantity ? obj[Math.ceil(Number(data.Order_Date.split("-")[1])/3)]?.Quantity + Number(data.Quantity) : Number(data.Quantity),
                    DaysToShip: obj[Math.ceil(Number(data.Order_Date.split("-")[1])/3)]?.DaysToShip ? obj[Math.ceil(Number(data.Order_Date.split("-")[1])/3)]?.DaysToShip + Number(data.DaysToShip) : Number(data.DaysToShip),
                    Discount: obj[Math.ceil(Number(data.Order_Date.split("-")[1])/3)]?.Discount ? obj[Math.ceil(Number(data.Order_Date.split("-")[1])/3)]?.Discount + Number(data.Discount) : Number(data.Discount),
                    ProfitRatio: obj[Math.ceil(Number(data.Order_Date.split("-")[1])/3)]?.ProfitRatio ? obj[Math.ceil(Number(data.Order_Date.split("-")[1])/3)]?.ProfitRatio + Number(data.ProfitRatio) : Number(data.ProfitRatio),
                    // Return: objquarter[Math.ceil(Number(data.Order_Date.split("-")[1])/3)]?.Return ? objquarter[Math.ceil(Number(data.Order_Date.split("-")[1])/3)]?.Return + Number(data.Return) : Number(data.Return),
                    quarter: Math.ceil(Number(data.Order_Date.split("-")[1])/3)
                }
            }
            if(selection === 'month'){
                obj[data.Order_Date.split("-")[1]] ={
                    Sales: obj[data.Order_Date.split("-")[1]]?.Sales  ? obj[data.Order_Date.split("-")[1]]?.Sales + parseInt(data.Sales) : parseInt(data.Sales),
                    Profit: obj[data.Order_Date.split("-")[1]]?.Profit ? obj[data.Order_Date.split("-")[1]]?.Profit + parseInt(data.Profit) : parseInt(data.Profit),
                    Quantity: obj[data.Order_Date.split("-")[1]]?.Quantity ? obj[data.Order_Date.split("-")[1]]?.Quantity + Number(data.Quantity) : Number(data.Quantity),
                    DaysToShip: obj[data.Order_Date.split("-")[1]]?.DaysToShip ? obj[data.Order_Date.split("-")[1]]?.DaysToShip + Number(data.DaysToShip) : Number(data.DaysToShip),
                    Discount: obj[data.Order_Date.split("-")[1]]?.Discount ? obj[data.Order_Date.split("-")[1]]?.Discount + Number(data.Discount) : Number(data.Discount),
                    ProfitRatio: obj[data.Order_Date.split("-")[1]]?.ProfitRatio ? obj[data.Order_Date.split("-")[1]]?.ProfitRatio + Number(data.ProfitRatio) : Number(data.ProfitRatio),
                    //Return: objmonth[data.Order_Date.split("-")[1]]?.Return ? objmonth[data.Order_Date.split("-")[1]]?.Return + Number(data.Return) : Number(data.Return),
                    month: monthsString[Number(data.Order_Date.split("-")[1]) - 1]
                }
            }
            if(selection === 'week'){
                obj[getWeek({dateold: data.Order_Date})] ={
                    Sales: obj[getWeek({dateold: data.Order_Date})]?.Sales  ? obj[getWeek({dateold: data.Order_Date})]?.Sales + parseInt(data.Sales) : parseInt(data.Sales),
                    Profit: obj[getWeek({dateold: data.Order_Date})]?.Profit ? obj[getWeek({dateold: data.Order_Date})]?.Profit + parseInt(data.Profit) : parseInt(data.Profit),
                    Quantity: obj[getWeek({dateold: data.Order_Date})]?.Quantity ? obj[getWeek({dateold: data.Order_Date})]?.Quantity + Number(data.Quantity) : Number(data.Quantity),
                    DaysToShip: obj[getWeek({dateold: data.Order_Date})]?.DaysToShip ? obj[getWeek({dateold: data.Order_Date})]?.DaysToShip + Number(data.DaysToShip) : Number(data.DaysToShip),
                    Discount: obj[getWeek({dateold: data.Order_Date})]?.Discount ? obj[getWeek({dateold: data.Order_Date})]?.Discount + Number(data.Discount) : Number(data.Discount),
                    ProfitRatio: obj[getWeek({dateold: data.Order_Date})]?.ProfitRatio ? obj[getWeek({dateold: data.Order_Date})]?.ProfitRatio + Number(data.ProfitRatio) : Number(data.ProfitRatio),
                    // Return: objweek[getWeek({dateold: data.Order_Date})]?.Return ? objweek[getWeek({dateold: data.Order_Date})]?.Return + Number(data.Return) : Number(data.Return),
                    //data: objweek[getWeek({dateold: data.Order_Date})]?.data ? objweek[getWeek({dateold: data.Order_Date})]?.data + 1 : 1,
                    week: getWeek({dateold: data.Order_Date})
                }
            }
        })
        setGraphData(obj)


    }, [selection])
    return (
    <div className="mt-2">
        {values.map((value) => {
            return (
                <div key={value} className=" bg-gray-50">
                    <p className=" bg-gray-50">{value}</p>
                    {/*numerical sorting unless it's a month filter*/}
                    <AreaChart width={700} height={200} data={selection === 'month' ? Object.values(graphData).sort((a:any,b:any) => monthsString.indexOf(a.month) - monthsString.indexOf(b.month)) : Object.values(graphData).sort((a:any,b:any) => Number(a[selection]) - Number(b[selection]))}
                    margin={{ top: 0, right: 30, left: 20, bottom: 0 }}>
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