import React, { useState} from 'react'
import {
  GroupingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getGroupedRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  getExpandedRowModel,

} from "@tanstack/react-table";
import Data from '../libs/data';
import { Box, Button, ButtonGroup, HStack, Icon,  Input,  InputGroup,  InputLeftElement,  Text, } from "@chakra-ui/react";
import EditableCell from './EditableCell';
import Filters from './Filters';
import SortIcon from './icons/SortIcon';
import { ArrowRight, Search, Ungroup } from 'lucide-react';
import GlobalFilter from './GlobalFilter';



const columns = [
   {
     accessorKey: "Row_ID",
     header: "Id",
     size: 225,
    //  cell: EditableCell,
    //  enableColumnFilter: true,
    //  filterFn: "includesString",
   },
   {
    accessorKey: "Product_Name",
    header: "Product Name",
    size: 225,
    cell: EditableCell,
    enableColumnFilter: true,
    filterFn: "includesString",
  },
  {
    accessorKey: "State",
    header: "State",
    size: 225,
    cell: EditableCell,
    enableColumnFilter: true,
    filterFn: "includesString",
  },
  {
    accessorKey: "Profit",
    header: "Profit",
    size: 225,
    cell: EditableCell,
    enableColumnFilter: true,
     //filterFn: "includesString",
  },
  {
    accessorKey: "Product_ID",
    header: "Product ID",
    size: 225,
    cell: EditableCell,
    enableColumnFilter: true,
    filterFn: "includesString",
  },
   {
    accessorKey: "Order_ID",
    header: "Order Id",
    size: 225,
    cell: EditableCell,
    enableColumnFilter: true,
    filterFn: "includesString",
  },
  {
    accessorKey: "Order_Date",
    header: "Order Date",
    size: 225,
    cell: EditableCell,
    enableColumnFilter: true,
    // filterFn: "includesString",
  },
  {
    accessorKey: "Ship_Date",
    header: "Ship Date",
    size: 225,
    cell: EditableCell,
    enableColumnFilter: true,
    // filterFn: "includesString",
  },
  {
    accessorKey: "Ship_Mode",
    header: "Ship Mode",
    size: 225,
    cell: EditableCell,
    enableColumnFilter: true,
    // filterFn: "includesString",
  },
  {
    accessorKey: "Customer_ID",
    header: "Customer ID",
    size: 225,
    cell: EditableCell,
    enableColumnFilter: true,
    // filterFn: "includesString",
  },
  {
    accessorKey: "Customer_Name",
    header: "Customer Name",
    size: 225,
    cell: EditableCell,
    enableColumnFilter: true,
    // filterFn: "includesString",
  },
  {
    accessorKey: "Segment",
    header: "Segment",
    size: 225,
    cell: EditableCell,
    enableColumnFilter: true,
    // filterFn: "includesString",
  },
  {
    accessorKey: "City",
    header: "City",
    size: 225,
    cell: EditableCell,
    enableColumnFilter: true,
    // filterFn: "includesString",
  },
  
  {
    accessorKey: "Region",
    header: "Region",
    size: 225,
    cell: EditableCell,
    enableColumnFilter: true,
    // filterFn: "includesString",
  },
  {
    accessorKey: "Category",
    header: "Category",
    size: 225,
    cell: EditableCell,
    enableColumnFilter: true,
    // filterFn: "includesString",
  },
  {
    accessorKey: "Sub-Category",
    header: "Sub-Category",
    size: 225,
    cell: EditableCell,
    enableColumnFilter: true,
    // filterFn: "includesString",
  },
  {
    accessorKey: "Sales",
    header: "Sales",
    size: 225,
    cell: EditableCell,
    enableColumnFilter: true,
    // filterFn: "includesString",
  },
  {
    accessorKey: "Quantity",
    header: "Quantity",
    size: 225,
    cell: EditableCell,
    enableColumnFilter: true,
    // filterFn: "includesString",
  },
  {
    accessorKey: "Discount",
    header: "Discount",
    size: 225,
    cell: EditableCell,
    enableColumnFilter: true,
    // filterFn: "includesString",
  },
  
];

