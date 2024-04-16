import {  useState } from "react";
import * as d3 from "d3";
import { AxisLeft } from "./bubbleChart/AxisLeft";
import { AxisBottom } from "./bubbleChart/AxisBottom";
import { Tooltip, InteractionData } from "./bubbleChart/Tooltip";


const MARGIN = { top: 60, right: 60, bottom: 60, left: 60 };

const BubbleChart = ({Data}: {Data: any[]}) => {
    const [filter] = useState<string[]>([
      "DaysToShip",
      "Discount",
      "Profit",
      "Quantity",
      "ProfitRatio",
      "Sales",
      // "Returns"
    ]);
    const [breakdown] = useState<string[]>([
      "Segment",
      "Category",
      "Ship_Mode",
      "Customer_Name",
      "Sub-Category",
      "Product_Name",
    ]);
    const [yaxis, setYaxis] = useState<any>(filter[3]);
    const [xaxis, setXaxis] = useState<any>(filter[1]);
    const [group, setGroup] = useState<any>(breakdown[1]);
    // size can be another filter


    const data = Data;
    const boundsWidth = 700 - MARGIN.right - MARGIN.left;
    const boundsHeight = 700 - MARGIN.top - MARGIN.bottom;
  
    const [hovered, setHovered] = useState<InteractionData | null>(null);

    // Scales
    const [minY, maxY] = d3.extent(data.map((d:any) => Number(d[yaxis]))) as [
        number,
        number
      ];
  const yScale = d3.scaleLinear().domain([minY, maxY*1.05]).range([boundsHeight, 0]).nice();
  const [minX, maxX] = d3.extent(data.map((d:any) => Number(d[xaxis]))) as [
    number,
    number
  ];
  const xScale = d3
    .scaleLinear()
    .domain([minX, maxX])
    .range([0, boundsWidth]).nice();
  const allGroups = data.map((d:any) => String(d[group]));
  const colorScale = d3
    .scaleOrdinal<string>()
    .domain([... new Set(allGroups)])
    .range(["#e0ac2b", "#e85252", "#6689c6", "#9a6fb0", "#a53253"]);

// Build the shapes
const allShapes = data.map((d:any, i) => {
    return (
      <circle
        key={i}
        r={8}
        cx={xScale(Number(d[xaxis]))}
        cy={yScale(Number(d[yaxis]))}
        stroke={colorScale(d[group])}
        fill={colorScale(d[group])}
        fillOpacity={0.7}
        onMouseEnter={() =>
          setHovered({
            xPos: xScale(Number(d[xaxis])),
            yPos: yScale(Number(d[yaxis])),
            name: `${group}:${d[group]}, ${xaxis}:${d[xaxis]}, ${yaxis}: ${d[yaxis]}`, // can put anything in here
          })
        }
        onMouseLeave={() => setHovered(null)}
      />
    );
  });

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
              {filter.map((f) => {
                if (f !== xaxis) return <option key={f}>{f}</option>
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
              {filter.map((f) => {
                if (f !== yaxis) return <option key={f}>{f}</option>
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
              {breakdown.map((f) => {
                return <option key={f}>{f}</option>
              })}
          </select>
      </div>
    </div>
        
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