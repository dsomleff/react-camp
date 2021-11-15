import { createSlice } from '@reduxjs/toolkit';

const initialState = { counter: 0, showCounter: true };

/**
 * Prepare a piece of global state.
 */
createSlice({
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
      this.state.showCounter = !this.state.showCounter;
    }
  }
});

/**
 * Counter Reducer
 *
 * @param {object} state
 * @param {object} action
 * @returns {object}
 */
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        counter: state.counter + 1,
        showCounter: state.showCounter
      };
    case 'INCREASE':
      return {
        counter: state.counter + action.value,
        showCounter: state.showCounter
      }
    case 'DECREMENT':
      return {
        counter: state.counter - 1,
        showCounter: state.showCounter
      };
    case 'TOGGLE':
      return {
        counter: state.counter,
        showCounter: !state.showCounter
      };
    default:
      return state;
  }
}

export default counterReducer;
