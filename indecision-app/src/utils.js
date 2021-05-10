console.log('utils is here');

/**
 * inline export
 */
export const square = x => x * x;
export const add = (a, b) => a + b;

/**
 * named export
 *
 * Name is important
 */
// const square = x => x * x;
// const add = (a, b) => a + b;
// export { square, add };

/**
 * default export
 *
 * you can have only one
 * this type of export.
 * Name is NOT important
 */
// const subtract = (a, b) => a - b;
// export default subtract;
// or
// export default (a, b) => a - b;
//or
// export { subtract as default };
// export { square, add, subtract as default };
