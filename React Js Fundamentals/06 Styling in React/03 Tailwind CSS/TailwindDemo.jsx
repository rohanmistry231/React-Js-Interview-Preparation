import React from 'react';

// Main Learning Points: Tailwind CSS
// Tailwind CSS uses utility-first classes to style components directly in JSX.
const TailwindDemo = () => {
    return (
        <div className="border-2 border-green-500 p-4 rounded-md">
            <h2 className="text-2xl text-green-500">Tailwind CSS Demo</h2>
            <p className="text-gray-600">This component uses Tailwind CSS utility classes for styling.</p>
        </div>
    );
};

export default TailwindDemo;