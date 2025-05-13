import React from 'react';
import { useSelector, useDispatch } from 'https://cdn.jsdelivr.net/npm/react-redux@8.1.3/dist/react-redux.esm.js';
import { increment, decrement, incrementAsync } from './ReduxSetup.jsx';

// Main Learning Points: Redux and Redux Toolkit + Middleware (Redux Thunk)
// Redux Toolkit simplifies Redux setup, and Thunk handles async actions.
const ReduxDemo = () => {
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter.value);
    const status = useSelector((state) => state.counter.status);

    return (
        <div>
            <h2>Redux and Redux Thunk Demo</h2>
            <p>Counter: {counter}</p>
            <p>Status: {status}</p>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(incrementAsync())}>
                Increment Async (1s delay)
            </button>
        </div>
    );
};

export default ReduxDemo;