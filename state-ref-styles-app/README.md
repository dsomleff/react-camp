# React Styles Notes
- use `style={}` syntax inside html tag to change styles dynamically. Don't forget to pass an object inside js expression.
```html
  <label
    style={{ color: !isValid ? 'red' : 'black' }}
  >
    Course Goal
  </label>
```
- `styled components` package allow us to create a components with have certain styles attached to them. Like in Vue.
- Styled Components forward all props you set on them to the underline Components.
- Styled Components can accept props and by value of this props manipulate CSS.
- Media query also supports by `styled components`.
- `CSS Modules` build in React feature. If you import your css file into component as a `styles`, React create unique versions of  css classes for this component. Check Button Components in this project for example.
