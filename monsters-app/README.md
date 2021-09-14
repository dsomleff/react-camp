# React Basics

## Class Based and Functional Based Component
- Allow us to use `state` (js object with data with we like to provide for render inside our component). Function component do NOT have state. For this we use constructor with `this.state` property.
- You NOT allowed to modify `state` without calling `setState()`.
- Everything inside `{}` in JSX is JavaScript expression.
- As soon as `state` changed/updated, React re-render component.
- When we render array of elements in JSX, for each element we need provide unique `key`, that React can distinguish them. So React, by using `key` re-render only updated element and do not touch others.
- `LifeCycle Methods` - methods that get called at different stages of when our components get rendered.
- `componentDidMount()` - calls when React render component on the page for a first time. It's a React.Component method (Life Cycle Method).
- `props` - property that specified in Component tag `<Component propName="propValue"/>`. Exist for both types of Component.
- `children` of props - any info located between Component's tags `<Component>Children Props</Component>`

### Functional Based Components
- Used when we need just render some data (from props) to basic html.
- NO access to `state` or `LifeCycle Methods`.

## State vs Props
- State data can be pass as a parameter into Component and Component receive it as a prop(s).
- State lives in a one place and can be passed multiple times  as a props, into Components.
- if we want to do something with `state` right after we set it, we need to use callback inside `setState` function, like `this.setState({ stateField: value }, () => {})`
-
