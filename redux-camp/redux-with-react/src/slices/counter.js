import { createSlice } from '@reduxjs/toolkit';

const initialState = { counter: 0, showCounter: true };

/**
 * Prepare a piece of global state.
 */
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.value;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    }
  }
});

export default counterSlice;
