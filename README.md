# React Camp

## Spec
All ideas, tasks and some solutions was created during the watching ["The Complete React Developer Course"](https://ibm-learning.udemy.com/course-dashboard-redirect/?course_id=1286908) by [Andrew Mead](https://mead.io).

## Tech Stack
 - **Languages**: JavaScript, HTML, SCSS
 - **Tools and Libraries**: NPM, Yarn, React, ReactDOM, React-Modal, React-Router, Babel, Webpack, Redux, Normalize.css, Moment.js, Airbnb/react-dates, Redux Dev Tools, Jest, Enzyme, enzyme-to-json, Express, NumeralJS, Firebase (NoSQL Database)
\
***Notice:*** *At the time of this repo was created, react-dates provides some warning in console for React v17\* and library dev team do not provide any solution.*
\
*Also official Enzyme version for React 17 was not released at the time this repo was created. [@wojtekmaj/enzyme-adapter-react-17](https://www.npmjs.com/package/@wojtekmaj/enzyme-adapter-react-17) was used instead.*

## App link
Expensify App -  https://react-camp-expensify-app.herokuapp.com

## Scripts for Global Modules
for compile Indecision App
```sh
npx babel src/app.js --out-file=public/scripts/app.js --watch
```
for compile Counter App
```sh
npx babel src/playground/counter.js --out-file=public/scripts/app.js --watch
```

## Scripts for Local Modules (commands works for npm prefix as well )
for install all the dependencies
```sh
yarn install
```

for compile Indecision App for prod
```sh
yarn run build
```

for running webpack devServer with watch and babel at once (Expensify App)
```sh
yarn run dev-server
```

for running test with watcher (--watchAll)
```sh
yarn test
```

## Scripts for Heroku Deployment
Deploy Git subdirectory to Heroku
```sh
git subtree push --prefix expensify-app heroku master
```

## Course Description (Covered Topics)
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
- Webpack Source Map for Debugging and DevServer
- ES6 Class Properties
- Passing Children to Component
- Setting up Webpack with SCSS
- Styling React App with Mobile Considerations
- Create a Boilerplate for Apps
- React-Router for web 101 (BrowserRouter, Route, Switch)
- Linking between Routes (Link, NavLink)
- Organizing Routes
- Query Strings and URL Parameters
- Redux 101: Store, Actions, Subscribing and Dynamic Actions
- ES6 Object Destructuring, Array Destructuring
- Action Generators
- Redux 101: Reducers, combineReducers, Spread Operator in Reducers
- Organizing Redux
- The Higher Order Component
- Connecting Store and Component with React-Redux
- Date Picker / Calendar. Moment.js and Airbnb / react-dates
- Testing with Jest
- Snapshot Testing (Jest feature) for components
- Testing components with Enzyme and enzyme-to-json
- Testing with Shallow and Full DOM rendering
- Test Spies or mocked functions
- Deployment: Webpack for production, Creating Separate CSS Files, Prod Server with Express
- Firebase DB: Writing, Promises, Removing, Updating
