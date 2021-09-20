# React Basics

## Class Based (CBC) and Functional Based Component (FBC)
- Allow us to use `state` (js object with data with we like to provide for render inside our component). FBC do NOT have state. For this we use constructor with `this.state` property.
- You NOT allowed to modify `state` without calling `setState()`.
- Everything inside `{}` in JSX is JavaScript expression.
- As soon as `state` changed/updated, React re-render component.
- When we render array of elements in JSX, for each element we need provide unique `key`, that React can distinguish them. So React, by using `key` re-render only updated element and do not touch others.
- `LifeCycle Methods` - methods that get called at different stages of when our components get rendered. Exist only in CBC.
- `componentDidMount()` - calls when React render component on the page for a first time and default state was initiate. It's a React.Component method (`Life Cycle Method`).
- `componentDidUpdate()` - calls after `state's` changes and React updates the DOM. It re-render only necessary (updated) part of HTML, so page DO NOT bootstrapped from scratch. It's allows our apps work faster, because mount process expensive for browsers.
- React-update-state-cycle trigger a chain reaction. If parent was changed, so React tries to re-render children as well.
- `shouldComponentUpdate` - helps to figure out when Component should be re-rendered. If state remains the same, but  action was triggered somehow, React will not updates the DOM.
- `componentWillUnMount` - if you want to do something once when component is going to unmounted.
- `props` - property that specified in Component tag `<Component propName="propValue"/>`. Exist for both types of Component.
- `children` of props - any info located between Component's tags `<Component>Children Props</Component>`
- `Class Methods` - A good rule of thumb is this: Use arrow functions on any class methods you define and aren't part of React (i.e. `render()`, `componentDidMount()`). Because of Logical Scope and `this` bounding.

### Functional Based Components
- Used when we need just render some data (from props) to basic html.
- NO access to `state` or `LifeCycle Methods`.

## State vs Props
- State data can be pass as a parameter into Component and Component receive it as a prop(s).
- State lives in a one place and can be passed multiple times  as a props, into Components.
- if we want to do something with `state` right after we set it, we need to use callback inside `setState` function, like `this.setState({ stateField: value }, () => {})`
- `this.setState()` is asynchronous function. Any time when `state` is updated, there is the chance it wound't be accurate, because of script-run-time delay. So we need use `setState((prevState) => {stateParams: prevState.newData})` which guarantee us correct state update. Same true for `prevProps`.
- If we need to use `state` right after update, pass arrow function as second parameter into `this.setState()`.
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