import React, { createContext, useContext, useState } from 'react';

// Create a context for global state
const UserContext = createContext();

// Child component that consumes the context
const UserProfile = () => {
    const { user, setUser } = useContext(UserContext);
    return (
        <div>
            <h3>User Profile</h3>
            <p>User: {user}</p>
            <input
                type="text"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                placeholder="Update user name"
            />
        </div>
    );
};

// Main Learning Points: Global State with Context API
// Context API allows sharing state globally without prop drilling.
const GlobalStateContext = () => {
    const [user, setUser] = useState('Guest');

    return (
        <UserContext.Provider value={{ user, setUser }}>
            <div>
                <h2>Global State with Context API</h2>
                <UserProfile />
            </div>
        </UserContext.Provider>
    );
};

export default GlobalStateContext;