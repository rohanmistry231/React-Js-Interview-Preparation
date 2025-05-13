// Main Learning Points: Snapshot Testing
// Snapshot testing captures the rendered output of a component and compares it to a stored snapshot.

import { render } from '@testing-library/react';
import Counter from './Counter.jsx';

describe('Counter Component Snapshot Testing', () => {
    test('matches the snapshot', () => {
        const { container } = render(<Counter />);
        expect(container).toMatchSnapshot();
    });
});