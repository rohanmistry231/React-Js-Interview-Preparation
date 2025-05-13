import React, { useState, useEffect } from 'react';

// Main Learning Points: Custom Hooks
// Custom hooks allow you to extract and reuse stateful logic across components.

// Custom hook to get window size
const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Initial call to set size

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
};

// Component using the custom hook
const CustomHookDemo = () => {
    const { width, height } = useWindowSize();

    return (
        <div>
            <h2>Custom Hook Demo</h2>
            <p>Window Width: {width}px</p>
            <p>Window Height: {height}px</p>
            <p>Resize the window to see the values update.</p>
        </div>
    );
};

export default CustomHookDemo;