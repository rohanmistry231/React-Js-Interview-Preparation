import React, { useState } from 'react';

// Main Learning Points: Rendering and Reconciliation
// React re-renders components when state changes, and reconciliation updates the DOM efficiently.
const RenderingDemo = () => {
    const [color, setColor] = useState('lightblue');

    // Changing state triggers a re-render
    const changeColor = () => {
        setColor(color === 'lightblue' ? 'lightgreen' : 'lightblue');
    };

    return (
        <div>
            <h2>Rendering and Reconciliation</h2>
            <div style={{ backgroundColor: color, padding: '20px', margin: '10px' }}>
                This div changes color on click.
            </div>
            <button onClick={changeColor}>Change Color</button>
            <p>Click the button to trigger a re-render. React reconciles the changes efficiently.</p>
        </div>
    );
};

export default RenderingDemo;