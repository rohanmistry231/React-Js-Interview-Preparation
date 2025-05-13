import React, { useState, useEffect } from 'react';

// Main Learning Points: State Persistence
// Persist state across page reloads using localStorage.
const StatePersistence = () => {
    // Initialize state from localStorage if it exists
    const [note, setNote] = useState(() => {
        return localStorage.getItem('note') || '';
    });

    // Save to localStorage whenever note changes
    useEffect(() => {
        localStorage.setItem('note', note);
    }, [note]);

    return (
        <div>
            <h2>State Persistence</h2>
            <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Write a note (persisted in localStorage)"
                rows="3"
                style={{ width: '100%' }}
            />
            <p>Refresh the page to see the note persist.</p>
        </div>
    );
};

export default StatePersistence;