import React from 'react';

// Error Boundary component
class ErrorBoundary extends React.Component {
    state = { hasError: false };

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.log('Error caught:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <h3>Something went wrong. Please try again.</h3>;
        }
        return this.props.children;
    }
}

// Component that throws an error
const BuggyComponent = () => {
    throw new Error('I crashed!');
    return <div>Never rendered</div>;
};

// Main Learning Points: Error Boundaries
// Error Boundaries catch JavaScript errors in their child component tree and display a fallback UI.
const ErrorBoundariesDemo = () => {
    return (
        <div>
            <h2>Error Boundaries Demo</h2>
            <ErrorBoundary>
                <BuggyComponent />
            </ErrorBoundary>
        </div>
    );
};

export default ErrorBoundariesDemo;