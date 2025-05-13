import React, { useState, useMemo, useCallback } from 'react';

// Child component memoized with React.memo to prevent unnecessary renders
const ChildComponent = React.memo(({ count, onIncrement }) => {
    console.log('ChildComponent rendered');
    return (
        <div>
            <p>Child Count: {count}</p>
            <button onClick={onIncrement}>Increment Child Count</button>
        </div>
    );
});

// Main Learning Points: Memoization (React.memo, useMemo, useCallback)
// Memoization prevents unnecessary renders and computations for better performance.
const MemoizationDemo = () => {
    const [parentCount, setParentCount] = useState(0);
    const [childCount, setChildCount] = useState(0);

    // useCallback: Memoize the callback to prevent ChildComponent re-renders
    const handleIncrementChild = useCallback(() => {
        setChildCount((prev) => prev + 1);
    }, []);

    // useMemo: Memoize an expensive computation
    const expensiveCalculation = useMemo(() => {
        console.log('Running expensive calculation...');
        return parentCount * 2;
    }, [parentCount]);

    return (
        <div>
            <h2>Memoization Demo</h2>
            <p>Parent Count: {parentCount}</p>
            <p>Expensive Calculation (parentCount * 2): {expensiveCalculation}</p>
            <button onClick={() => setParentCount(parentCount + 1)}>
                Increment Parent Count
            </button>
            <ChildComponent count={childCount} onIncrement={handleIncrementChild} />
            <p>Check the console to see render logs. ChildComponent only re-renders when childCount changes.</p>
        </div>
    );
};

export default MemoizationDemo;