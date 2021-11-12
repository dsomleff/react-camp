/**
 * Counter Reducer
 *
 * @param {object} state
 * @param {object} action
 * @returns object
 */
export default function (state = { counter: 0 }, action) {
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

  return state;
}
