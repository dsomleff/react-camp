// for basic redux
// import { createStore } from 'redux';
// import counterReducer from '../reducers/counter';

// for redux-toolkit
import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '../slices/counter';

/**
 * Redux example with reducer
 * @type object
 */
// const store = createStore(counterReducer);

/**
 * Redux example with slice
 * @type object
 */
const store = configureStore({
  reducer: counterSlice.reducer
});

export default store;
