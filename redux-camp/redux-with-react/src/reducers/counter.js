/**
 * Counter Reducer
 *
 * @param {object} state
 * @param {object} action
 * @returns {object}
 */
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === 'INCREMENT') {
    return {
      counter: state.counter + 1
    };
  }

  if (action.type === 'DECREMENT') {
    return {
      counter: state.counter - 1
    };
  }

  if (action.type === 'RESET') {
    return {
      counter: 0
    };
  }

  return state;
}

export default counterReducer;
