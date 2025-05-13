import React from 'react';

// Main Learning Points: Understanding JSX
// JSX is a syntax extension for JavaScript that looks like HTML but gets compiled to JavaScript.
const UnderstandingJSX = () => {
    const name = "React Learner";
    return (
        <div>
            <h2>Understanding JSX</h2>
            {/* JSX allows embedding expressions using curly braces */}
            <p>Hello, {name}!</p>
            {/* JSX supports HTML-like syntax with attributes */}
            <p style={{ color: 'blue' }}>This is a JSX example.</p>
        </div>
    );
};

export default UnderstandingJSX;