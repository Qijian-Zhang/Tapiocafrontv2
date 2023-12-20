import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { Navigate } from 'react-router-dom';
import Select from 'react-select';

function Home() {
    const { user } = useAuth();
    const [coffeeSelection, setCoffeeSelection] = React.useState([]);
    const [fruitSelection, setFruitSelection] = React.useState([]);
    // Redirect to signin page if user is not authenticated
    if (!user) {
        return <Navigate to="/" />;
    }
    // get and filter orders that belongs to the user
    const recentOrders = [
        { orderNumber: '12345', customer: 'yixuanli@gmail.com', totalAmount: 50.0 },
        { orderNumber: '12346', customer: 'Jane Smith', totalAmount: 75.0 },
        // Add more orders as needed
    ];

    const orders = recentOrders.filter((order) => {
        return order.customer === user.email
    });

    const coffeOptions = [
        { value: 'Americano', label: 'Americano' },
        { value: 'Cappuccino', label: 'Cappuccino' },
        { value: 'Espresso', label: 'Espresso' }
    ]

    const fruitOptions = [
        { value: 'Apple', label: 'Apple' },
        { value: 'Strawberry', label: 'Strawberry' },
        { value: 'Blueberry', label: 'Blueberry' },
        { value: 'Rasperberry', label: 'Rasperberry' },
        { value: 'Blackberry', label: 'Blackberry' },
        { value: 'Cherry', label: 'Cherry' }
    ]

    const handleSubmit = (event) => {

    };

    return (
        <div className="dashboard-section">   
            <h4>Coffee</h4>
            <Select
                defaultValue={"Choose your coffee"}
                isMulti
                name="coffee"
                options={coffeOptions}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={(selectedOptions) => {
                    setCoffeeSelection(selectedOptions)
                    console.log(coffeeSelection)
                }}
            />
            <h4>Fruit</h4>
            <Select
                defaultValue={"Choose your fruit"}
                isMulti
                name="fruit"
                options={fruitOptions}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={(selectedOptions) => {
                    setFruitSelection(selectedOptions)
                }}          
            />
            &nbsp;
            <button type="submit" className="sign-in-button" onClick={(e) => handleSubmit(e)}>
                Submit
            </button>
        </div>
    );
}

export default Home;