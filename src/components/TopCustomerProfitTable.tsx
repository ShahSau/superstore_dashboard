import React from 'react'
import Data from '../libs/data'
import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    useReactTable,
  } from "@tanstack/react-table";

const TopCustomerProfitTable = () => {
    const tableData:{
        [key: string]: {
          ID: string,
          Segment: string,
          City: string,
          State: string,
          Postal_Code: string,
          Region: string,
          Profit: number,
          Customer_Name: string
        }
    } ={}

    Data.map((data) => {
        if(data.Customer_Name in tableData){
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
                Profit: Number(data.Profit),
                Customer_Name: data.Customer_Name
            }
        }
    })

    const newDataTable = Object.values(tableData)
    newDataTable.map((data) => {
        data.Profit = Number(data.Profit.toFixed(2))
    })

    newDataTable.sort((a, b) => b.Profit - a.Profit)

    const columnHelper = createColumnHelper();

    const columns = [
        columnHelper.accessor("Customer_Name", {
          cell: (info) => <span>{info.getValue()}</span>,
          header: "Customer Name",
        }),
        columnHelper.accessor("City", {
          cell: (info) => <span>{info.getValue()}</span>,
          header: "City",
        }),
        columnHelper.accessor("State", {
          cell: (info) => <span>{info.getValue()}</span>,
          header: "State",
        }),
        columnHelper.accessor("Region", {
          cell: (info) => <span>{info.getValue()}</span>,
          header: "Region",
        }),
        columnHelper.accessor("Profit", {
          cell: (info) => <span>{info.getValue()}</span>,
          header: "Profit",
        }),
    ]

    const data = newDataTable.slice(0, 5);
    const table = useReactTable({
        data,
        columns,
        
        getFilteredRowModel: getFilteredRowModel(),
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
    });

  return (
    <div className="p-2 max-w-5xl mx-auto text-black fill-gray-100">
        <table className="border border-gray-500 w-full text-left">
          <thead className="bg-gray-300">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className="capitalize px-3.5 py-2">
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
              {table.getRowModel().rows.map((row, i) => (
                
                <tr
                  key={row.id}
                  className={`
                  ${i % 2 === 0 ? "bg-gray-100" : "bg-gray-200"}
                  `}
                >
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className="px-3.5 py-2">
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))        
            }
          </tbody>
        </table>
        
    </div>
  )
}

export default TopCustomerProfitTable