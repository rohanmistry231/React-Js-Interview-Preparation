import React from 'react';
import { useSearchParams } from 'https://cdn.jsdelivr.net/npm/react-router-dom@6.22.0/dist/umd/react-router-dom.development.js';

// Main Learning Points: Query Parameters
// Query parameters allow passing data via the URL, accessed using useSearchParams.
const Profile = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const name = searchParams.get('name') || 'Guest';

    const updateName = (newName) => {
        setSearchParams({ name: newName });
    };

    return (
        <div>
            <h2>Profile Page</h2>
            <p>Welcome, {name}!</p>
            <input
                type="text"
                placeholder="Enter new name"
                onChange={(e) => updateName(e.target.value)}
            />
            <p>Update the name to see the query parameter change in the URL.</p>
        </div>
    );
};

export default Profile;