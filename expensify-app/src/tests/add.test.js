const add = (a, b) => a + b;
const generateGreeting = (name) => `Hello ${name}!`;

test('should add 2 numbers', () => {
  const result = add(2, 3);

  expect(result).toBe(5);
});

test('should show greeting', () => {
  const result = generateGreeting('Ju Ju');

  expect(result).toBe('Hello Ju Ju!');
})
