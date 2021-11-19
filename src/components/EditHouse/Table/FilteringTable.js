import React, { useMemo } from "react";
import { useTable, useSortBy, useGlobalFilter, useFilters } from "react-table";
import MOCK_DATA from "../mockdata/MOCK_DATA.json";
import { COLUMNS, GROUPED_COLUMNS } from "./columns";
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";
import "./table.css";
import Search from "../Functions/GlobalFilter";
import ColumnFilter  from "../Functions/ColumnFilter";


const FilteringTable = () => {
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
)


  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      defaultColumn
    },

    //useSortBy table utility
    useFilters,
    useGlobalFilter,
    useSortBy
  );

  const { globalFilter } = state;

  //HTML TABLE

  return (
    <>
      <div className="table-wrapper">
        <Search filter={globalFilter} setFilter={setGlobalFilter} />

        <table {...getTableProps} className="fl-table">
          <thead>
            {/* //access to defined header groups in columns.js */}
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")}
                    <div>{column.canFilter ? column.render("Filter") : ""}</div>

                 
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
            {rows.map((row) => {
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
          <tfoot>
            {footerGroups.map((footerGroup) => (
              <tr {...footerGroup.getFooterGroupProps()}>
                {
                  //get access to each column
                  footerGroup.headers.map((column) => (
                    <td
                      {...column.getFooterProps(column.getSortByToggleProps())}
                    >
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
                      {column.render("Footer")}
                    </td>
                  ))
                }
              </tr>
            ))}
          </tfoot>
        </table>
      </div>
    </>
  );
};

export default FilteringTable;
