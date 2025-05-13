import React from 'react';

// Simulated Next.js page
const SSRWithNext = ({ initialData }) => {
    return (
        <div>
            <h2>Server-Side Rendering with Next.js</h2>
            <p>Initial Data (from server): {initialData}</p>
            <p>
                In a real Next.js app, this data would be fetched server-side using getServerSideProps.
            </p>
        </div>
    );
};

// Simulated getServerSideProps (Next.js specific)
export const getServerSideProps = async () => {
    // Simulate fetching data on the server
    const initialData = 'Data fetched on server';
    return {
        props: {
            initialData,
        },
    };
};

// Main Learning Points: Server-Side Rendering (SSR) with Next.js
// SSR renders React components on the server, improving SEO and initial load time.
export default SSRWithNext;