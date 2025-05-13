// Main Learning Points: Component Testing with React Testing Library
// React Testing Library focuses on testing components as a user would interact with them.

import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter.jsx';

describe('Counter Component Tests with RTL', () => {
    test('renders the counter component correctly', () => {
        render(<Counter />);
        expect(screen.getByText('Counter Component')).toBeInTheDocument();
        expect(screen.getByTestId('count')).toHaveTextContent('Count: 0');
        expect(screen.getByTestId('increment')).toBeInTheDocument();
    });

    test('increments count on button click', () => {
        render(<Counter />);
        const button = screen.getByTestId('increment');
        fireEvent.click(button);
        expect(screen.getByTestId('count')).toHaveTextContent('Count: 1');
    });
});