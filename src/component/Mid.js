import React, { useEffect } from 'react';
import { useAuth } from './AuthContext';
import { useLocation, Navigate } from 'react-router-dom';

function Mid() {
    const location = useLocation();
    const { search } = location;
    const { signIn, user } = useAuth();

    useEffect(() => {
        const fetchDataAndSignIn = async () => {
            try {
                // Parse the query parameters
                const queryParams = new URLSearchParams(search);
                const authParam = queryParams.get('auth');
                const emailParam = queryParams.get('email');

                // Check if the 'auth' parameter is 'true'
                if (authParam) {
                    // Replace this with your actual sign-in logic
                    const userData = {
                        email: emailParam, // Replace with actual email obtained from authentication
                        type: authParam,
                    };

                    signIn(userData);
                }
            } catch (error) {
                console.error('Error signing in:', error);
            }
        };

        fetchDataAndSignIn();
    }, [search, signIn]);

    if (user) {
        // Assuming `user.type` contains the userType information
        const userType = user.type;

        // Redirect based on userType
        if (userType === 'staff') {
            return <Navigate to="/Dashboard" />;
        } else if (userType === 'customer') {
            return <Navigate to="/customerhome" />;
        } else {
            return <Navigate to="/storage" />;
        }
    }

    // Your component content while signing in
    return (
        <div>
            Signing in...
        </div>
    );
}

export default Mid;