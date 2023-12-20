import React from 'react';
import './Dashboard.css';
import { DataGrid } from '@mui/x-data-grid';
import { getProduct } from './functions.js';

function Storage() {
    // Sample data for recent orders and sales summary (you can replace this with actual data)
    const storages = [
        { id: 1, name: 'milk', amount: 20, price: 5.0 },
        { id: 2, name: 'apple', amount: 35, price: 6.0 },
        // Add more orders as needed
    ];

    //const data = getProduct()
    //console.log(data)

    const columns = [
        { field: 'name', headerName: 'gredient', width: 150 },       
        { field: 'amount', headerName: 'remain amount', width: 150 },
    ];

    return (
        <div className="dashboard-container">
            <h2>Storage</h2>
            <div className="dashboard-section">
                <div style={{ width: '100%' }}>
                    <div style={{ height: 350, width: '100%' }}>
                        <DataGrid rows={storages} columns={columns} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Storage;