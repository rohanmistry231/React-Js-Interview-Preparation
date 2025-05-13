import React, { useState, useEffect } from 'react';

// Main Learning Points: useEffect for Handling Side Effects
// useEffect runs after every render to perform side effects like data fetching or DOM updates.
const UseEffectDemo = () => {
    const [count, setCount] = useState(0);

    // useEffect to update document title when count changes
    useEffect(() => {
        document.title = `Count: ${count}`;
        // Cleanup function (optional, runs before the next effect or on unmount)
        return () => {
            document.title = 'React Hooks Demo';
        };
    }, [count]); // Dependency array: effect runs when count changes

    return (
        <div>
            <h2>useEffect Demo</h2>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>
                Increment Count
            </button>
            <p>Check the browser tab title to see the effect.</p>
        </div>
    );
};

export default UseEffectDemo;