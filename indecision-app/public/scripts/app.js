console.log('App is running');

//JSX - JavaScript XML
// let template = <p>This is JSX</p>;
let template = /*#__PURE__*/React.createElement("p", {
  id: "app"
}, "This is JSX");
let appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
