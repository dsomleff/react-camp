var nameVar = 'JuJu';
var nameVar = 'Bo';
console.log('nameVar', name);

let nameLet = 'Du';
nameLet = 'Ma';
console.log('nameLet', nameLet);

const nameConst = 'Cat';
console.log('nameConst', nameConst);

// Block scoping
var fullName = 'Buka Juk';
let firstName;

if (fullName) {
  firstName = fullName.split(' ')[0];
  console.log(firstName);
}

console.log(firstName);
