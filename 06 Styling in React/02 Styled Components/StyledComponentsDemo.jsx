import React from 'react';
import styled from 'https://cdn.jsdelivr.net/npm/styled-components@6.1.0/dist/styled-components.min.js';

// Main Learning Points: Styled Components and CSS-in-JS Libraries
// Styled Components is a CSS-in-JS library that allows you to write CSS in JavaScript with tagged template literals.

// Create styled components
const Container = styled.div`
    border: 2px solid #e74c3c;
    padding: 15px;
    border-radius: 5px;
`;

const Title = styled.h2`
    color: #e74c3c;
`;

const Text = styled.p`
    color: #666;
`;

const StyledComponentsDemo = () => {
    return (
        <Container>
            <Title>Styled Components Demo</Title>
            <Text>This component uses Styled Components for styling.</Text>
        </Container>
    );
};

export default StyledComponentsDemo;