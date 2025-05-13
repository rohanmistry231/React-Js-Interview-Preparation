import React, { useState } from 'react';

// Main Learning Points: Concurrent Rendering
// Concurrent Rendering allows React to prioritize updates, improving user experience for heavy tasks.
const ConcurrentRenderingDemo = () => {
    const [items, setItems] = useState([]);
    const [input, setInput] = useState('');

    const handleAddItems = () => {
        // Simulate a heavy computation
        const newItems = Array.from({ length: 10000 }, (_, i) => `Item ${i + items.length}`);
        setItems([...items, ...newItems]);
    };

    return (
        <div>
            <h2>Concurrent Rendering Demo</h2>
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type while loading..."
            />
            <button onClick={handleAddItems}>Add 10,000 Items</button>
            <p>Item Count: {items.length}</p>
            <p>
                Typing in the input should remain responsive even while adding items. In a real app,
                use startTransition for non-urgent updates.
            </p>
        </div>
    );
};

export default ConcurrentRenderingDemo;