import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';


const Layout = (props) => {
  return (
    <div>
    <p>header</p>
    { props.children }
    <p>footer</p>
    </div>
  );
};

/** Usage Components Section */
ReactDOM.render(
  (
  <Layout>
    <div>
      <h1>Page Title</h1>
      <p>My Page Here</p>
    </div>
  </Layout>
  ), document.getElementById('app')
);
