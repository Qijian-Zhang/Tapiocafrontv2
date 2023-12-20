import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { Navigate } from 'react-router-dom';
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

function PastOrders() {
    const { user } = useAuth();

    // Redirect to signin page if user is not authenticated
    if (!user) {
        return <Navigate to="/" />;
    }
    // get and filter orders that belongs to the user
    const recentOrders = [
        { id:1, orderNumber: '12345', customer: 'yixuanli@gmail.com', totalAmount: 50.0 },
        { id: 2, orderNumber: '12346', customer: 'Jane Smith', totalAmount: 75.0 }
    ];

    const orders = recentOrders.filter((order) => {
        return order.customer === user.email
    });

    const columns = [
        { field: 'orderNumber', headerName: 'order number', width: 150 },
        { field: 'totalAmount', headerName: 'total amount', width: 150 },
    ];

    return (
         <div className="dashboard-section">                   
            <div style={{ width: '100%' }}>
                <div style={{ height: 350, width: '100%' }}>
                    <DataGrid rows={orders} columns={columns} />
                </div>
            </div>
        </div>
    );
}

export default PastOrders;