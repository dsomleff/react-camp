import React, { useState, useEffect } from 'react';

const App = (props) => {
  /*
    @param count - is a state
    @param setCount - is a function, that change the state
    Parameters can be named whatever you like,
    both of them comes from useState().
  */
  const [count, setCount] = useState(props.count);
  const increment = () => setCount(count + 1);
  const [text, setText] = useState('');

  useEffect(() => {
    console.log('useEffect ran');
    document.title = count;
  });

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
