import React, { useState, useEffect } from 'react';

// A simple counter component for testing
const Counter = () => {
    const [count, setCount] = useState(0);
    const [data, setData] = useState(null);

    // Simulate an API call
    useEffect(() => {
        // In a real app, this would be a fetch/axios call
        const fetchData = async () => {
            const response = { data: 'Mocked Data' }; // Simulated API response
            setData(response.data);
        };
        fetchData();
    }, []);

    return (
        <div>
            <h2>Counter Component</h2>
            <p data-testid="count">Count: {count}</p>
            <button data-testid="increment" onClick={() => setCount(count + 1)}>
                Increment
            </button>
            <p data-testid="api-data">API Data: {data || 'Loading...'}</p>
        </div>
    );
};

export default Counter;