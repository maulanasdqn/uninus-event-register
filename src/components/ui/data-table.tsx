import {
  SortingState,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ReactElement, useState } from "react";
import {
  ColumnDef,
  ExpandedState,
  OnChangeFn,
  PaginationState,
  Row,
  RowModel,
  RowSelectionState,
  Table,
  Updater,
} from "@tanstack/react-table";
import { ChangeEventHandler } from "react";

export type TDataTable<T extends Record<string, unknown>> = {
  data: T[];
  meta?: {
    total: number;
    perPage: number;
    page: number;
    prev: boolean;
    next: boolean;
  };
  columns: ColumnDef<T>[];
  handleSearch?: ChangeEventHandler<HTMLInputElement>;
  setPagination?: (updater: Updater<PaginationState>) => void;
  isLoading?: boolean;
  onPaginationChange?: OnChangeFn<PaginationState>;
  manualPagination?: boolean;
  manualExpanding?: boolean;
  manualSorting?: boolean;
  manualFiltering?: boolean;
  manualGrouping?: boolean;
  pageCount?: number;
  autoResetPageIndex?: boolean;
  resetPagination?: (defaultState?: boolean) => void;
  setPageIndex?: (updater: Updater<number>) => void;
  resetPageIndex?: (defaultState?: boolean) => void;
  setPageSize?: (updater: Updater<number>) => void;
  resetPageSize?: (defaultState?: boolean) => void;
  setPageCount?: (updater: Updater<number>) => void;
  getPageOptions?: () => number[];
  getCanPreviousPage?: () => boolean;
  getCanNextPage?: () => boolean;
  previousPage?: () => void;
  nextPage?: () => void;
  getPageCount?: () => number;
  getPrePaginationRowModel?: () => RowModel<T>;
  getPaginationRowModel?: () => RowModel<T>;
  toggleExpanded?: (expanded?: boolean) => void;
  getIsExpanded?: () => boolean;
  getIsAllParentsExpanded?: () => boolean;
  getCanExpand?: () => boolean;
  getToggleExpandedHandler?: () => () => void;
  onExpandedChange?: OnChangeFn<ExpandedState>;
  autoResetExpanded?: boolean;
  enableExpanding?: boolean;
  getExpandedRowModel?: (table: Table<T>) => () => RowModel<T>;
  getIsRowExpanded?: (row: Row<T>) => boolean;
  getRowCanExpand?: (row: Row<T>) => boolean;
  paginateExpandedRows?: boolean;
  setExpanded?: (updater: Updater<ExpandedState>) => void;
  toggleAllRowsExpanded?: (expanded?: boolean) => void;
  resetExpanded?: (defaultState?: boolean) => void;
  getCanSomeRowsExpand?: () => boolean;
  getToggleAllRowsExpandedHandler?: () => (event: unknown) => void;
  getIsSomeRowsExpanded?: () => boolean;
  getIsAllRowsExpanded?: () => boolean;
  getExpandedDepth?: () => number;
  getPreExpandedRowModel?: () => RowModel<T>;
  enableRowSelection?: boolean | ((row: Row<T>) => boolean);
  enableMultiRowSelection?: boolean | ((row: Row<T>) => boolean);
  enableSubRowSelection?: boolean | ((row: Row<T>) => boolean);
  onRowSelectionChange?: OnChangeFn<RowSelectionState>;
  setRowSelection?: (updater: Updater<RowSelectionState>) => void;
  resetRowSelection?: (defaultState?: boolean) => void;
  toggleAllRowsSelected?: (value: boolean) => void;
  getSelectedRowModel?: () => RowModel<T>;
  getIsSelected?: () => boolean;
  toggleSelected?: (value?: boolean) => void;
  getToggleSelectedHandler?: () => (event: unknown) => void;
  enableGlobalFilter?: boolean;
};

export const DataTable = <T extends Record<string, unknown>>(
  props: TDataTable<T>,
): ReactElement => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const table = useReactTable({
    data: props.data,
    columns: props.columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    onPaginationChange: () => {},
    manualSorting: props.manualSorting,
    manualExpanding: props.manualExpanding,
    manualFiltering: props.manualFiltering,
    manualGrouping: props.manualGrouping,
    manualPagination: props.manualPagination,
  });

  const Icon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      aria-hidden="true"
      className="w-4 h-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
      ></path>
    </svg>
  );

  return (
    <div className="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md bg-clip-border rounded-xl">
      <table className="w-full text-left table-auto min-w-max">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="p-4 border-b border-blue-gray-100 bg-blue-gray-50"
                >
                  <div
                    {...{
                      className: "flex items-center",
                      onClick: header.column.getToggleSortingHandler(),
                    }}
                  >
                    {header.isPlaceholder ? null : (
                      <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                      </p>
                    )}
                    {{
                      asc: <Icon />,
                      desc: <Icon />,
                    }[header.column.getIsSorted() as string] ?? null}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="even:bg-blue-gray-50/50">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="p-4">
                  <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </p>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
