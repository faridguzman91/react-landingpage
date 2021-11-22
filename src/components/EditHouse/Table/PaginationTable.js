import React, { useMemo } from "react";
import { useTable, useSortBy, useGlobalFilter, useFilters, usePagination } from "react-table";
import MOCK_DATA from "../mockdata/MOCK_DATA.json";
import { COLUMNS, GROUPED_COLUMNS } from "./columns";
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";
import "./table.css";
import Search from "../Functions/GlobalFilter";
import ColumnFilter from "../Functions/ColumnFilter";

const PaginationTable = () => {
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
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
    },

    //useSortBy table utility
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination,
  );

  const { globalFilter, pageIndex } = state;

  //HTML TABLE

  return (
    <>
      <div className="table-wrapper">
        <Search filter={globalFilter} setFilter={setGlobalFilter} className='searchBar'/>

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
            {page.map((row) => {
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
        <div className='paginationBox'>
        <span className='paginationText'>
            Page{' '}
            <strong>
                {pageIndex + 1} of {pageOptions.length}                
                </strong>    
                </span>
                <button onClick={() => goToPage(0)} disbled={!canPreviousPage}>{'<<'}</button>
        <div className='paginationButtons'>
            <button className='prevButton' onClick={() => previousPage()} disabled={!canPreviousPage}>Previous</button>
            <button className='nextButton' onClick={() => nextPage()} disabled={!canNextPage}>Next</button>
        </div>
      </div>
      </div>
    </>
  );
};

export default PaginationTable;
