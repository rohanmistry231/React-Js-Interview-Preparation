import React, { useState } from 'react';

// Child component with frequent re-renders
const ExpensiveChild = ({ value }) => {
    console.log('ExpensiveChild rendered');
    // Simulate an expensive computation
    let result = 0;
    for (let i = 0; i < 1000000; i++) {
        result += value;
    }
    return <p>Computed Value: {result}</p>;
};

// Optimized child using React.memo
const OptimizedChild = React.memo(ExpensiveChild);

// Main Learning Points: Optimizing Re-renders with Profiler
// Use Profiler to identify and optimize components with frequent or expensive re-renders.
const ProfilerDemo = () => {
    const [value, setValue] = useState(1);
    const [otherState, setOtherState] = useState(0);

    return (
        <div>
            <h2>Optimizing Re-renders with Profiler</h2>
            <p>Value: {value}</p>
            <button onClick={() => setValue(value + 1)}>
                Increment Value
            </button>
            <button onClick={() => setOtherState(otherState + 1)}>
                Increment Other State
            </button>
            <h3>Unoptimized</h3>
            <ExpensiveChild value={value} />
            <h3>Optimized (with React.memo)</h3>
            <OptimizedChild value={value} />
            <p>
                Check the console for render logs. In a real app, use React Profiler to measure render times and optimize components like ExpensiveChild.
            </p>
        </div>
    );
};

export default ProfilerDemo;