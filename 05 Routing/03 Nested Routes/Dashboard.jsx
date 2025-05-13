import React from 'react';
import { Routes, Route, Link } from 'https://cdn.jsdelivr.net/npm/react-router-dom@6.22.0/dist/umd/react-router-dom.development.js';

// Main Learning Points: Nested Routes
// Nested routes allow for hierarchical routing within a parent route.
const Dashboard = () => {
    return (
        <div>
            <h2>Dashboard</h2>
            <nav style={{ marginBottom: '10px' }}>
                <Link to="overview" style={{ marginRight: '10px' }}>Overview</Link>
                <Link to="stats">Stats</Link>
            </nav>

            <Routes>
                <Route path="overview" element={<div>Dashboard Overview</div>} />
                <Route path="stats" element={<div>Dashboard Stats</div>} />
                <Route path="" element={<div>Please select a sub-route</div>} />
            </Routes>
        </div>
    );
};

export default Dashboard;