import React from 'react';
import './Dashboard.css';
import { DataGrid} from "@mui/x-data-grid";
import { getCustomer } from './functions.js';
import { Button } from '@mui/material';

function Dashboard() {
    const [selection, setSelection] = React.useState([]);
    const [recentOrders, setRecentOrders] = React.useState([
        { id: 0, orderNumber: '12345', customer: 'John Doe', totalAmount: 50.0, status: 'Received' },
        { id: 1, orderNumber: '12346', customer: 'Jane Smith', totalAmount: 75.0, status: 'Received' },
        // Add more orders as needed
    ]);

    const totalSales = recentOrders.reduce((total, order) => total + order.totalAmount, 0);

    const columns = [
        { field: 'orderNumber', headerName: 'order number', width: 150 },       
        { field: 'totalAmount', headerName: 'total amount', width: 150 },
        { field: 'customer', headerName: 'customer email', width: 150 },
        { field: 'status', headerName: 'status', width: 150 },
    ];

    //const customer = getCustomer()

    const handleSubmit = () => {
        const updatedOrders = [...recentOrders];
        for (let i = 0; i < selection.length; i++) {
            updatedOrders[selection[i]].status = 'Completed';
        }
        setRecentOrders(updatedOrders);
        setSelection([]);
    };

    return (
        <div className="dashboard-container">
            <h2>Orders</h2>
            <div className="dashboard-section">
                <div style={{ width: '100%' }}>
                    <div style={{ height: 350, width: '100%' }}>
                        <DataGrid checkboxSelection rows={recentOrders} columns={columns}
                            onRowSelectionModelChange={(newSelectionModel) => {
                                setSelection(newSelectionModel)
                            }}/>
                    </div>
                    <button type="submit" className="sign-in-button" onClick={(e) => handleSubmit(e)}>
                        Complete
                    </button>
                </div>
            </div>
            <div className="dashboard-section">
                <h3>Sales Summary</h3>
                <p>Total Sales: ${totalSales.toFixed(2)}</p>
                {/* You can add more sales-related information here */}
            </div>
        </div>


    );
}

export default Dashboard;