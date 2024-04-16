import { useState} from 'react'
import {
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
import { Box, Button, ButtonGroup, Icon,  Text, } from "@chakra-ui/react";
import columns from '../libs/columns';
import Filters from './Table/Filters';
import SortIcon from './icons/SortIcon';
import { ArrowRight, Ungroup } from 'lucide-react';
import GlobalFilter from './Table/GlobalFilter';
import Form from './Table/Form';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import RegionFilters from './Table/RegionFilter';


const DataTable = () => {
  const [data, setData] = useState(Data);
  const [columnFilters, setColumnFilters] = useState([]);
  const [dropdown, setDropdown] = useState(false);
  const [grouping, setGrouping] = useState([]);
  const [globalFilter, setGlobalFilter] = useState('')
  const [openform, setOpenform] = useState(false);

  const [columnVisibility, setColumnVisibility] = useState({
    "Row_ID": false,
    "Product_Name": true,
    "State": false,
    "Profit": true,
    "Product_ID": true,
    "Order_ID": true,
    "Order_Date": false,
    "Ship_Date": false,
    "Ship_Mode": false,
    "Customer_ID": true,
    "Customer_Name": true,
    "Segment": false,
    "City": true,
    "Region": false,
    "Category": false,
    "Sub-Category": false,
    "Sales": true,
    "Quantity": false,
    "Discount": false,
  });


  const table = useReactTable({
    data,
    columns: columns as any,
    state: {
      columnFilters,
      grouping,
      globalFilter,
      columnVisibility,
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
    onColumnVisibilityChange: setColumnVisibility,
  });

  {/*getting values for  filter dropdown*/}
  const productsNameAll = table.getCoreRowModel().flatRows.map(row => row.getValue("Product_Name"))
  const productsIdAll = table.getCoreRowModel().flatRows.map(row => row.getValue("Product_ID"))
  const ordersIdAll = table.getCoreRowModel().flatRows.map(row => row.getValue("Order_ID"))
  const statesAll = table.getCoreRowModel().flatRows.map(row => row.getValue("State"))

  {/*statesAll contains state names multiple time, so using set to have only unique values*/}
  const newStatesAll = [... new Set(statesAll)]

  {/* creating an object that has state and empty array */}
  const cityInit:any = newStatesAll.reduce((acc:object,cur: any)=>({...acc, [cur]:[]}),{})

  {/*filling the cityInit object with city names for each state*/}
  data.map((row:any) => {
    if(row.State in cityInit){
      cityInit[row.State] = [...new Set([...cityInit[row.State], row.City])]
    }
  }
  )


  const addData = (newData: { order: string; name: string; sales: number; region: string; profit: number; }) => {
    //setOpenform(false)

    {/*get all the order id and then checking if the order id already exists in the table*/}
    const ordersIds = table.getCoreRowModel().flatRows.map(row => row.getValue("Order_ID"))
    const rowIds = table.getCoreRowModel().flatRows.map(row => row.getValue("Row_ID"))

    {/*if the order id does not exist in the table, then add the new data to the table*/}
    if(!ordersIds.includes(newData.order)){
      setData([...data, {
        Row_ID: String(rowIds.length + 1),
        Order_ID: newData.order,
        Product_Name: newData.name,
        Sales: String(newData.sales),
        Region: newData.region,
        Profit: String(newData.profit),
        Order_Date: '',
        Ship_Date: '',
        Ship_Mode: '',
        Customer_ID: '',
        Customer_Name: '',
        Segment: '',
        Country: '',
        City: '',
        State: '',
        Postal_Code: '',
        Product_ID: '',
        Category: '',
        'Sub-Category': '',
        Quantity: '',
        Discount: ''
      }])
      toast.success(`${newData.name} with id ${newData.order} is added to the table`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }
    else {
      {/*if the order id already exists in the table, then show a toast message*/}
      toast.error(`Id ${newData.order} already exists in the table!`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
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
        <RegionFilters columnFilters={columnFilters} setColumnFilters={setColumnFilters} outerData={newStatesAll} innerData={cityInit} />
          
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
    {/*form popup */}
    {/* <div>
      <button 
        onClick={() => setOpenform(true)}
        className="text-white mb-4 bg-[#8884d8] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center" type="button"
      >
        Add Data
      </button>
      <div  className={`${!openform ? 'hidden': '' } overflow-y-auto overflow-x-hidden fixed bottom-12 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}>
        <div className="relative mt-24 mx-96 p-4 w-full max-w-2xl max-h-full flex justify-center items-center ">
          <div className="relative bg-gray-200 rounded-lg shadow transition ease-in-out "> 
            <Form addEvent={addData}/>
          </div>
        </div>
      
      </div>
    </div> */}
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
                {/*min value filtering */}
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
                        const filteredData = data.filter(d => Number(d.Profit) >= profit);
                        setData(filteredData);
                      } else {
                        setData(Data);
                      }
                    }}
                  />
                  </div>
                )}

                {/* resizing the table columns */}
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

        {/* when we have a grouped value */}
        {table.getRowModel().rows.length ? table.getRowModel().rows.map((row) => (
          <Box className="flex w-fit z-40" key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <Box className="inset-y-1 flex items-center justify-center" w={cell.column.getSize()} key={cell.id}>
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
      {/* Pagiation */}
      <Box ml={96} mb={12} className=' bottom-0 right-96 z-0'> {/* if Form is a popup fixed -bottom-2 right-96 z-0 */}
      <ButtonGroup size="sm" isAttached variant="outline">
      <Button 
          onClick={() => table.setPageIndex(0)}
          isDisabled={!table.getCanPreviousPage()}
          className={`mr-4 cursor-pointer ${!table.getCanPreviousPage() ? 'opacity-60 disabled' : ''}`}
        >
          First page
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
          jump to page {" "} <input 
            type='number'
            value={table.getState().pagination.pageIndex + 1}
            min={1}
            onChange={(e) => {
              const value = e.target.value;
              const page = Number(value);
              if (page) {
                table.setPageIndex(page-1);
              }
            }}
            className='w-12 border-2 border-gray-300 rounded-md'
          />{" "}
        (Page {table.getState().pagination.pageIndex + 1}{" "}
         of{" "}
        {table.getPageCount()})
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
          Last page
        </Button>
      </ButtonGroup>
      </Box>
    </Box>
    
    {/* form */}
    <div className="relative bg-gray-200 rounded-lg shadow transition ease-in-out pb-12"> 
    <h2 className='flex justify-center pt-12 text-lg'>Add data to the table</h2>
            <Form addEvent={addData}/>
    </div>
    <ToastContainer
      position="top-center"
      autoClose={5000}
      limit={1}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
    />
    </>
  )
}

export default DataTable