import { createStore } from 'react-redux';
import counterReducer from '../reducers/counter';

const store = createStore(counterReducer);

export default store;
