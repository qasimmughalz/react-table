import React, { useMemo } from 'react'
import { useTable , useSortBy } from 'react-table'
import Mock_Data from './mockdata.json'
import { COLUMNS } from './Columns'
import './table.css'

export const SortingTable = ()=>{


    const columns = useMemo(()=> COLUMNS, []) 
    const data = useMemo(()=> Mock_Data , [])

   

    //destructuring from table library
    const { getTableProps , getTableBodyProps , headerGroups , rows, prepareRow } = useTable({
        columns, 
        data
    }, useSortBy)



  

    return (<div>

            <table {...getTableProps()}>
                <thead>
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                        <th                     
                        {...column.getHeaderProps(column.getSortByToggleProps())}
                        >
                        {column.render('Header')}
                        </th>
                    ))}
                    </tr>
                ))}
                </thead>

                <tbody {...getTableBodyProps()}>
                    {
                        rows.map((row)=> {
                            prepareRow(row)
                            return(
                                <tr {...row.getRowProps()}>
                                    {
                                        row.cells.map( cell => {
                                         return <td {...cell.getCellProps()}> {cell.render('Cell')} </td>
                                        })
                                    }
                                   
                                </tr>
                            ) 
                        })
                    }
                   

                </tbody>
            </table>




    </div>)


}