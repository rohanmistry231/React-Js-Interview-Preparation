import React, { useRef } from 'react';

// Main Learning Points: useRef for Referencing DOM Elements
// useRef can hold a mutable reference to a DOM element or a value that persists across renders.
const UseRefDemo = () => {
    const inputRef = useRef(null);

    const focusInput = () => {
        // Access the DOM element and focus it
        inputRef.current.focus();
    };

    return (
        <div>
            <h2>useRef Demo</h2>
            <input ref={inputRef} type="text" placeholder="Click button to focus" />
            <button onClick={focusInput}>Focus Input</button>
        </div>
    );
};

export default UseRefDemo;