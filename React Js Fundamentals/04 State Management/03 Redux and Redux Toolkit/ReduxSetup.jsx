import { configureStore, createSlice } from 'https://cdn.jsdelivr.net/npm/@reduxjs/toolkit@2.0.1/dist/redux-toolkit.esm.js';
import thunk from 'https://cdn.jsdelivr.net/npm/redux-thunk@3.1.0/dist/redux-thunk.esm.js';

// Create a slice for counter state
const counterSlice = createSlice({
    name: 'counter',
    initialState: { value: 0, status: 'idle' },
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        setStatus: (state, action) => {
            state.status = action.payload;
        },
    },
});

// Export actions
export const { increment, decrement, setStatus } = counterSlice.actions;

// Async action using Redux Thunk
export const incrementAsync = () => (dispatch) => {
    dispatch(setStatus('loading'));
    setTimeout(() => {
        dispatch(increment());
        dispatch(setStatus('idle'));
    }, 1000);
};

// Configure the store with Redux Toolkit and Thunk middleware
const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;