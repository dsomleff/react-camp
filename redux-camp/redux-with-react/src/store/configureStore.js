// for basic redux
// import { createStore } from 'redux';
// import counterReducer from '../reducers/counter';

/**
 * Redux example with reducer
 * @type object
 */
// const store = createStore(counterReducer);

// for redux-toolkit
import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '../slices/counterSlice';
import authSlice from "../slices/authSlice";

/**
 * Redux example with slice
 * @type object
 */
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer
  }
});

/**
 * Returns an action object with
 * list of reducers like
 * { type: 'auto-generated unique identifier' }
 */
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
