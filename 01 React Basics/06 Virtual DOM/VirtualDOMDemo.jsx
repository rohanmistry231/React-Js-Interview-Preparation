import React, { useState } from 'react';

// Main Learning Points: Virtual DOM
// React uses a Virtual DOM to compare changes and update the real DOM efficiently.
const VirtualDOMDemo = () => {
    const [items, setItems] = useState(['Item 1', 'Item 2']);

    // Add a new item to the list, triggering a Virtual DOM diff
    const addItem = () => {
        setItems([...items, `Item ${items.length + 1}`]);
    };

    return (
        <div>
            <h2>Virtual DOM Demo</h2>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <button onClick={addItem}>Add Item</button>
            <p>Adding items updates the Virtual DOM, and React efficiently updates the real DOM.</p>
        </div>
    );
};

export default VirtualDOMDemo;