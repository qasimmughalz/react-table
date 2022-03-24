
import { ColumnFilterFunction } from "./ColumnFilterFunction"


export const COLUMNS = [
    {
        Header:'id',
        accessor:'id',
        Filter : ColumnFilterFunction
    },
    {
        Header:'First Name',
        accessor:'first_name',
        Filter : ColumnFilterFunction
    },
    {
        Header:'Last Name',
        accessor:'last_name',
        Filter : ColumnFilterFunction
    },
    {
        Header: 'Email',
        accessor:'email',
        Filter : ColumnFilterFunction
    },
    {
        Header: 'Age',
        accessor:'age',
        Filter : ColumnFilterFunction
    },
    {
        Header: 'Country',
        accessor:'country',
        Filter : ColumnFilterFunction
    },
    {
        Header: 'Phone',
        accessor:'phone',
        Filter : ColumnFilterFunction
    },

]