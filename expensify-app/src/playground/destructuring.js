/*
 * Object Destructuring
 */

// Example
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

// Challenge
// const book = {
//   title: 'Drood',
//   author: 'Dan Simmons',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const { name: publisherName = 'Self-Publish' } = book.publisher
// console.log(publisherName);

/*
* Array Destructuring
*/
// Example
const address = ['Backer St 221b', 'London', 'England', 'NW1 6XE'];
const [ , city = 'Kiev', country ] = address;
console.log(`You are in ${city}, ${country}`);

// Challenge
const item = ['coffee', '$2.00', '$2.50', '$2.75'];
const [ itemName, , mediumPrice ] = item;
console.log(`A medium ${itemName} cost ${mediumPrice}`);
