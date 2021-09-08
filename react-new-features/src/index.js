import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

const App = (props) => {
  /*
    @param count - is a state
    @param setCount - is a function, that change the state
    Both parameters can be named whatever you like
    both of them comes from useState().

    useState() allow us to use state in functional components
    and that is the Hook
  */
  const [count, setCount] = useState(props.count);
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>The current count is {count}</p>
      <button onClick={increment}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setCount(props.count)}>Reset</button>
    </div>
  );
};

App.defaultProps = {
  count: 0
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
