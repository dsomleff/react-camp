import { createStore } from 'redux';
import counterReducer from '../reducers/counter';

/**
 * Redux
 * @type object
 */
const store = createStore(counterReducer);

export default store;
