import React, { useState } from 'react';

const getCustomer = async () => {
    try {
        const response = await fetch('http://127.0.0.1:8000/customer_async', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

const getOrder = async () => {
    try {
        const response = await fetch('http://127.0.0.1:8000/order_async', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

const getProduct = async () => {
    try {
        const response = await fetch('http://127.0.0.1:8000/product_async', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export { getCustomer, getOrder, getProduct };