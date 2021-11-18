import React, { useMemo } from "react";
import { useTable } from "react-table";
import MOCK_DATA from "../mockdata/MOCK_DATA.json";
import { COLUMNS } from "./columns";
import './table.css'

const Table = () => {
  //Add hooks and dependency for no rerenders and recalculations

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const tableInstance = useTable({
    columns,
    data,
  });

  //HTML TABLE

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;
  return (
      <div className='table-wrapper'>
    <table {...getTableProps} className='fl-table'>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")} </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
    </div>
  );
};

export default Table;
