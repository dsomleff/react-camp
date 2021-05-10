# React Camp

## Spec
All ideas, tasks and some solutions was created during the watching ["The Complete React Developer Course"](https://ibm-learning.udemy.com/course-dashboard-redirect/?course_id=1286908) by [Andrew Mead](https://mead.io).

## Tech Stack
 - Languages: JavaScript, HTML
 - Tools: NPM, Yarn, React, ReactDOM, Babel, Webpack

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
for compile Indesition App
```sh
yarn run build
```

for running local server
```sh
yarn run serve
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
