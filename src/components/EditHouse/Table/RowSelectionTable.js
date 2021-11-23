import React, { useMemo } from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  useFilters,
  usePagination,
  useRowSelect,
} from "react-table";
import MOCK_DATA from "../mockdata/MOCK_DATA.json";
import { COLUMNS, GROUPED_COLUMNS } from "./columns";
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";
import "./table.css";
import Search from "../Functions/GlobalFilter";
import ColumnFilter from "../Functions/ColumnFilter";
import Checkbox from "../../SignUp/Checkbox";

const RowSelectionTable = () => {
  //Add hooks and dependency for no rerenders and recalculations

  //replace COLUMNS with Grouped COLUMNS for a grouped table

  const columns = useMemo(() => GROUPED_COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);
  const defaultColumn = useMemo(
    () => ({
      // Let's set up our default Filter UI
      Filter: ColumnFilter,
    }),
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    goToPage,
    pageCount,
    prepareRow,
    selectedFlatRows,
    rows,
    state,
    setGlobalFilter,
    setPageSize,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },

      // manualPagination : true,
      // pageCount: -1,
      defaultColumn,
    },

    //useSortBy table utility

    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination,
    useRowSelect,
  hooks => {
  hooks.visibleColumns.push((columns) => [
    // Let's make a column for selection
    {
      id: "selection",
      // The header can use the table's getToggleAllRowsSelectedProps method
      // to render a checkbox
      Header: ({ getToggleAllRowsSelectedProps }) => (
        <div>
          <Checkbox {...getToggleAllRowsSelectedProps()} />
        </div>
      ),
      // The cell can use the individual row's getToggleRowSelectedProps method
      // to the render a checkbox
      Cell: ({ row }) => (
        <div>
          <Checkbox {...row.getToggleRowSelectedProps()} />
        </div>
      ),
    },
    ...columns,
  ]);
},

  );

  const { globalFilter, pageIndex, pageSize } = state;
  const firstPageRows = rows.slice(0, 10);

  //HTML TABLE

  return (
    <>
      <div className="table-wrapper">
        <Search
          filter={globalFilter}
          setFilter={setGlobalFilter}
          className="searchBar"
        />

        <table {...getTableProps} className="fl-table">
          <thead>
            {/* //access to defined header groups in columns.js */}
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")}

                    {/* add column filtering if necessary */}

                    {/* <div>{column.canFilter ? column.render("Filter") : ""}</div> */}

                    <span>
                      {/* if is sorted true => if descending true, up arrow, else down arrow => if sorted is false = '' */}
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <AiFillCaretUp />
                        ) : (
                          <AiFillCaretDown />
                        )
                      ) : (
                        ""
                      )}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {firstPageRows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {/* get access to each cell and render cell */}
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
          {/* to see footer section see filteringtable.js */}
        </table>
        <pre>
          <code>
            {JSON.stringify(
              {
                selectedFlatRows: selectedFlatRows.map((row) => row.original),
              },
              null,
              2
            )}
          </code>
        </pre>

        <div className="paginationBox">
          <span className="paginationText">
            Page{" "}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>
          </span>
          <span className="goTo">
            | Go to page :{" "}
            <input
              type="number"
              defaultValue={pageIndex + 1}
              onChange={(e) => {
                const pageNumber = e.target.value
                  ? Number(e.target.value) - 1
                  : 0;
                goToPage(pageNumber);
              }}
              style={{ width: "50px" }}
            />
          </span>
          <select
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
          >
            {[10, 25, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show quantity: {pageSize}
              </option>
            ))}
          </select>

          <div className="paginationButtons">
            <button
              className="firstPage"
              onClick={() => goToPage(0)}
              disabled={!canPreviousPage}
            >
              {"<<"}
            </button>
            <button
              className="prevButton"
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
            >
              Previous
            </button>
            <button
              className="nextButton"
              onClick={() => nextPage()}
              disabled={!canNextPage}
            >
              Next
            </button>
            <button
              className="lastPage"
              onClick={() => goToPage(pageCount - 1)}
              disabled={!canNextPage}
            >
              {">>"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RowSelectionTable;
