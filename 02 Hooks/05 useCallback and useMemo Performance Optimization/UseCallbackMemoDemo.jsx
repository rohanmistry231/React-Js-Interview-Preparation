import React, { useState, useCallback, useMemo } from 'react';

// Child component that receives a memoized callback
const ChildComponent = ({ onClick }) => {
    console.log('ChildComponent rendered');
    return <button onClick={onClick}>Click Me</button>;
};

// Main Learning Points: useCallback and useMemo for Performance Optimization
// useCallback memoizes functions, useMemo memoizes computed values.
const UseCallbackMemoDemo = () => {
    const [count, setCount] = useState(0);
    const [otherCount, setOtherCount] = useState(0);

    // useCallback: Memoize the callback function to prevent unnecessary re-renders of ChildComponent
    const handleClick = useCallback(() => {
        setCount(count + 1);
    }, [count]);

    // useMemo: Memoize a computed value to avoid expensive calculations on every render
    const expensiveCalculation = useMemo(() => {
        console.log('Calculating expensive value...');
        return count * 2;
    }, [count]);

    return (
        <div>
            <h2>useCallback and useMemo Demo</h2>
            <p>Count: {count}</p>
            <p>Expensive Calculation (count * 2): {expensiveCalculation}</p>
            <ChildComponent onClick={handleClick} />
            <p>Other Count: {otherCount}</p>
            <button onClick={() => setOtherCount(otherCount + 1)}>
                Increment Other Count
            </button>
            <p>Click "Increment Other Count" to see ChildComponent doesn't re-render unnecessarily.</p>
        </div>
    );
};

export default UseCallbackMemoDemo;