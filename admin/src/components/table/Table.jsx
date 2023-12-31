import React from 'react'
import "./Table.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const List = () => {
    const rows = [
        {
            id: 122345,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPag433OEz__K6ALE4kNqj3E0w8fWa13lcNw&usqp=CAU",
            product: "Alexa",
            customer: 'John Smitth',
            date: '1 March',
            amount: 785,
            method: "Cash on delivery",
            status: "Approved"
        },
        {
            id: 122346,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPag433OEz__K6ALE4kNqj3E0w8fWa13lcNw&usqp=CAU",
            customer: 'John Smitth',
            product: "Alexa",
            date: '1 March',
            amount: 785,
            method: "Cash on delivery",
            status: "Pending"
        }
    ]
    return (
        <TableContainer component={Paper} className='table'>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className='tableCell'>Tracking ID</TableCell>
                        <TableCell className='tableCell'>Product</TableCell>
                        <TableCell className='tableCell'>Customer</TableCell>
                        <TableCell className='tableCell'>Date</TableCell>
                        <TableCell className='tableCell'>Amount</TableCell>
                        <TableCell className='tableCell'>Payment Method</TableCell>
                        <TableCell className='tableCell'>Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell className='tableCell'>{row.id}</TableCell>
                            <TableCell className='tableCell'>
                                <div className='cellWrapper'>
                                    <img src={row.img} alt='' className='image' />
                                    {row.product}
                                </div>
                            </TableCell>
                            <TableCell className='tableCell'>{row.customer}</TableCell>
                            <TableCell className='tableCell'>{row.date}</TableCell>
                            <TableCell className='tableCell'>{row.amount}</TableCell>
                            <TableCell className='tableCell'>{row.method}</TableCell>
                            <TableCell className='tableCell'>
                                <span className={`status ${row.status}`}>{row.status}</span>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default List
