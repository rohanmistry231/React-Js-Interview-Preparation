import React, { useState } from 'react';

// Child component that only re-renders when its props change
const StaticChild = ({ text }) => {
    console.log('StaticChild rendered');
    return <p>{text}</p>;
};

// Main Learning Points: Avoiding Unnecessary Renders
// Split state and avoid passing unnecessary props to prevent re-renders.
const AvoidUnnecessaryRenders = () => {
    const [counter, setCounter] = useState(0);
    const [otherState, setOtherState] = useState('Static Text');

    return (
        <div>
            <h2>Avoiding Unnecessary Renders</h2>
            <p>Counter: {counter}</p>
            <button onClick={() => setCounter(counter + 1)}>
                Increment Counter
            </button>
            <StaticChild text={otherState} />
            <p>StaticChild only re-renders if its props change. Check the console for render logs.</p>
        </div>
    );
};

export default AvoidUnnecessaryRenders;