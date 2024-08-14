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

const TopProductTable = () => {
    const tableData:{
        [key: string]: {
          ID: string,
          Product_Name: string,
          Quantity: number,
        }
    } ={}

    Data.map((data) => {
        if(data.Product_Name in tableData){
            tableData[data.Product_Name].Quantity += Number(data.Quantity)
        }
        else{
            tableData[data.Product_Name] = {
                ID: data.Product_ID,
                Product_Name: data.Product_Name,
                Quantity: Number(data.Quantity),
            }
        }
    })

    const newDataTable = Object.values(tableData)

    newDataTable.sort((a, b) => b.Quantity - a.Quantity)

    const columnHelper = createColumnHelper();

    const columns = [
        columnHelper.accessor("Product_Name", {
          cell: (info) => <span>{info.getValue()}</span>,
          header: "Product Name",
        }),
        columnHelper.accessor("Quantity", {
          cell: (info) => <span>{info.getValue()}</span>,
          header: "Quantity",
        }),
      ];

      const data = newDataTable.slice(0, 5)

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

export default TopProductTable