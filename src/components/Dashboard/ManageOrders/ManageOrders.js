import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useAuth from '../../../hooks/useAuth';
import { CircularProgress } from '@mui/material';

const ManageOrders = () => {
    const { isLoading} = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://mysterious-wildwood-35872.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => {
                setOrders(data)
            });
    }, []);

    const handleDelete = id => {
        const url = `https://mysterious-wildwood-35872.herokuapp.com/orders/${id}`;
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount) {
                        window.alert('successfully cancled!');
                        const remainingOrders = orders.filter(user => user._id != id);
                        setOrders(remainingOrders);
                    }

                })
        }

    }
    const handlePending = id =>{
        const url = `https://mysterious-wildwood-35872.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orders)
        })
            .then(res => res.json())
            .then(data => {
                console.log(orders)
                // if (data.modifiedCount) {
                
                  
                // }   
                
            })
            // id.preventDefault();
            window.location.reload();
        
    }
    return (
        <div>
            <h2>All Orders: {orders.length}</h2>
            <div className="table-container container">
                <TableContainer component={Paper}>
                    <Table sx={{}} aria-label="orders table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Customer's Name</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Address</TableCell>
                                <TableCell>Phone</TableCell>
                                <TableCell>Product Name</TableCell>
                                <TableCell>Product Price</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {orders.map((row) => (
                                <TableRow
                                    key={row._id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell >{row.email}</TableCell>
                                    <TableCell >{row.address}</TableCell>
                                    <TableCell >{row.phone}</TableCell>
                                    <TableCell >{row.productName}</TableCell>
                                    <TableCell >{row.price}</TableCell>
                                    <TableCell ><button  onClick={() =>handlePending(row._id)} className="btn btn-info text-white fw-bold" >{row.status}</button></TableCell>
                                    <TableCell ><Button onClick={() => handleDelete(row._id)}> <span className="cross"><i className="far fa-times-circle"></i></span>Delete</Button></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
};

export default ManageOrders;