/**
 * Parent Class.
 */
class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    return `Hello ${this.name}!`;
  }

  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

/**
 * Extended Class (Child).
 */
class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  hasMajor() {
    return !!this.major;
  }

  getDescription() {
    let description = super.getDescription();

    if (this.hasMajor()) {
      description += ` Their major is ${this.major}.`;
    }

    return description;
  }
}

/**
 * Home Work  Class
 */
class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }

  getGreeting() {
    let greeting = super.getGreeting();

    if (this.homeLocation) {
      return greeting += ` I'm from ${this.homeLocation}`;
    }

    return greeting;
  }
}

/** Class Calls */
// const me = new Student('Ju Ju', 18, 'Software Engineer');
const me = new Traveler('Ju Ju', 18, 'Kurahove');
// console.log(me.hasMajor());
// console.log(me.getDescription());
console.log(me.getGreeting());

const cat = new Traveler(undefined, undefined, 'Nowhere');
// console.log(cat.hasMajor());
// console.log(cat.getDescription());
console.log(cat.getGreeting());
