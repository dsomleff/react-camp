// argument object - no longer bound with arrow functions
const add = function(a, b) {
  console.log(arguments); // works
  return a + b;
};

console.log(add(5, 3, 8));

const addArrow = (a, b) => {
  // console.log(arguments); // not works!!!
  return a + b;
};

// this keyword - no longer bound
const user = {
  name: 'Ju',
  cities: ['Kurahove', 'Odessa', 'Bratislava'],
  printPlacesLived: function() {
    // Hack, bcs we don't have access to this inside regular function
    const that = this;

    this.cities.forEach(function(city) {
      console.log(`${that.name} has lived in ${city}`);
    });
  }
};

// BUT next is work
const Context = function() {
  const city = {
    name: 'Odesa',
    f1: function() {
      return this.name;
    },
    f2() {
      return this.name;
    }
  };
  return city;
};

const city = new Context();
console.log(city.f1());
console.log(city.f2());

// In arrow function {this keyword} is working!
const userArrow = {
  name: 'Ju',
  cities: ['Kurahove', 'Odessa', 'Bratislava'],
  printPlacesLived() {
    return this.cities.map((city) => `${this.name} has lived in ${city}`);
  }
};

user.printPlacesLived();
console.log(userArrow.printPlacesLived());
