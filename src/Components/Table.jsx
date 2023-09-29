import React, { useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getSortedRowModel,
  getPaginationRowModel,
} from "@tanstack/react-table";

const Table = ({ data }) => {
  const columns = [
    {
      header: "ID",
      accessorKey: "id",
    },
    {
      header: "Avatar Name",
      accessorKey: "avatarname",
    },
    {
      header: "Performance Score",
      accessorKey: "performancescore",
    },
  ];
  const [sorting, setSorting] = useState([]);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      sorting: sorting,
    },
    onSortingChange: setSorting,
  });
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            {table.getHeaderGroups().map((headergroup) =>
              headergroup.headers.map((header) => (
                <th
                  onClick={header.column.getToggleSortingHandler()}
                  className="theading"
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))
            )}
          </tr>
        </thead>
        <tbody>
          {data
            ? table.getRowModel().rows.map((row) => (
                <tr className="trow">
                  {row.getVisibleCells().map((cell) => (
                    <td className="tdata">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))
            : null}
        </tbody>
      </table>
      <div>
        {data ? (
          <>
            <button
              disabled={!table.getCanPreviousPage()}
              onClick={() => table.previousPage()}
              className="addbtn"
            >
              Prev Page
            </button>
            <button
              disabled={!table.getCanNextPage()}
              onClick={() => table.nextPage()}
              className="addbtn"
            >
              Next Page
            </button>
          </>
        ) : null}
      </div>
    </>
  );
};

export default Table;
