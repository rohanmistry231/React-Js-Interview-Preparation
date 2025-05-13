import React, { useState, useRef } from 'react';

// Main Learning Points: Controlled vs. Uncontrolled Components
// Controlled components manage form data via state; uncontrolled components use refs.
const ControlledUncontrolled = () => {
    // Controlled component state
    const [controlledInput, setControlledInput] = useState('');
    // Uncontrolled component ref
    const uncontrolledInputRef = useRef(null);

    const handleSubmit = () => {
        console.log('Controlled Input:', controlledInput);
        console.log('Uncontrolled Input:', uncontrolledInputRef.current.value);
    };

    return (
        <div>
            <h2>Controlled vs. Uncontrolled Components</h2>
            <div>
                <h3>Controlled Input</h3>
                <input
                    type="text"
                    value={controlledInput}
                    onChange={(e) => setControlledInput(e.target.value)}
                    placeholder="Controlled input"
                />
            </div>
            <div>
                <h3>Uncontrolled Input</h3>
                <input
                    type="text"
                    ref={uncontrolledInputRef}
                    defaultValue=""
                    placeholder="Uncontrolled input"
                />
            </div>
            <button onClick={handleSubmit}>Log Values</button>
        </div>
    );
};

export default ControlledUncontrolled;