import {  useEffect, useState } from "react";
import * as d3 from "d3";
import { AxisLeft } from "./bubbleChart/AxisLeft";
import { AxisBottom } from "./bubbleChart/AxisBottom";
import { Tooltip, InteractionData } from "./bubbleChart/Tooltip";


const MARGIN = { top: 60, right: 60, bottom: 60, left: 60 };

const BubbleChart = ({Data}: {Data: object[]}) => {
    const [filter] = useState<string[]>([
      "DaysToShip",
      "Discount",
      "Profit",
      "Quantity",
      "ProfitRatio",
      "Sales",
      "Returns"
    ]);
    const [breakdown] = useState<string[]>([
      "Segment",
      "Category",
      "Ship_Mode",
      "Customer_Name",
      "Sub-Category",
      "Product_Name",
    ]);
    const [yaxis, setYaxis] = useState<string>(filter[2]);
    const [xaxis, setXaxis] = useState<string>(filter[5]);
    const [group, setGroup] = useState<string>(breakdown[4]);
    const [result, setResult] = useState<any[]>([]);
    // size can be another filter


    const data = Data;
    const initresult: any[] = []
    useEffect(() => {
      data.reduce(function(res, value) {
        if (!res[value[group]]) {
          res[value[group]] = { Category: value[group], DiscountSum:0, ProfitRatioSum:0, DaysToShipSum:0, items:0, Profit: 0, Sales: 0, Quantity:0, Returns: 0, Discount: 0, ProfitRatio: 0, DaysToShip: 0};
          initresult.push(res[value[group]])
        }
        res[value[group]].Profit += parseInt(value.Profit);
        res[value[group]].Sales += parseInt(value.Sales);
        res[value[group]].Quantity += parseInt(value.Quantity);
        res[value[group]].Returns += value.Returned === "Yes" ? 1 : 0;
        res[value[group]].DiscountSum += parseFloat(value.Discount);
        res[value[group]].ProfitRatioSum += parseFloat(value.ProfitRatio);
        res[value[group]].DaysToShipSum += parseInt(value.DaysToShip);
        res[value[group]].items = res[value[group]].items + 1 || 1;
        return res;
      }
      , {});
      initresult.map((d:any) => {
        d.ProfitRatio = d.ProfitRatioSum / d.items;
        d.Discount = d.DiscountSum / d.items;
        d.DaysToShip = d.DaysToShipSum / d.items;
      }
      )
      setResult(initresult)
    }
    , [group])
    console.log(result)
    
    const boundsWidth = 700 - MARGIN.right - MARGIN.left;
    const boundsHeight = 700 - MARGIN.top - MARGIN.bottom;
  
    const [hovered, setHovered] = useState<InteractionData | null>(null);

    const [minY, maxY] = d3.extent(result.map((d:any) => Number(d[yaxis]))) as [
      number,
      number
    ];
    const yScale = d3.scaleLinear().domain([minY, maxY]).range([boundsHeight, 0]).nice();

    const [minX, maxX] = d3.extent(result.map((d:any) => Number(d[xaxis]))) as [
      number,
      number
    ];

    const xScale = d3
      .scaleLinear()
      .domain([minX, maxX])
      .range([0, boundsWidth]).nice();

      // Color scale check for new data type
    const allGroups = data.map((d:any) => String(d[group]));
    const colorScale = d3
      .scaleOrdinal<string>()
      .domain([... new Set(allGroups)])
      .range(d3.schemeCategory10);

    // Build the shapes
    const allShapes = result.map((d:any, i) => {
      return (
        <circle
          key={i}
          r={8}
          cx={xScale(Number(d[xaxis]))}
          cy={yScale(Number(d[yaxis]))}
          stroke={colorScale(d.Category)}
          fill={colorScale(d.Category)}
          fillOpacity={0.7}
          onMouseEnter={() =>
            setHovered({
              xPos: xScale(Number(d[xaxis])),
              yPos: yScale(Number(d[yaxis])),
              name: `${group}:${d.Category}, ${yaxis}: ${d[yaxis].toFixed(2)},${xaxis}:${d[xaxis].toFixed(2)}`,
            })
          }
          onMouseLeave={() => setHovered(null)}
        />
      );
    }
    );

  return(
    <>
    <div className="mb-16 m-4 flex flex-row">
      <div className="float-right mr-6">
          <label htmlFor="location" className="block text-lg font-medium text-gray-700 ">
              Y Axis
          </label>
          <select
              id="yaxis"
              name="yaxis"
              value={yaxis}
              defaultValue={yaxis}
              className="mt-1 block w-full border-red-300  pl-3 pr-10 py-2 text-base  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              onChange={(e) => setYaxis(e.target.value)}
          >
              {filter.map((f,i) => {
                if (f !== xaxis) return <option key={i}>{f}</option>
              })}
          </select>
      </div>
      <div className="float-right mr-6">
          <label htmlFor="location" className="block text-lg font-medium text-gray-700 ">
              X Axis
          </label>
          <select
              id="xaxis"
              name="xaxis"
              value={xaxis}
              defaultValue={xaxis}
              className="mt-1 block w-full border-red-300  pl-3 pr-10 py-2 text-base  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              onChange={(e) => setXaxis(e.target.value)}
          >
              {filter.map((f,i) => {
                if (f !== yaxis) return <option key={i}>{f}</option>
              })}
          </select>
      </div>
      <div className="float-right mr-6">
          <label htmlFor="location" className="block text-lg font-medium text-gray-700 ">
              Breakdown
          </label>
          <select
              id="group"
              name="group"
              value={group}
              defaultValue={group}
              className="mt-1 block w-full border-red-300  pl-3 pr-10 py-2 text-base  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              onChange={(e) => setGroup(e.target.value)}
          >
              {breakdown.map((f,i) => {
                return <option key={i}>{f}</option>
              })}
          </select>
      </div>
    </div>
    
    {/*bubble chart */}
    <div style={{ position: "relative" }}>
      <svg width={700} height={700}>
        <g
          width={boundsWidth}
          height={boundsHeight}
          transform={`translate(${[MARGIN.left, MARGIN.top].join(",")})`}
        >
          {/* Y axis */}
          <AxisLeft yScale={yScale} pixelsPerTick={40} width={boundsWidth} axisLabel={yaxis}/>

          {/* X axis, use an additional translation to appear at the bottom */}
          <g transform={`translate(0, ${boundsHeight})`}>
            <AxisBottom
              xScale={xScale}
              pixelsPerTick={40}
              height={boundsHeight}
              axisLabel={xaxis}
            />
          </g>

          {/* Circles */}
          {allShapes}
        </g>
      </svg>

      {/* Tooltip */}
      <div
        style={{
          width: boundsWidth,
          height: boundsHeight,
          position: "absolute",
          top: 0,
          left: 0,
          pointerEvents: "none",
          marginLeft: MARGIN.left,
          marginTop: MARGIN.top,
        }}
      >
        <Tooltip interactionData={hovered} />
      </div>
    </div>
    </>
  );
}

export default BubbleChart