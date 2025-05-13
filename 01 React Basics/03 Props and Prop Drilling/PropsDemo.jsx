import React from 'react';

// Main Learning Points: Props and Prop Drilling
// Child component that receives props
const Child = ({ message }) => {
    return <p>Child says: {message}</p>;
};

// Intermediate component that passes props down (prop drilling)
const Parent = ({ message }) => {
    return (
        <div>
            <h3>Parent Component</h3>
            <Child message={message} />
        </div>
    );
};

// Top-level component that initiates prop passing
const PropsDemo = () => {
    const message = "Hello from Props!";
    return (
        <div>
            <h2>Props and Prop Drilling</h2>
            <Parent message={message} />
        </div>
    );
};

export default PropsDemo;