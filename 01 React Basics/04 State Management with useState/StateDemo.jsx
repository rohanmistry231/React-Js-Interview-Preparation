import React, { useState } from 'react';

// Main Learning Points: State Management with useState
const StateDemo = () => {
    // useState hook to manage a counter state
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>State Management with useState</h2>
            <p>Count: {count}</p>
            {/* Update state using setCount */}
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    );
};

export default StateDemo;