import React, { useEffect, useState } from 'react'
import './Datatable.scss'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../datatablesource';
import { Link, useLocation } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import axios from 'axios';

const Datatable = ({ columns }) => {
    const location = useLocation([]);
    const path = location.pathname.split("/")[1]
    const [list, setList] = useState()
    const { data, loading, error } = useFetch(`http://localhost:8800/api/${path}`)
    useEffect(() => {
        setList(data)
    }, [data])
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8800/api/${path}/${id}`, { withCredentials: true })
        } catch (err) {
            console.log(err)
        }
        setList(list.filter(item => item._id !== id))
    }
    const actionColums = [
        {
            field: "action", headerName: "Action", width: 200, renderCell: (params) => {
                return (
                    <div className='cellAction'>
                        <Link to="/users/test" style={{ textDecoration: 'none' }}>
                            <div className='viewButton'>View</div>
                        </Link>
                        <div className='deleteButton' onClick={() => handleDelete(params.row._id)}>Delete</div>

                    </div>
                )
            }
        }
    ]
    return (
        <div className='datatable'>
            <div className='datatableTitle'>
                {path}
                <Link to={`/${path}/new`} className='link'>
                    Add New
                </Link>
            </div>
            {list && <DataGrid
                className='datagrid'
                rows={list}
                columns={columns.concat(actionColums)}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
                getRowId={(row) => row._id}
            />}
        </div>
    )
}

export default Datatable
