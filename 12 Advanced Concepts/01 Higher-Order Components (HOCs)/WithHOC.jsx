import React from 'react';

// HOC that logs props changes
const withLogger = (WrappedComponent) => {
    return (props) => {
        console.log('Props received:', props);
        return <WrappedComponent {...props} />;
    };
};

// Main Learning Points: Higher-Order Components (HOCs)
// HOCs are functions that take a component and return a new component with additional functionality.
const WithHOC = ({ name }) => {
    return (
        <div>
            <h2>Higher-Order Component Demo</h2>
            <p>Name: {name}</p>
            <p>Check the console for logged props.</p>
        </div>
    );
};

// Wrap the component with the HOC
export default withLogger(WithHOC);