/**
 * Counter Reducer
 *
 * @param {object} state
 * @param {object} action
 * @returns {object}
 */
const counterReducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        counter: state.counter + 1
      };
    case 'INCREASE':
      return {
        counter: state.counter + action.value
      }
    case 'DECREMENT':
      return {
        counter: state.counter - 1
      };
    case 'RESET':
      return {
        counter: 0
      };
    default:
      return state;
  }
}

export default counterReducer;
