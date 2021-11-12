import classes from './Counter.module.css';
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
  const decrementHandler = () => {
    dispatch({ type: 'DECREMENT' });
  };

  /**
   * @typedef button handler
   */
  const toggleCounterHandler = () => {
    dispatch({ type: 'RESET' });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>

      <div className={classes.value}>
        {counter}
      </div>

      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
