export default class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  roll() {
    console.log(Math.floor(Math.random() * 6) + 1);
  }
}

export function printName(user) {
  console.log(`User's name is ${user.age}`);
}

export function printAge(user) {
  console.log(`User is ${user.age} years old`);
}
