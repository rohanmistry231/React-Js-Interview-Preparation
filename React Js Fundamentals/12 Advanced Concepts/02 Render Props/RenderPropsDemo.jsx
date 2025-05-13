import React, { useState } from 'react';

// Component that uses render props to share state
const MouseTracker = ({ render }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event) => {
        setPosition({ x: event.clientX, y: event.clientY });
    };

    return (
        <div style={{ height: '100px', border: '1px solid #ccc' }} onMouseMove={handleMouseMove}>
            {render(position)}
        </div>
    );
};

// Main Learning Points: Render Props
// Render Props allow a component to share code with other components using a function prop.
const RenderPropsDemo = () => {
    return (
        <div>
            <h2>Render Props Demo</h2>
            <MouseTracker render={({ x, y }) => (
                <p>Mouse Position: ({x}, {y})</p>
            )} />
            <p>Move your mouse over the box to see the position update.</p>
        </div>
    );
};

export default RenderPropsDemo;