import React from 'react';

// Main Learning Points: Inline Styles
// Inline styles are applied directly in JSX using the style attribute with JavaScript objects.
const InlineStylesDemo = () => {
    const containerStyle = {
        border: '2px solid #f1c40f',
        padding: '15px',
        borderRadius: '5px',
    };

    const titleStyle = {
        color: '#f1c40f',
    };

    const textStyle = {
        color: '#666',
    };

    return (
        <div style={containerStyle}>
            <h2 style={titleStyle}>Inline Styles Demo</h2>
            <p style={textStyle}>This component uses inline styles for styling.</p>
        </div>
    );
};

export default InlineStylesDemo;