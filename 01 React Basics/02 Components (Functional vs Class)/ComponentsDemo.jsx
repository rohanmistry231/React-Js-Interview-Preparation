import React from 'react';

// Main Learning Points: Components (Functional vs. Class)
// Functional Component: Modern, simpler syntax using hooks.
const FunctionalComponent = () => {
    return (
        <div>
            <h3>Functional Component</h3>
            <p>This is a functional component.</p>
        </div>
    );
};

// Class Component: Traditional, uses class syntax and lifecycle methods.
class ClassComponent extends React.Component {
    render() {
        return (
            <div>
                <h3>Class Component</h3>
                <p>This is a class component.</p>
            </div>
        );
    }
}

// Wrapper component to display both
const ComponentsDemo = () => {
    return (
        <div>
            <h2>Components: Functional vs. Class</h2>
            <FunctionalComponent />
            <ClassComponent />
        </div>
    );
};

export default ComponentsDemo;