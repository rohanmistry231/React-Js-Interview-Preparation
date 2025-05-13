import React, { useState } from 'react';

// Main Learning Points: Local State with useState
// useState manages state within a single component.
const LocalState = () => {
    const [name, setName] = useState('');

    return (
        <div>
            <h2>Local State with useState</h2>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
            />
            <p>Hello, {name || 'Guest'}!</p>
        </div>
    );
};

export default LocalState;