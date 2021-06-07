// const person = {
//   name: 'Ju',
//   age: 18,
//   location: {
//     city: 'Bratislava',
//     temperature: 26
//   }
// };

// // const name = person.name;
// // const age = person.age;
// const { name: firstName = 'Anonymous', age } = person;

// console.log(`${firstName} is ${age}.`);

// const { city, temperature: temp } = person.location;
// if (city && temp) {
//   console.log(`It's ${temp} in ${city}`);
// }

const book = {
  title: 'Drood',
  author: 'Dan Symmons',
  publisher: {
    name: 'Penguin'
  }
};

const { name: publisherName = 'Self-Publish' } = book.publisher
console.log(publisherName);
