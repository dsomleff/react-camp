"use strict";

console.log('App is running'); //JSX - JavaScript XML

var app = {
  title: 'Indecision App',
  subtitle: 'Some info',
  options: ['One', 'Two']
};
var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, app.title), app.subtitle && /*#__PURE__*/React.createElement("p", null, app.subtitle), /*#__PURE__*/React.createElement("p", null, app.options.length > 0 ? 'Here are your options' : 'No options'), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Item one"), /*#__PURE__*/React.createElement("li", null, "Item two"))); // Events

var count = 0;

var addOne = function addOne() {
  return console.log('+1');
};

var minusOne = function minusOne() {
  return console.log('-1');
};

var reset = function reset() {
  return console.log('reset');
};

var templateTwo = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Count: ", count), /*#__PURE__*/React.createElement("button", {
  onClick: addOne
}, "+1"), /*#__PURE__*/React.createElement("button", {
  onClick: minusOne
}, "-1"), /*#__PURE__*/React.createElement("button", {
  onClick: reset
}, "Reset"));
var appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot);
