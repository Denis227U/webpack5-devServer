let a = 5;
let b = 3;
a > 1 && a++;

let c = a > 4 ? a + b : a - b;
console.log(a);
console.log(c);

class User {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(this.name);
  }
}

// Использование:
let user = new User("Иван");
user.sayHi();

let arr = [];

for (let i = 0; i < 9; i++) {
  arr.push(i);
}

console.log(arr);
