# React New Feature

## Hooks Notes
### useState()
- useState() allow us to use state in functional components and this state is not suppose to be an object it can be a string or boolean.
- useState() can be called multiple times.
- Using/Updating useState() it completely replace what was before.

### useEffect()
- it's going to run once right away and it's going to run after changes to component state or props
- allows to synchronize props and state with whatever we want to
- using as second argument array with props (dependencies), we can specify on what props changes useEffect should react
- empty array as second argument, allows use useEffect() only once, when page loaded
- clean up function; works like unMount feature

## Content
- Installation of [create-react-app](https://github.com/facebook/create-react-app)
- Hooks: useState(), useEffect(), useReducer(), Context API, useContext(), Fragments
