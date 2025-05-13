import React, { useState } from 'react';

// Main Learning Points: useState for Managing State
// useState allows you to add state to functional components.
const UseStateDemo = () => {
    const [text, setText] = useState('Initial Text');

    return (
        <div>
            <h2>useState Demo</h2>
            <p>{text}</p>
            <button onClick={() => setText('Text Updated!')}>
                Update Text
            </button>
        </div>
    );
};

export default UseStateDemo;