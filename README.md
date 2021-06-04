# React Camp

## Spec
All ideas, tasks and some solutions was created during the watching ["The Complete React Developer Course"](https://ibm-learning.udemy.com/course-dashboard-redirect/?course_id=1286908) by [Andrew Mead](https://mead.io).

## Tech Stack
 - Languages: JavaScript, HTML, SCSS, Normalize.css
 - Tools: NPM, Yarn, React, ReactDOM, React-Modal, React-Router, Babel, Webpack, Redux

## Scripts for Global Modules
for compile Indesition App
```sh
npx babel src/app.js --out-file=public/scripts/app.js --watch
```
for compile Counter App
```sh
npx babel src/playground/counter.js --out-file=public/scripts/app.js --watch
```
for running local server
```sh
live-server public
```

## Scripts for Local Modules
for install all the dependencies
```sh
yarn install
```

for compile Indesition App for prod
```sh
yarn run build
```

for running local server
```sh
yarn run serve
```

for running webpack devServer with watch and babel at once
```sh
yarn run dev-server
```

## Course Description
Here is the list of main topics covered by the course.
- JSX Basics
- JSX Conditional Rendering
- ES6: let, const, arrow functions
- Events (onClick, Manual Data Binding)
- Forms & Inputs
- Arrays in JSX
- ES6: classes
- React Component (Object based)
- Nesting Components
- Component Props
- Events & Methods
- Method Binding
- Component State
- Functional Component (Stateless)
- defaultProps Values
- Lifecycle Methods (for State Components Only)
- Webpack Setup
- ES6 import/export (Named & Default)
- One Component per File Technique
- Webpack Source Map for Debuging and DevServer
- ES6 Class Properties
- Passing Children to Component
- Setting up Webpack with SCSS
- Styling React App with Mobile Considerations
- Create a Boilerplate for Apps
- React-Router for web 101 (BrowserRouter, Route, Switch)
- Linking between Routes (Link, NavLink)
- Organizing Routes
- Query Strings and URL Parameters
- Redux, Actions
