# React Styles Notes
- use `style={}` syntax inside html tag to change styles dynamically. Don't forget to pass an object inside js expression.
```html
  <label
    style={{ color: !isValid ? 'red' : 'black' }}
  >
    Course Goal
  </label>
```
- `styled components` package allow us to create a components with have certain styles attached to them. Like in Vue. Check Button Component in this project for example.
