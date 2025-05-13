import React, { createContext, useContext, useState } from 'react';

// Create a context for the compound component
const ToggleContext = createContext();

// Compound component children
const ToggleOn = ({ children }) => {
    const { on } = useContext(ToggleContext);
    return on ? children : null;
};

const ToggleOff = ({ children }) => {
    const { on } = useContext(ToggleContext);
    return on ? null : children;
};

const ToggleButton = () => {
    const { on, toggle } = useContext(ToggleContext);
    return <button onClick={toggle}>{on ? 'Turn Off' : 'Turn On'}</button>;
};

// Main Learning Points: Compound Components
// Compound Components share state implicitly via context, allowing flexible composition.
const CompoundComponentsDemo = () => {
    const [on, setOn] = useState(false);
    const toggle = () => setOn(!on);

    return (
        <ToggleContext.Provider value={{ on, toggle }}>
            <div>
                <h2>Compound Components Demo</h2>
                <ToggleButton />
                <ToggleOn><p>The toggle is ON</p></ToggleOn>
                <ToggleOff><p>The toggle is OFF</p></ToggleOff>
            </div>
        </ToggleContext.Provider>
    );
};

export default CompoundComponentsDemo;