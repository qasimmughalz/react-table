import React, { useMemo } from "react";
import { useTable, useGlobalFilter , useFilters} from "react-table";
import Mock_Data from "./mockdata.json";
import { COLUMNS } from "./Columns";
import "./table.css";
import { GlobalFilterFunction } from "./GlobalFilterFunction";

export const FilteringColumn = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => Mock_Data, []);

  //destructuring from table library
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow , state, setGlobalFilter} =
    useTable(
      {
        columns,
        data,
      },
      useFilters
    );

    const { globalfilter } = state

  return (
    <div>
        <GlobalFilterFunction  filter={globalfilter} setFilter={setGlobalFilter} ></GlobalFilterFunction>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}
                 <div> {column.canFilter ? column.render('Filter') : null}  </div>    </th>
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
                  return (
                    <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
