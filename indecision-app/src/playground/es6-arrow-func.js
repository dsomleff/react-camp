function square(x) {
  return x * x;
};

const squareArrow = x => x * x;

console.log(square(3));
console.log(squareArrow(4));

const getFirstName = (fullName) => fullName.split(' ')[0];

console.log(getFirstName('Du Ju'));
