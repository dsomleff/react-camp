# React Basics

## Class Based (CBC) and Functional Based Component (FBC)
- `state`  - js object with data with we like to provide for render inside our component. For this we use constructor with `this.state` property in CBS.
-  FBC do NOT has state in the past  (now we have Hooks, that allow us manage state in FBC).
- You NOT allowed to modify `state` without calling `setState()`.
- In CBC `state` ALWAYS an object. You can nested inside of `this.state` object another objects or arrays, but it always should be inside one object scope.
- Everything inside `{}` in JSX is JavaScript expression.
- As soon as `state`, or `props`, or `context` changed/updated, React re-render component. React compare VirtualDOM with already rendered HTML, and if discrepancy exists, React re-render only changed data, not whole page. But, still React will call every FBS / CBC (because it's a functions, at the end of the day). To prevent this calls, check `Other Concepts` section for details.
- When we render array of elements in JSX, for each element we need provide unique `key`, that React can distinguish them. So React, by using `key` re-render only updated element and do not touch others.
- `LifeCycle Methods` - methods that get called at different stages of when our components get rendered. Exist only in CBC.
- `componentDidMount()` - calls when React render component on the page for a first time and default state was initiate. It's a React.Component method (`Life Cycle Method`).
- `componentDidUpdate()` - calls after `state's` changes and React updates the DOM. It re-render only necessary (updated) part of HTML, so page DO NOT bootstrapped from scratch. It's allows our apps work faster, because mount process expensive for browsers.
- React-update-state-cycle trigger a chain reaction. If parent was changed, so React tries to re-render children as well.
- `shouldComponentUpdate` - helps to figure out when Component should be re-rendered. If state remains the same, but  action was triggered somehow, React will not updates the DOM.
- `componentWillUnMount` - if you want to do something once when component is going to unmounted.
- `props` - property that specified in Component tag `<Component propName="propValue"/>`. Exist for both types of Component. If `props` was changed Component will re-render itself.
- `children` of props - populate any info located between Component's tags `<Component>props.children</Component>`
- `Class Methods` - A good rule of thumb is this: Use arrow functions on any class methods you define and aren't part of React (i.e. `render()`, `componentDidMount()`). Because of Logical Scope and `this` bounding.
- One CBC can be connect to only one context. For that create a static property ana assign your context
```js
static contextType = YourContext;
// and get access through this.context.yourData;
```
- `componentDidCatch`  will be triggered whenever one of the child components throws an error. Has no equivalent in FBC. We create a CBC for ErrorHandler Component (EHC or Error Boundaries ) and by wrapping this EHC around Components, which may produce an error during their lifetime. For this, inside EHC in `render()` we should always return `this.props.children `.


### Functional Based Components
- Used when we need just render some data (from props) to basic html.
- Before Hooks were introduced, NO access to `state` or `LifeCycle Methods`.

## State vs Props
- State data can be pass as a parameter into Component and Component receive it as a prop(s).
- State lives in a one place and can be passed multiple times  as a props, into Components.
- if we want to do something with `state` right after we set/update it, we need to use callback inside `setState` function, like `this.setState({ stateField: value }, () => {})`
- `this.setState()` is asynchronous function. Any time when `state` is updated, there is the chance it wound't be accurate, because of script-run-time delay. React put state changes in a queue (Scheduled State Change). So, if we update our state based on previous state snapshot, we need use `setState((prevState) => {stateParams: prevState.newData})` which guarantee us correct state update and order of this updates.
- `Props` possible to pass into CBC. to call them and get access via `constructor(props)` and `super(props)`. Now inside `this.state` we have access to `this.props`.
- Sometimes `state` may be declare without `constructor` in CBC.

## React Router
- `BrowserRouter` main Component for React Routing. Put it in your app entry point.
- `Route` Component which specified inside `BrowserRouter` and contains parameters as `path`, `component`, `exact`.
- `path` url name
- `component` name a Component that should be rendered by visiting `path`.
- `exact` means that specified url must be completely the same. We have 2 routes: `/`(main or entry page) and `/hello`. Slash (`/`) present in both cases. And without `exact` content for `/` page will be rendered for `/hello` as well.
- `Switch` Router Component that wrap all `Route` and as long as one `<Route path/>` matches the browser url, then it's the only Component we're going to render. It helps to avoid accidental render of multiple Components
- Every time when Component was bounded to `Route` it receives 3 props: `match`, `history`, `location`. You can access them by using `props.match.nameOfTheProp`. This props will be accessible for parent Component only (that we specified in `<Route component={parentComponent} >`), not for it's child. To solve it use `withRouter`.
- `match` contains `isExact`, `path`, `url` and `params`. First 3 you will get from their names, `params` it's everything what is specified after main `path` and dynamic. For example `/topic/:topicId` where `:topicId` is be present inside `params`. `:topicId` it's just a name, you can call url params whatever you like, just don't forget `:` at the beginning.
- `history` has a `push` method that allow us to specify on which route (url) we want to sent user. `<button onClick={() => props.history.push('/topics')}>Topics </button>`.
- `location` tell us where are we currently in our App. `location.pathname` provide exact full url.
- `Link` another Component that allow us to create a link. Use `<Link to=your-path />Path Name</Link>`. It also helps us with nested routes. `<Link to={`${props.match.url}/:dynamicData`}>` and no matter how we are change our url, this `Link` will be always works.

## Redux
- All Components in our app have access to state, like a global storage (single source of truth). So we avoid the problem, when we pass state from parent to nested children, even if middle child didn't use the state. Instead, we have Redux (global state storage) and any Component can use state if it need to.
- Redux initial state never must be changed. It's read only and after each action we create a new state. Because objects are reference value in JS and data can be overwritten incorrectly.
- Even if we set a piece of state, we need provide all state fields. In other case, state will be replaced incorrectly (piece of data will be erased /overwritten).
- Redux workflow contains `actions`, `reducers`, `store`, `dispatcher`.
- Redux use flux pattern: action -> dispatcher -> store -> view. One way flow. Check the Flux Pattern.
- Component dispatch `actions` -> actions type forwarded to `Reducer` -> `Reducer` function that mutates (change) Store Data in Global Data (State) Store -> Global Store sent new data to Component by subscription.
- `Reducers` are manipulate state. We able to create as many reducers as we need, each of them will contain specific piece of state, that need specific Component. When Redux contained code will be run for a 1st time - default value (state) from Reducer will be return. No side effects inside `Reducers`, it's a "pure" function.
- Every Reducer it's a function, returns new object with a new state and accept 2 arguments: `state` and `action`. `state` it's a previous (current) state, before action is going to update it. Reducer contains switch statement, that reacts on `action` type. Depends on the type of action, it returns appropriate state to Component.
- `Provider` is Component from 'react-redux' library. It's a main parent of all Components that need Store Data. That's how all `Provider` children get access to Redux Store.
- `combineReducers` is a redux function, that we use to store all our reducers and one place. Only one reducer can be passed to `createStore`, so if we got several reducers, `combineReducers` help us to solve this problem.
- `createStore` is a redux function, that accept as an argument `combineReducers` to create a store. Then `createStore` should be passed to `Provider` to get access to store for app.
- `connect` is a redux function and let us provide access for CBC/FBC to Redux. Accept as an argument a function (`mapStateToProps`) that allow us to access the Reducer and Component name itself. `connect()(ComponentName)`.
- `mapStateToProps` standard name for function that accept state (top level Reducer, our Store) as an argument and return new object. Equivalent to `useSelector` hook.
- `mapDispatchToProps` is a redux function, that accept `dispatch` as an argument and return an object.  Equivalent to `useDispatch` hook.
- `dispatch` is passing `action` to a `reducer`.
- `useStore` custom hook from react-redux, which gives direct access to the store (whole State), from FBC. Do  not recommended for often usage.
- `useSelector` custom hook from react-redux. It's convenient then `useStore`, because that allows select a part of the State from FBC. Basically replacement for `mapStateToProps` argument to `connect`. Accept a function that specified what piece of data need to be fetched from the Store. `useSelector` automatically setup subscription to the Redux store for FBC where it as called. FBC will be updated immediately after data was changed.
- `useDispatch` hook that dispatch action against Redux Store. Accept object with { type: } property and payload.
- `payload` additional property, that attached to action object that passed to `useDispatch`. It can be any type and helps to expand logic possibilities.

## Redux Toolkit
- `createSlice` allow to separate a pieces of global state in a convenient wrappers, which may be put in a different files for more code maintainability. Every slice need a name, similar to id: `{ name: 'slice-name' }`, initial state, reducers list that needs that slice (should be an object with methods, that manipulate actions; names of methods literally is an action type, so we do not need to write switch statement and checks the action.type).
- `createSlice` still not allow us to mutate state, but it uses package, that behind the scene check and return new object for state, but in code (inside methods) we can simply make reference to existed state.
- `configureStore` equivalent to `combineReducers`. Accept configuration object as parameter with reducer property object.
  ```js
  const store = configureStore({
    reducer: { counter: counterSlice.reducer }
  });
  ```

## React Hooks
- Hooks can be called only inside of FBC and allow us to do things, that previously were available only in CBC. Hook cannot be called from nested function (like another Hook or if statement), that exist in FBC.
- CBC can NOT use Hooks.
### useState()
- `useState()` - always accept as an argument initial state (`props.nameOfTheProp`) and returns this state and a function that update the value of the state. State can be whatever you like, not only an object, but string, boolean, etc.
```js
const [title, setTitle] = useState(props.title); // grab the value from props

const clickHandler = () => {
  setTitle('Updated!'); // use the setTitle to update props
}

return (
  <>
    {title} // use changed value
  </>
);
```
- You can use `useState` as many time as you want in one FBC. And all this states will be completely separated from each other.
- You can use `use State` as a single state, for this you need pass inside `useState` an object. Inside this object you can group your states. If you state update depends on previous State, use arrow function. Check `State vs Props` section for more info.
```js
// Multiple states approach
const [title, setTitle] = useState(props.title);
const [body, setBody] = useState(props.body);

const titleChangeHandler = (event) => {
  setTitle(event.target.value);
};

const bodyChangeHandler = (event) => {
  setBody(event.target.value);
};

// Single state approach
const [userInput, setUserInput] = useState({
  title: '',
  body: ''
});

const titleChangeHandler = (event) => {
  setUserInput((prevState) => {
    return {
      ...userInput,
      title: event.target.value
    };
  });
};
```
- `useState` is main state management tool. Great for independent pieces of data. Good if state updates are limited and easy.

### useRef()
- `ref` allow us to get access to other DOM elements and work with them. `useRef()` allow us to get values from input without using state and even update initial state. Ref good if you only want to read a value and you never plan on changing anything. We're talking about uncontrolled components if we access values with a ref. Why? Because they're internal state, so to value which is reflected in them is not controlled by React. Check useRef() commit for detail.


### useEffect()
- `useEffect()` combine `componentDidMount, componentDidUpdate`. It's going to runs when Component firstly mount and after changes to Component state or props. Can be used multiple times in one Component. This hook accept 2 argument: function and array of dependencies.
```js
function MyComponent() {
  useEffect(() => {
    // Runs after EVERY rendering
  });
}
```

```js
function MyComponent() {
  useEffect(() => {
    // Runs ONCE after initial rendering
  }, []);
}
```

```js
function MyComponent({ prop }) {
  const [state, setState] = useState('');
  useEffect(() => {
    // Runs ONCE after initial rendering
    // and after every rendering ONLY IF `prop` or `state` changes
  }, [prop, state]);
}
```
- Function will be called AFTER every Component rerender ONLY IF dependencies changed. You should add to [dependencies] "everything" that using inside effect function, the things that we want to make sure when they change the effect runs. Exceptions: You DON'T need to add state updating functions: React guarantees that those functions never change. DON'T need to add "built-in" APIs or functions like `fetch()`, `localStorage` etc. You must add all "things" you use in your effect function if those "things" could change because your component (or some parent component) re-rendered.
- You can also use Cleanup Function to reload `useEffect` (`componentDidUnmount`). Check docs for more info.


### useReducer()
- `useReducer()` allow us manage more complex state. It's great if state logic and state updates are complex. If you have related pieces of data.
- To use `useReducer()` we need create a Reducer itself.
```js
const nameReducer = (prevState, action) => {
  switch(action.type) {
    case 'ACTION_TYPE':
      return action.value;
    default:
      return state;
  }
}
// state - is previous (existed) state
// action - contains information about the action being performed.
// nameReducer is reducerFunc with will be pass to useReducer as a 1st argument. It  return the new state based off of whatever action has been fired off.
```
```js
const [state, dispatchFunc] = useReducer(nameReducer, initialState, initFunc);
// state - state snapshot used in component re-rendered cycle, like in useState.
// dispatchFunc - is going to dispatch an action that's going to run the reducer and manipulate the state as described in reducerFunc.
// nameReducer - triggered automatically once action is dispatched (in dispatchFunc). It receives the last state snapshot and should return new, updated state. (prevState, action) => newState
// initialState - default state value
// initFunc - a func to set initial state in case your initial state is a bit more complex, for example, the result of let's say HTTP requests. Not required
```
- Next step we need to call  dispatchFunc. When it calls, it takes data(valueName: value) and it takes the type (ACTION_TYPE). It's going to pass that through our nameReducer.
```js
dispatchFunc({ type: 'ACTION_TYPE', valueName: value });
```

### React Context (contextAPI) and useContext()
- `React Context (contextAPI) or useContext()` is Component State Storage. By using it we can avoid passing props chain through component to component. It allows us to manage State, that we are able to directly change from any component in our App and directly pass it to any component in our App without building a prop chain.
```js
// ContextObject is a wrapper around Components that should received access to value that we like to share.
// value is optional. We can provide our data through Provide value property.
const ContextObject = React.createContext({ value });
```
```html
<!-- provide value for Components. value can be anything, here it's an object  -->
<ContextObject.Provider value={{value}}>
  <!-- may use value -->
  <ComponentThatNeedState>
    <!-- may not -->
  <ComponentThatNeedState>
</ContextObject.Provider>
```
```js
const {contextValue} = useContext(ContextObject); // listen state in Component that need it
contextValue.initialState; // getting access to state
```
- `React Context` as initial state accept any values for state, including functions that manage that state.
- Good reason for using `Context` will be state that affects multiple components. So `props` for components configuration,  `context` for state management across components or possibly across the entire app.
- `React Context` limitation: NOT optimized for high frequency state changes (multiple times per second).
- In more complex apps, managing React Context can lead to deeply nested JSX code and / or huge "Context Provider" components (global context logics in one file).

### useCallback()
 - Use Callback is a hook that allows us to basically store a function across component executions. So it allows us to tell React that we wanna save a function and that this function should not be recreated with every execution.
```js
const yourFunc = useCallback(() => {
  setState(logic);
}, []);
// 1st argument it's a function for state change logic.
// second is array of anything what you use inside 1st arg func, like in useEffect.
```
- Here we use the `useCallback` and pass our function as a first argument to `useCallback` and `useCallback` then returns that stored function and when the app function (parent component that sent `yourFunc` as a prop to it's children) reruns `useCallback` will look for that stored function which React stored for us and reuse that same function object. In short `useCallback` store your functions and memory (make a snapshot to compare), and based on this React decides run this function again or not.
- `useCallback` often use to wrap `useEffect` hook, to avoid infinite loop.

### useMemo()
- `useMemo` allows you to memoize / store, any kind of data, just like `useCallback` does it for functions.

## Other Concepts
- `Lift State Up` technique allow us to pass data from child to parent.
- All Components must return one "root" element. That element may contains as many children as you like and can be whatever you like `<div>, <form>`, etc. If your "root" element just a `<div>` use `<>` instead, it helps with unnecessary div pack in DOM (div soup). Also you can use `<React.Fragment>` it's do the same, it's an empty wrapper component, that doesn't render to the DOM.
- `Portals` allow us to put HTML elements whatever we like, structure our DOM for more clear semantic structure. Portal need 2 things: You need a place you wanna render the Component to (usually it's a `<div id="some-name"/> `) and then you need to let the Component know that it should have a portal to that place. Check Portals commit for detail.
- Even if children component do not changed, every time when parent component re-evaluated, React will be re-run (call) all child components as well (it's a functions, and that how code compiling works). To prevent this in FBC:
```js
export default React.memo(YourChildComponentName);
```
- React will check if props, state, context of this child element were changed. If not, React will not call this Component. It will work for all nested YourChildComponentName component children as well. But it comes with the cost. Now instead of compare VirtualDOM with rendered HTML, React will compare existed props snapshot with current props. Instead of `memo()` you can use `useCallback` hook.

### custom Hooks (cH)
- `cH` it's a function (not a Component), that contains stateful logic. It's allow outsource logic into reusable function. Using React Hooks or another cH is allowed.
- Every `cH` name should start with `use`. That's convention and React will be inform that this function is `cH`. All `cH` may be stored in `hooks` folder, inside the app.
- `state` created in `cH` will be bound to Component, in which `cH` was called. If we use `cH` in a multiple Components, every Component will receive it's own state. We share ONLY logic, NOT state.
- `cH` as function should return something, and it can be any type you want (array, number, etc).
