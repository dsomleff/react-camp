const redux = require('redux');

/**
 *
 * @param {*current/previous state - object}  state default value = 0
 * @param {*what should we do with state} action
 * @returns {new state, which replace existed one} object
 */
const counterReducer = (state = { counter: 0 }, action) => {
  return {
    counter: state.counter + 1
  };
};

/**
 * creation of redux store and passing reducer to it
 * store need to know, which reducer is responsible for changing it.
 */
const store = redux.createStore(counterReducer);

/**
 * Subscription to redux store
 * Will be triggered as soon state was changed.
 */
const counterSubscriber = () => {
  const latestState = store.getState(); // receive the latest state snapshot
  console.log(latestState);
};

/* *
 * Get Redux know about subscriber function.
 */
store.subscribe(counterSubscriber);

/**
 * Dispatch the action
 * Action is an object with type property.
 */
store.dispatch({ type: 'INCREMENT' });
