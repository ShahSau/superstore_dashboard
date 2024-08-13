import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    useReactTable,
  } from "@tanstack/react-table";
import { useState } from "react";
import DebouncedInput from "./DebouncedInput";
import { Search } from "lucide-react";


const TanStackTable = ({
    data: USERS }: { data: any[] }) => {
    const columnHelper = createColumnHelper();
  
    const columns = [
      columnHelper.accessor("", {
        id: "ID",
        cell: (info) => <span>{info.row.index + 1}</span>,
        header: "ID",
      }),
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
      columnHelper.accessor("Segment", {
        cell: (info) => <span>{info.getValue()}</span>,
        header: "Segment",
      }),
      columnHelper.accessor("Sales", {
        cell: (info) => <span>{info.getValue()}</span>,
        header: "Sales",
      }),
      columnHelper.accessor("Quantity", {
        cell: (info) => <span>{info.getValue()}</span>,
        header: "Quantity",
      }),
      columnHelper.accessor("Discount", {
        cell: (info) => <span>{info.getValue()}</span>,
        header: "Discount",
      }),
      columnHelper.accessor("Profit", {
        cell: (info) => <span>{info.getValue()}</span>,
        header: "Profit",
      }),
    ];
    const [data] = useState(() => USERS);
    const [globalFilter, setGlobalFilter] = useState("");
  
    const table = useReactTable({
      data,
      columns,
      state: {
        globalFilter,
      },
      getFilteredRowModel: getFilteredRowModel(),
      getCoreRowModel: getCoreRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
    });
  
    return (
      <div className="p-2 max-w-5xl mx-auto text-black fill-gray-100">
        <div className="flex justify-between mb-2">
          <div className="w-full flex items-center gap-1">
            <Search />
            <div className="p-2 bg-transparent outline-none border-b-2 w-1/5 focus:w-1/3 duration-300 border-gray-500">
            <DebouncedInput
              value={globalFilter ?? ""}
              onChange={(value) => setGlobalFilter(String(value))}
              placeholder="Search all columns..."
            />
            </div>
            
          </div>
        </div>
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
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row, i) => (
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
            ) : (
              <tr className="text-center h-32">
                <td colSpan={12}>No Recoard Found!</td>
              </tr>
            )}
          </tbody>
        </table>
        {/* pagination */}
        <div className="flex items-center justify-end mt-2 gap-2">
          <button
            onClick={() => {
              table.previousPage();
            }}
            disabled={!table.getCanPreviousPage()}
            className="p-1 border border-gray-700 px-2 disabled:opacity-30"
          >
            {"<"}
          </button>
          <button
            onClick={() => {
              table.nextPage();
            }}
            disabled={!table.getCanNextPage()}
            className="p-1 border border-gray-700 px-2 disabled:opacity-30"
          >
            {">"}
          </button>
  
          <span className="flex items-center gap-1">
            <div>Page</div>
            <strong>
              {table.getState().pagination.pageIndex + 1} of{" "}
              {table.getPageCount()}
            </strong>
          </span>
          <span className="flex items-center gap-1">
            | Go to page:
            <input
              type="number"
              defaultValue={table.getState().pagination.pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                table.setPageIndex(page);
              }}
              className="border p-1 rounded w-16 bg-transparent"
            />
          </span>
          <select
            value={table.getState().pagination.pageSize}
            onChange={(e) => {
              table.setPageSize(Number(e.target.value));
            }}
            className="p-2 bg-transparent"
          >
            {[10, 20, 30, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  };
  
  export default TanStackTable;
  