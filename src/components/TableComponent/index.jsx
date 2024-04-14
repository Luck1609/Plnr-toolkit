import {
  flexRender,
  getCoreRowModel,
  getExpandedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  
} from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import propTypes from "prop-types";
import { useState } from "react";
import Loader from "../Loader";
import THeader from "./THeader";
import RowSelector from "./RowSelector";





BaseTable.propTypes = {
  data: propTypes.array.isRequired,
  columns: propTypes.array.isRequired,
  showDetailPanel: propTypes.bool,
  thead: propTypes.shape({
    title: propTypes.any.isRequired,
    position: propTypes.oneOf(["start", "within", "end"]),
    overrideDefaultComponent: propTypes.bool,
    component: propTypes.func,
    btn: propTypes.shape({
      text: propTypes.string,
      action: propTypes.func,
      show: propTypes.bool,
      btnComponent: propTypes.object
    })
  }),
};

export default function BaseTable({ data, columns, thead, selectedRows, showDetailPanel = false, isLoading = true }) {
  const [sorting, setSorting] = useState([]);
  const [columnFilters, setColumnFilters] = useState(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    useState({});
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,

    // getRowCanExpand: showDetailPanel,
    enableExpanding: showDetailPanel,

    getExpandedRowModel: getExpandedRowModel(),

    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });


  return (
    <div className="w-11/12 mx-auto p-4 bg-white rounded dark:bg-default mb-10">
      {thead && <THeader options={thead} table={table} />}
      {selectedRows && (
        <>Rows are available
          <RowSelector rows={table.getFilteredSelectedRowModel().rows} options={selectedRows} />
        </>
      )}

      <div className="">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="border-input">
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <tr>
                <td colSpan={7}>
                  <Loader className="!h-[94px]" />
                </td>
              </tr>
            ) : table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className="border-input"
                >
                  {/* {console.log("table row info", row)} */}
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        {/* <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div> */}
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
