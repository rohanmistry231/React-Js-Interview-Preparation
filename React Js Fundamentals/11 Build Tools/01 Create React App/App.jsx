import React from 'react';

// A simple React app for build tool demonstrations
const App = () => {
    // Access an environment variable (simulated for this demo)
    const apiKey = process.env.REACT_APP_API_KEY || 'default-api-key';

    return (
        <div>
            <h1>React Build Tools Demo</h1>
            <p>API Key (from environment): {apiKey}</p>
            <p>This app is used to demonstrate various build tool configurations.</p>
        </div>
    );
};

export default App;