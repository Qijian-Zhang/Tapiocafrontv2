import React, { useState } from 'react';
import './SignIn.css';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userType, setUserType] = useState('');
    const auth = useAuth();

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    };

    const handleSubmit = (event, userType) => {
        window.location.href = `http://18.234.195.74.nip.io:5001/?user_type=${userType}`;

        //window.location.href = `http://localhost:5001/?user_type=${userType}`;
        event.preventDefault();
        // Authentication logic here (e.g., API requests, validation)

        // For this example, we'll set isAuthenticated to true when the form is submitted.
        //setIsAuthenticated(true);
        setUserType(userType);

        const userData = {
            email: email, // Replace with actual email obtained from authentication
            type: userType,
        };
        auth.signIn(userData);

    };

    if (isAuthenticated) {
        if (userType === 'staff') {
            return <div className="sign-in-success"><Navigate to="/Dashboard" /></div>;
        } else if (userType === 'customer') {
            return <div className="sign-in-success"><Navigate to="/customerhome" /></div>;
        } else {
            return <div className="sign-in-success"><Navigate to="/storage" /></div>;
        }
    }

    return (
        <div className="sign-in-container">
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit}>

                &nbsp;
                <button type="submit" className="sign-in-button" onClick={(e) => handleSubmit(e, 'customer')}>
                    Sign In As Customer
                </button>
                &nbsp;
                <button type="submit" className="sign-in-button" onClick={(e) => handleSubmit(e, 'staff')}>
                    Sign In As Staff
                </button>
                &nbsp;
                <button type="submit" className="sign-in-button" onClick={(e) => handleSubmit(e, 'manager')}>
                    Sign In As Manager
                </button>
            </form>
        </div>
    );
}

export default SignIn;
