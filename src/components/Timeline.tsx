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
    function getWeek ({dateold}: {dateold: string}) {
        if(dateold.split("-")[1] === "12" && moment(dateold, "DD-MM-YYYY").week() === 1){
            return 53
        }
        return moment(dateold, "DD-MM-YYYY").week();
    }

    // array of months
    const monthsString = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

    const values = ['Sales','Profit','Quantity','DaysToShip','Discount','ProfitRatio']
    useEffect(() => {
        const objyear: {[key: string]: any} = {}
        const objmonth: {[key: string]: any} = {} 
        const objweek: {[key: string]: any} = {}
        const objquarter: {[key: string]: any} = {}
        Data.map((data: any) => {
            if(selection === 'year'){
                objyear[data.Order_Date.split("-")[2]] ={
                  Sales: objyear[data.Order_Date.split("-")[2]]?.Sales  ? objyear[data.Order_Date.split("-")[2]]?.Sales + Number(data.Sales) : Number(data.Sales),
                  Profit: objyear[data.Order_Date.split("-")[2]]?.Profit ? objyear[data.Order_Date.split("-")[2]]?.Profit + Number(data.Profit) : Number(data.Profit),
                  Quantity: objyear[data.Order_Date.split("-")[2]]?.Quantity ? objyear[data.Order_Date.split("-")[2]]?.Quantity + Number(data.Quantity) : Number(data.Quantity),
                  DaysToShip: objyear[data.Order_Date.split("-")[2]]?.DaysToShip ? objyear[data.Order_Date.split("-")[2]]?.DaysToShip + Number(data.DaysToShip) : Number(data.DaysToShip),
                  Discount: objyear[data.Order_Date.split("-")[2]]?.Discount ? objyear[data.Order_Date.split("-")[2]]?.Discount + Number(data.Discount) : Number(data.Discount),
                  ProfitRatio: objyear[data.Order_Date.split("-")[2]]?.ProfitRatio ? objyear[data.Order_Date.split("-")[2]]?.ProfitRatio + Number(data.ProfitRatio) : Number(data.ProfitRatio),
                  //Return: objyear[data.Order_Date.split("-")[2]]?.Return ? objyear[data.Order_Date.split("-")[2]]?.Return + Number(data.Return) : Number(data.Return),
                  year: data.Order_Date.split("-")[2]
                }
            }
            if(selection === 'quarter'){
                objquarter[Math.ceil(Number(data.Order_Date.split("-")[1])/3)] ={
                    Sales: objquarter[Math.ceil(Number(data.Order_Date.split("-")[1])/3)]?.Sales  ? objquarter[Math.ceil(Number(data.Order_Date.split("-")[1])/3)]?.Sales + Number(data.Sales) : Number(data.Sales),
                    Profit: objquarter[Math.ceil(Number(data.Order_Date.split("-")[1])/3)]?.Profit ? objquarter[Math.ceil(Number(data.Order_Date.split("-")[1])/3)]?.Profit + Number(data.Profit) : Number(data.Profit),
                    Quantity: objquarter[Math.ceil(Number(data.Order_Date.split("-")[1])/3)]?.Quantity ? objquarter[Math.ceil(Number(data.Order_Date.split("-")[1])/3)]?.Quantity + Number(data.Quantity) : Number(data.Quantity),
                    DaysToShip: objquarter[Math.ceil(Number(data.Order_Date.split("-")[1])/3)]?.DaysToShip ? objquarter[Math.ceil(Number(data.Order_Date.split("-")[1])/3)]?.DaysToShip + Number(data.DaysToShip) : Number(data.DaysToShip),
                    Discount: objquarter[Math.ceil(Number(data.Order_Date.split("-")[1])/3)]?.Discount ? objquarter[Math.ceil(Number(data.Order_Date.split("-")[1])/3)]?.Discount + Number(data.Discount) : Number(data.Discount),
                    ProfitRatio: objquarter[Math.ceil(Number(data.Order_Date.split("-")[1])/3)]?.ProfitRatio ? objquarter[Math.ceil(Number(data.Order_Date.split("-")[1])/3)]?.ProfitRatio + Number(data.ProfitRatio) : Number(data.ProfitRatio),
                    // Return: objquarter[Math.ceil(Number(data.Order_Date.split("-")[1])/3)]?.Return ? objquarter[Math.ceil(Number(data.Order_Date.split("-")[1])/3)]?.Return + Number(data.Return) : Number(data.Return),
                    quarter: Math.ceil(Number(data.Order_Date.split("-")[1])/3)
                }
            }
            if(selection === 'month'){
                objmonth[data.Order_Date.split("-")[1]] ={
                    Sales: objmonth[data.Order_Date.split("-")[1]]?.Sales  ? objmonth[data.Order_Date.split("-")[1]]?.Sales + Number(data.Sales) : Number(data.Sales),
                    Profit: objmonth[data.Order_Date.split("-")[1]]?.Profit ? objmonth[data.Order_Date.split("-")[1]]?.Profit + Number(data.Profit) : Number(data.Profit),
                    Quantity: objmonth[data.Order_Date.split("-")[1]]?.Quantity ? objmonth[data.Order_Date.split("-")[1]]?.Quantity + Number(data.Quantity) : Number(data.Quantity),
                    DaysToShip: objmonth[data.Order_Date.split("-")[1]]?.DaysToShip ? objmonth[data.Order_Date.split("-")[1]]?.DaysToShip + Number(data.DaysToShip) : Number(data.DaysToShip),
                    Discount: objmonth[data.Order_Date.split("-")[1]]?.Discount ? objmonth[data.Order_Date.split("-")[1]]?.Discount + Number(data.Discount) : Number(data.Discount),
                    ProfitRatio: objmonth[data.Order_Date.split("-")[1]]?.ProfitRatio ? objmonth[data.Order_Date.split("-")[1]]?.ProfitRatio + Number(data.ProfitRatio) : Number(data.ProfitRatio),
                    //Return: objmonth[data.Order_Date.split("-")[1]]?.Return ? objmonth[data.Order_Date.split("-")[1]]?.Return + Number(data.Return) : Number(data.Return),
                    month: monthsString[Number(data.Order_Date.split("-")[1]) - 1]
                }
            }
            if(selection === 'week'){
                objweek[getWeek({dateold: data.Order_Date})] ={
                    Sales: objweek[getWeek({dateold: data.Order_Date})]?.Sales  ? objweek[getWeek({dateold: data.Order_Date})]?.Sales + Number(data.Sales) : Number(data.Sales),
                    Profit: objweek[getWeek({dateold: data.Order_Date})]?.Profit ? objweek[getWeek({dateold: data.Order_Date})]?.Profit + Number(data.Profit) : Number(data.Profit),
                    Quantity: objweek[getWeek({dateold: data.Order_Date})]?.Quantity ? objweek[getWeek({dateold: data.Order_Date})]?.Quantity + Number(data.Quantity) : Number(data.Quantity),
                    DaysToShip: objweek[getWeek({dateold: data.Order_Date})]?.DaysToShip ? objweek[getWeek({dateold: data.Order_Date})]?.DaysToShip + Number(data.DaysToShip) : Number(data.DaysToShip),
                    Discount: objweek[getWeek({dateold: data.Order_Date})]?.Discount ? objweek[getWeek({dateold: data.Order_Date})]?.Discount + Number(data.Discount) : Number(data.Discount),
                    ProfitRatio: objweek[getWeek({dateold: data.Order_Date})]?.ProfitRatio ? objweek[getWeek({dateold: data.Order_Date})]?.ProfitRatio + Number(data.ProfitRatio) : Number(data.ProfitRatio),
                    // Return: objweek[getWeek({dateold: data.Order_Date})]?.Return ? objweek[getWeek({dateold: data.Order_Date})]?.Return + Number(data.Return) : Number(data.Return),
                    //data: objweek[getWeek({dateold: data.Order_Date})]?.data ? objweek[getWeek({dateold: data.Order_Date})]?.data + 1 : 1,
                    week: getWeek({dateold: data.Order_Date})
                }
            }
        })
        if(selection === 'year') setGraphData(objyear)
        if(selection === 'quarter') setGraphData(objquarter)
        if(selection === 'month') setGraphData(objmonth)
        if(selection === 'week') setGraphData(objweek)


    }, [selection])
    return (
    <div className="mt-2">
        {values.map((value) => {
            return (
                <div key={value} className=" bg-gray-50">
                    <p className=" bg-gray-50">{value}</p>
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