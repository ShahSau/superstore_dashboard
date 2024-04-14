import { useEffect, useMemo, useRef, useState } from "react";
import * as d3 from "d3";
import Data from "../libs/data";
import { AxisLeft } from "./bubbleChart/AxisLeft";
import { AxisBottom } from "./bubbleChart/AxisBottom";
import { Tooltip, InteractionData } from "./bubbleChart/Tooltip";
import styles from "./scatterplot.module.css";


const MARGIN = { top: 60, right: 60, bottom: 60, left: 60 };

// type DataPoint = {
//   x: number;
//   y: number;
//   size: number;
//   group: string;
//   subGroup: string;
// };

// type ScatterplotProps = {
//   width: number;
//   height: number;
//   data: any[];
// };

const BubbleChart = () => {
    const [yaxis, setYaxis] = useState<any>("Discount");
    const [xaxis, setXaxis] = useState<any>("Quantity");
    const [size, setSize] = useState<any>("Profit");
    const [group, setGroup] = useState<any>("Category");

    const data = Data;
    const boundsWidth = 700 - MARGIN.right - MARGIN.left;
    const boundsHeight = 1200 - MARGIN.top - MARGIN.bottom;
  
    const [hovered, setHovered] = useState<InteractionData | null>(null);

    // Scales
    const [minY, maxY] = d3.extent(data.map((d:any) => Number(d[yaxis]))) as [
        number,
        number
      ];
  const yScale = d3.scaleLinear().domain([minY, maxY]).range([boundsHeight, 0]).nice();
  const [, maxX] = d3.extent(data.map((d:any) => Number(d[xaxis]))) as [
    number,
    number
  ];
  const xScale = d3
    .scaleLinear()
    .domain([0, maxX])
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
            name: d.Category, // can put anything in here
          })
        }
        onMouseLeave={() => setHovered(null)}
      />
    );
  });

  return(
    <>
    <div className="float-right mr-6">
        <label htmlFor="location" className="block text-lg font-medium text-gray-700">
            X Axis
        </label>
          <select
            id="location"
            name="location"
            className="text-lg block cursor-pointer bg-[#8884d8] rounded-md border-l border-gray-200 py-2 pl-4 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 sm:text-sm sm:leading-6"
            defaultValue="2017"
            onChange={(e) =>{} }
          >
            <option>2017</option>
            <option>2016</option>
            <option>2015</option>
          </select>
    </div>
    <div className="float-right mr-6">
        <label htmlFor="location" className="block text-lg font-medium text-gray-700">
            Y Axis
        </label>
          <select
            id="location"
            name="location"
            className="text-lg block cursor-pointer bg-[#8884d8] rounded-md border-l border-gray-200 py-2 pl-4 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 sm:text-sm sm:leading-6"
            defaultValue="2017"
            onChange={(e) => {}}
          >
            <option>2017</option>
            <option>2016</option>
            <option>2015</option>
          </select>
        </div>
        <div className="float-right mr-6">
        <label htmlFor="location" className="block text-lg font-medium text-gray-700">
            Breakdown
        </label>
          <select
            id="location"
            name="location"
            className="text-lg block cursor-pointer bg-[#8884d8] rounded-md border-l border-gray-200 py-2 pl-4 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 sm:text-sm sm:leading-6"
            defaultValue="2017"
            onChange={(e) => {}}
          >
            <option>2017</option>
            <option>2016</option>
            <option>2015</option>
          </select>
        </div>
    <div style={{ position: "relative" }}>
      <svg width={700} height={1200}>
        <g
          width={boundsWidth}
          height={boundsHeight}
          transform={`translate(${[MARGIN.left, MARGIN.top].join(",")})`}
        >
          {/* Y axis */}
          <AxisLeft yScale={yScale} pixelsPerTick={40} width={boundsWidth} />

          {/* X axis, use an additional translation to appear at the bottom */}
          <g transform={`translate(0, ${boundsHeight})`}>
            <AxisBottom
              xScale={xScale}
              pixelsPerTick={40}
              height={boundsHeight}
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