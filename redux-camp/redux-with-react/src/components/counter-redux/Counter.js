import classes from '../Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';

/**
 * Display simple counter
 * @returns {jsx}
 */
const Counter = () => {
  /**
   * @typedef State
   */
  const counter = useSelector(state => state.counter);
  const showCounter = useSelector(state => state.showCounter);

  /**
   * Dispatch action against Redux Store
   */
  const dispatch = useDispatch();

  /**
   * @typedef button handler
   */
  const incrementHandler = () => {
    dispatch({ type: 'INCREMENT' });
  };

  /**
   * @typedef button handler
   */
  const increaseHandler = () => {
    dispatch({ type: 'INCREASE', value: 5 });
  };

  /**
   * @typedef button handler
   */
  const decrementHandler = () => {
    dispatch({ type: 'DECREMENT' });
  };

  /**
   * @typedef button handler
   */
  const toggleCounterHandler = () => {
    dispatch({ type: 'TOGGLE' });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>

      {showCounter && (
        <div className={classes.value}>
          {counter}
        </div>
      )}

      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
