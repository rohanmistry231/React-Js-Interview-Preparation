import React from 'react';
import { Navigate } from 'https://cdn.jsdelivr.net/npm/react-router-dom@6.22.0/dist/umd/react-router-dom.development.js';

// Main Learning Points: Protected Routes
// Protected routes restrict access to certain routes based on conditions (e.g., authentication).
const ProtectedRoute = ({ children }) => {
    const isAuthenticated = true; // Simulated authentication check (replace with real logic)

    return isAuthenticated ? children : <Navigate to="/" />;
};

export default ProtectedRoute;