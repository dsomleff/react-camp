"use strict";

console.log('App is running'); //JSX - JavaScript XML

var app = {
  title: 'Indecision App',
  subtitle: 'Some info'
};
var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, app.title), /*#__PURE__*/React.createElement("p", null, app.subtitle), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Item one"), /*#__PURE__*/React.createElement("li", null, "Item two")));
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