const DataTable = () => {
  const [data, setData] = useState(Data);
  const [columnFilters, setColumnFilters] = useState([]);
  const [dropdown, setDropdown] = useState(false);
  const [grouping, setGrouping] = useState([]);
  const [globalFilter, setGlobalFilter] = useState('')


  const table = useReactTable({
    data,
    columns: columns as any,
    state: {
      columnFilters,
      grouping,
      globalFilter,
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    columnResizeMode: "onChange",
    enableColumnFilters: true,
    enableRowSelection: true,
    onGroupingChange: setGrouping,
    getGroupedRowModel: getGroupedRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    onGlobalFilterChange: setGlobalFilter,
    // globalFilterFn: (row, filterValue) => {
    //   if (!filterValue) {
    //     return true;
    //   }
    //   return Object.values(row.original).some((value) => {
    //     if (typeof value === "string") {
    //       return value.toLowerCase().includes(filterValue.toLowerCase());
    //     }
    //     return value === filterValue;
    //   });
    // }

    
  });
  const productsNameAll = table.getCoreRowModel().flatRows.map(row => row.getValue("Product_Name"))
  const productsIdAll = table.getCoreRowModel().flatRows.map(row => row.getValue("Product_ID"))
  const ordersIdAll = table.getCoreRowModel().flatRows.map(row => row.getValue("Order_ID"))
  

  const addData = () => {
    const data2 = table.getCoreRowModel().flatRows.map(row => row.getValue("Order_ID"))
    if(!data2.includes("CA-2024-119914")){
      console.log("true")
      setData([...data,{
        Row_ID: "9995",
    Order_ID: "CA-2024-119914",
    Order_Date: "04-05-2017",
    Ship_Date: "09-05-2017",
    Ship_Mode: "Second Class",
    Customer_ID: "CC-12220",
    Customer_Name: "Chris Cortes",
    Segment: "Consumer",
    Country: "United States",
    City: "Westminster",
    State: "California",
    Postal_Code: "92683",
    Region: "West",
    Product_ID: "OFF-AP-10002684",
    Category: "Office Supplies",
    Sub_Category: "Appliances",
    Product_Name: "xxxxxx",
    Sales: "243.16",
    Quantity: "2",
    Discount: "0",
    Profit: "72.948"
      }])
    }
    else{
      console.log("false")
    }
  }

  return (
    <>
    <div className="p-2 mx-auto z-0 top-16">
      <div className="flex justify-between mb-2">
        <div className="w-full flex items-center gap-1">
        <Filters columnFilters={columnFilters} setColumnFilters={setColumnFilters} data={[... new Set(productsIdAll)]} filter="Product_ID" filter_name="Product Id"/>
          
        </div>
        <div className="w-full flex items-center gap-1">
        <Filters columnFilters={columnFilters} setColumnFilters={setColumnFilters} data={[... new Set(ordersIdAll)]} filter="Order_ID" filter_name="Order Id"/>
          
        </div>
        <div className="w-full flex items-center gap-1">
        <Filters columnFilters={columnFilters} setColumnFilters={setColumnFilters} data={[... new Set(productsNameAll)]} filter="Product_Name" filter_name="Product Name"/>
          
        </div>
        <div className="w-full flex items-center gap-1">
        <Filters columnFilters={columnFilters} setColumnFilters={setColumnFilters} data={productsNameAll} filter="Region" filter_name="Region"/>
          
        </div>
      </div>
    </div>

    <Box className='mt-2 mx-2 h-full'>
      {/* column change*/}
      <div className='flex justify-start items-start space-x-24'>
      <div>
      <button 
        onClick={() => setDropdown(!dropdown)}
        className="text-white mb-4 bg-[#8884d8] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center" type="button"
      >
        Column Select 
      </button>
      <div  className={`${!dropdown ? 'hidden': '' } overflow-y-auto overflow-x-hidden fixed bottom-12 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}>
      <div className="relative p-4 w-full max-w-2xl max-h-full flex justify-center items-center">
        <div className="relative bg-gray-200 rounded-lg shadow "> 
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900">
                    Columns
                </h3> 
            </div>
            <div className="z-50 bg-gray-300 divide-y divide-gray-700 rounded-lg shadow w-44 h-1/2">
              {table.getAllLeafColumns().map(column => {
                return (
                  <div key={column.id} className="px-1">
                    <label>
                      <input
                        {...{
                          type: 'checkbox',
                          checked: column.getIsVisible(),
                          onChange: column.getToggleVisibilityHandler(),
                        }}
                      />{' '}
                      {column.id}
                    </label>
                  </div>
                )
              })}
            </div>
            <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button onClick={()=>setDropdown(false)} data-modal-hide="default-modal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Close</button>
            </div>
        </div>
      </div>
      </div>
      </div>
      <div className='mr-24 flex border-4 border-[#8884d8]'>
      {/* Global filter*/}
      <GlobalFilter
        filter={globalFilter}
        setFilter={setGlobalFilter}
      />
    </div>
    </div>
      <Box className="border-solid border-2 border-[#8884d8]" w={table.getTotalSize()}>
        {table.getHeaderGroups().map((headerGroup) => (
          <Box className="flex w-fit" key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <Box className="relative flex items-center justify-center text-center p-2 uppercase" w={header.getSize()} key={header.id}>
                {header.isPlaceholder ? null : (<div>
                  {header.column.getCanGroup() ? (
                          // If the header can be grouped, let's add a toggle
                          <button
                            {...{
                              onClick: header.column.getToggleGroupingHandler(),
                              style: {
                                cursor: 'pointer',
                              },
                            }}
                          >
                            
                            {header.column.getIsGrouped()
                              ? `❌(${header.column.getGroupedIndex()}) `
                              : <Ungroup />}
                          </button>
                        ) : null}{' '}

                {header.column.columnDef.header}
                {header.column.getCanSort() && (
                  <Icon
                    as={SortIcon}
                    mx={3}
                    fontSize={14}
                    onClick={header.column.getToggleSortingHandler()}
                    className='cursor-pointer'
                  />
                )}
                {
                  {
                    asc: " 🔼",
                    desc: " 🔽",
                  }[header.column.getIsSorted()]
                }
                {(header.column.columnDef.header === "Profit" 
                || header.column.columnDef.header === 'Sales'
                || header.column.columnDef.header === 'Discount'
                || header.column.columnDef.header === 'Quantity'
                )  && (
                  <div className='flex justify-center items-center'>
                  <input 
                    type='number'
                    placeholder='Min'
                    className='border-2 border-gray-300 rounded-md p-1 w-2/3'
                    onChange={(e) => {
                      const value = e.target.value;
                      const profit = Number(value);
                      if (profit) {
                        console.log(data);
                        const filteredData = data.filter(d => Number(d.Profit) >= profit);
                        setData(filteredData);
                      } else {
                        setData(Data);
                      }
                    }}
                  />
                  </div>
                )}



                <Box
                  onMouseDown={header.getResizeHandler()}
                  onTouchStart={header.getResizeHandler()}
                  className={`absolute top-0 right-0 w-1 h-full bg-[#8884d8] cursor-col-resize user-select-none touch-action-none ${
                    header.column.getIsResizing() ? "isResizing" : ""
                  }`}
                />
                </div>
                )}
                
              </Box>
            ))}
          </Box>
        ))}
        {table.getRowModel().rows.length ? table.getRowModel().rows.map((row) => (
          <Box className="flex w-fit z-40" key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <Box className="inset-y-1 flex items-center justify-center" w={cell.column.getSize()} key={cell.id}>
                {/* {flexRender(cell.column.columnDef.cell, cell.getContext())} */}
                {cell.getIsGrouped() ? (
                        // If it's a grouped cell, add an expander and row count
                        <>
                          <button
                            {...{
                              onClick: row.getToggleExpandedHandler(),
                              style: {
                                cursor: row.getCanExpand()
                                  ? 'pointer'
                                  : 'normal',
                              },
                            }}
                          >
                            {row.getIsExpanded() ? '👇' : '👉'}{' '}
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )}{' '}
                            ({row.subRows.length})
                          </button>
                        </>
                      ) : cell.getIsAggregated() ? (
                        // If the cell is aggregated, use the Aggregated
                        // renderer for cell
                        flexRender(
                          cell.column.columnDef.aggregatedCell ??
                            cell.column.columnDef.cell,
                          cell.getContext()
                        )
                      ) : cell.getIsPlaceholder() ? null : ( // For cells with repeated values, render null
                        // Otherwise, just render the regular cell
                        flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )
                      )}
              </Box>
            ))}
          </Box>
        )): <Box className="flex w-fit">
          <Box className=" mt-20 h-40 flex items-center justify-center text-xl  text-center" w={1200}>
            No data found
          </Box>
        </Box>  
        }
      </Box>
      <br />
      <Box ml={96} mb={12} className='fixed -bottom-2 right-96 z-0'>
      <ButtonGroup size="sm" isAttached variant="outline">
      <Button 
          onClick={() => table.setPageIndex(0)}
          isDisabled={!table.getCanPreviousPage()}
          className={`mr-4 cursor-pointer ${!table.getCanPreviousPage() ? 'opacity-60 disabled' : ''}`}
        >
          firstpage
        </Button>
        <Button
          onClick={() => table.previousPage()}
          isDisabled={!table.getCanPreviousPage()}
          className={`mr-2 ${!table.getCanPreviousPage() ? 'opacity-60' : ''} `}
        >
          <ArrowRight transform="rotate(180)" />
          Previous
        </Button>
        <Text mb={0} mr={12} ml={12}>
        Page {table.getState().pagination.pageIndex + 1}{" "}
         of{" "}
        {table.getPageCount()}
      </Text>
        <Button
          onClick={() => table.nextPage()}
          isDisabled={!table.getCanNextPage()}
          className={`mr-2 ${!table.getCanNextPage() ? 'opacity-60 ' : ''}`}
        >
          Next
          <ArrowRight />
        </Button>
        
        <Button 
          onClick={() => table.setPageIndex(table.getPageCount()-1)}
          isDisabled={!table.getCanNextPage()}
          className={`mr-4 cursor-pointer ${!table.getCanNextPage() ? 'opacity-60' : ''}`}
        >
          lastpage
        </Button>
      </ButtonGroup>
      </Box>
    </Box>

    </>
  )
}

export default DataTable