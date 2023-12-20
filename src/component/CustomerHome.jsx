import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { Navigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import PastOrders from './PastOrders';
import Home from './Home';

function CustomerHome() {
    const { user } = useAuth();
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    // Redirect to signin page if user is not authenticated
    if (!user) {
        return <Navigate to="/" />;
    }

    return (
        <div className="home-container">
            <h2>Welcome to Tapioca</h2>
            <div className="dashboard-container">
                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChange}>
                                <Tab label="New Order" value="1" />
                                <Tab label="Past Order" value="2" />
                            </TabList>
                        </Box>
                        <TabPanel value="1"> { <Home />} </TabPanel>
                        <TabPanel value="2">{<PastOrders />}</TabPanel>
                    </TabContext>
                </Box>
            </div>
        </div>
    );
}

export default CustomerHome;