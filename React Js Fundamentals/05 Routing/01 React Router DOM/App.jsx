import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'https://cdn.jsdelivr.net/npm/react-router-dom@6.22.0/dist/umd/react-router-dom.development.js';
import Home from './Home.jsx';
import Dashboard from './Dashboard.jsx';
import Profile from './Profile.jsx';
import ProtectedRoute from './ProtectedRoute.jsx';

// Lazy load the Settings component
const Settings = React.lazy(() => Promise.resolve({ default: window.Settings }));

// Main Learning Points: React Router DOM and Route Configuration
// React Router DOM enables client-side routing; Route configuration defines the app's navigation structure.
const App = () => {
    return (
        <Router>
            <div>
                <nav style={{ marginBottom: '20px' }}>
                    <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
                    <Link to="/dashboard" style={{ marginRight: '10px' }}>Dashboard</Link>
                    <Link to="/profile?name=Guest" style={{ marginRight: '10px' }}>Profile</Link>
                    <Link to="/settings">Settings</Link>
                </nav>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dashboard/*" element={<Dashboard />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route
                        path="/settings"
                        element={
                            <ProtectedRoute>
                                <Suspense fallback={<div>Loading Settings...</div>}>
                                    <Settings />
                                </Suspense>
                            </ProtectedRoute>
                        }
                    />
                </Routes>
            </div>
        </Router>
    );
};

export default App;