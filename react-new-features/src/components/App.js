import React, { useState } from 'react';

const App = (props) => {
  /*
    @param count - is a state
    @param setCount - is a function, that change the state
    Both parameters can be named whatever you like
    both of them comes from useState().

    1.useState() allow us to use state in functional components
    and this state is not suppose to be an object
    it can be a string or boolean.
    2.useState() can be called multiple times.
    3.Using/Updating useState() it completely replace what was before.
    And that is the Hook.
    For object components we still need an object in state.
  */
  const [count, setCount] = useState(props.count);
  const increment = () => setCount(count + 1);
  const [text, setText] = useState('');

  return (
    <div>
      <p>The current {text || 'count'} is {count}</p>
      <button onClick={increment}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setCount(props.count)}>Reset</button>
      <input value={text}  onChange={(e) => setText(e.target.value)}/>
    </div>
  );
};

App.defaultProps = {
  count: 0
};

export default App;
