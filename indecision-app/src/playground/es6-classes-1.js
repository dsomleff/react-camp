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

const me = new Person('Ju Ju', 18);
console.log(me.getGreeting());
console.log(me.getDescription());

const cat = new Person();
console.log(cat.getGreeting());
console.log(cat.getDescription());
