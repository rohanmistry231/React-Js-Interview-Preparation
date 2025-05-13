// Main Learning Points: Unit Testing with Jest
// Jest is used to write unit tests to verify individual pieces of functionality.

// Import testing utilities (in a real setup, these would be installed via npm)
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter.jsx';

// Mock the API call (simplified for this example)
jest.mock('./Counter.jsx', () => {
    const original = jest.requireActual('./Counter.jsx');
    return {
        __esModule: true,
        default: (props) => {
            const [count, setCount] = React.useState(0);
            React.useEffect(() => {
                props.setData('Mocked Data');
            }, []);
            return <original.default {...props} count={count} setCount={setCount} />;
        },
    };
});

describe('Counter Component Unit Tests', () => {
    test('renders initial count of 0', () => {
        render(<Counter />);
        const countElement = screen.getByTestId('count');
        expect(countElement).toHaveTextContent('Count: 0');
    });

    test('increments count when button is clicked', () => {
        render(<Counter />);
        const button = screen.getByTestId('increment');
        fireEvent.click(button);
        const countElement = screen.getByTestId('count');
        expect(countElement).toHaveTextContent('Count: 1');
    });
});