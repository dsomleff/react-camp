"use strict";

var nameVar = 'JuJu';
var nameVar = 'Bo';
console.log('nameVar', name);
var nameLet = 'Du';
nameLet = 'Ma';
console.log('nameLet', nameLet);
var nameConst = 'Cat';
console.log('nameConst', nameConst); // Block scoping

var fullName = 'Buka Juk';
var firstName;

if (fullName) {
  firstName = fullName.split(' ')[0];
  console.log(firstName);
}

console.log(firstName);
