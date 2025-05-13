import React, { useReducer } from 'react';

// Main Learning Points: useReducer for Complex State Logic
// useReducer is useful for managing complex state transitions.
const initialState = { count: 0 };

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        case 'reset':
            return { count: 0 };
        default:
            return state;
    }
};

const UseReducerDemo = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h2>useReducer Demo</h2>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({ type: 'increment' })}>
                Increment
            </button>
            <button onClick={() => dispatch({ type: 'decrement' })}>
                Decrement
            </button>
            <button onClick={() => dispatch({ type: 'reset' })}>
                Reset
            </button>
        </div>
    );
};

export default UseReducerDemo;