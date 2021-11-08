# Training App to understand Hooks better

Simple food order app.
Image was taken from [Carrefour Foodscapes](https://www.behance.net/gallery/126146535/Carrefour-Foodscapes?tracking_source=search_projects_recommended%7Cfood). No commercial usage.

## React Hook Usage
- State initialized in `App` by `useState()` and passed down to `Cart` and `Modal` FBC.
- Create a `cart-context` and `CartProvider` to store data. Wrapping any FBC by `<CartProvider></CartProvider>` we granted FBS access to stored data. Usage in `HeaderCartButton` FBC.
- Create a `CartReducer` to manage logic for adding food to the cart.
- `useEffect` inside `HeaderCartButton`.
- Move "Meals" Data to Backend (Firebase) and fetch them via http.
- Add '...Loading' message when fetch the data and error handling logic.
- Add `Checkout` component with a form. We display this form with some conditions.
