import React, { Suspense, useState } from 'react';

// Simulate a lazy-loaded component (in a real app, this would be a separate file)
const LazyComponent = React.lazy(() => Promise.resolve({
    default: () => (
        <div>
            <h3>Lazy Loaded Component</h3>
            <p>This component was loaded lazily to reduce the initial bundle size.</p>
        </div>
    ),
}));

// Main Learning Points: Code Splitting and Lazy Loading Components
// Code splitting and lazy loading reduce the initial bundle size by loading components on demand.
const CodeSplittingLazyLoading = () => {
    const [showComponent, setShowComponent] = useState(false);

    return (
        <div>
            <h2>Code Splitting and Lazy Loading</h2>
            <button onClick={() => setShowComponent(true)}>
                Load Lazy Component
            </button>
            {showComponent && (
                <Suspense fallback={<div>Loading...</div>}>
                    <LazyComponent />
                </Suspense>
            )}
        </div>
    );
};

export default CodeSplittingLazyLoading;