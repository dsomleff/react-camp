# React Basics

## Class Based Component
- Allow us to use `state` (js object with data with we like to provide for render inside our component). Function component do NOT have state. For this we use constructor with `this.state` property.
- You NOT allowed to modify `state` without calling `setState()`.
- Everything inside `{}` in JSX is JavaScript expression.
- As soon as `state` changed/updated, React re-render component.
- When we render array of elements in JSX, for each element we need provide unique `key`, that React can distinguish them. So React, by using `key` re-render only updated element and do not touch others.
- `Life Cycle Methods` - methods that get called at different stages of when our components get rendered.
- `componentDidMount()` - calls when React render component on the page for a first time. It's a React.Component method.
