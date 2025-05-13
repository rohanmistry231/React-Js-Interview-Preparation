import React from 'react';

// Main Learning Points: Lazy Loading Routes
// Lazy loading reduces the initial bundle size by loading components on demand.
const Settings = () => {
    return (
        <div>
            <h2>Settings Page</h2>
            <p>This page is lazy-loaded using React.lazy and Suspense.</p>
        </div>
    );
};

export default Settings;