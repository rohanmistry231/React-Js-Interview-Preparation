import React, { useContext, createContext } from 'react';

// Create a context
const ThemeContext = createContext();

// Child component that consumes the context
const ThemeConsumer = () => {
    const theme = useContext(ThemeContext);
    return (
        <p>Current Theme: {theme}</p>
    );
};

// Main Learning Points: useContext for Accessing Context
// useContext allows components to consume context values without prop drilling.
const UseContextDemo = () => {
    const theme = 'Dark'; // Context value

    return (
        <ThemeContext.Provider value={theme}>
            <div>
                <h2>useContext Demo</h2>
                <ThemeConsumer />
            </div>
        </ThemeContext.Provider>
    );
};

export default UseContextDemo;