// Main Learning Points: Mocking APIs
// Mocking APIs allows you to simulate API responses during testing.

import { render, screen, waitFor } from '@testing-library/react';
import Counter from './Counter.jsx';

// Mock the fetch API (or any API call)
global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve({ data: 'Mocked Data' }),
    })
);

describe('Counter Component API Mocking', () => {
    beforeEach(() => {
        fetch.mockClear();
    });

    test('fetches and displays API data', async () => {
        render(<Counter />);
        expect(screen.getByTestId('api-data')).toHaveTextContent('API Data: Loading...');
        await waitFor(() => {
            expect(screen.getByTestId('api-data')).toHaveTextContent('API Data: Mocked Data');
        });
        expect(fetch).toHaveBeenCalledTimes(1);
    });
});