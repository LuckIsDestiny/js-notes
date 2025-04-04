# Comprehensive Guide to ES6 Features

JavaScript ES6 (ECMAScript 2015) introduced numerous powerful features that transformed how we write JavaScript. Here's a detailed overview with examples for each feature.

## 1. Destructuring

Destructuring allows you to extract values from arrays or properties from objects into distinct variables.

### Array Destructuring
```javascript
// Example 1: Basic array destructuring
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;
console.log(first);  // 1
console.log(second); // 2
console.log(rest);   // [3, 4, 5]

// Example 2: Skipping elements
const colors = ['red', 'green', 'blue'];
const [firstColor, , thirdColor] = colors;
console.log(firstColor);  // 'red'
console.log(thirdColor);  // 'blue'
```

### Object Destructuring
```javascript
// Example 1: Basic object destructuring
const person = { name: 'John', age: 30, city: 'New York' };
const { name, age } = person;
console.log(name); // 'John'
console.log(age);  // 30

// Example 2: Assigning to new variable names
const product = { id: 1, title: 'Laptop' };
const { id: productId, title: productName } = product;
console.log(productId);   // 1
console.log(productName); // 'Laptop'
```

## 2. Arrow Functions

Arrow functions provide a more concise syntax for writing functions and don't have their own `this` binding.

```javascript
// Example 1: Basic arrow function
const add = (a, b) => a + b;
console.log(add(2, 3)); // 5

// Example 2: Arrow function with this context
function Counter() {
  this.count = 0;
  
  setInterval(() => {
    // 'this' refers to the Counter instance
    this.count++;
    console.log(this.count);
  }, 1000);
}

const counter = new Counter(); // Logs: 1, 2, 3... every second
```

## 3. Default Parameters

Default parameters allow you to specify default values for function parameters.

```javascript
// Example 1: Basic default parameters
function greet(name = 'Guest') {
  return `Hello, ${name}!`;
}
console.log(greet());      // 'Hello, Guest!'
console.log(greet('John')); // 'Hello, John!'

// Example 2: Complex default parameters
function createUser(name = 'Anonymous', role = 'User', createdAt = new Date()) {
  return { name, role, createdAt };
}
console.log(createUser('Alice', 'Admin')); 
// { name: 'Alice', role: 'Admin', createdAt: <current date> }
```

## 4. Promises

Promises provide a cleaner way to handle asynchronous operations.

```javascript
// Example 1: Basic Promise
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { id: 1, name: 'User Data' };
      if (data) {
        resolve(data);
      } else {
        reject('No data found');
      }
    }, 1000);
  });
};

fetchData()
  .then(data => console.log(data))
  .catch(error => console.error(error));

// Example 2: Promise.all
const fetchUsers = new Promise(resolve => 
  setTimeout(() => resolve(['John', 'Jane']), 1000)
);
const fetchProducts = new Promise(resolve => 
  setTimeout(() => resolve(['Laptop', 'Phone']), 1500)
);

Promise.all([fetchUsers, fetchProducts])
  .then(([users, products]) => {
    console.log('Users:', users);       // ['John', 'Jane']
    console.log('Products:', products); // ['Laptop', 'Phone']
  });
```

## 5. Template Literals

Template literals allow embedded expressions and multi-line strings.

```javascript
// Example 1: String interpolation
const user = { name: 'John', age: 30 };
const message = `Hello, my name is ${user.name} and I am ${user.age} years old.`;
console.log(message); // 'Hello, my name is John and I am 30 years old.'

// Example 2: Multi-line strings
const html = `
<div>
  <h1>Title</h1>
  <p>Paragraph content</p>
</div>
`;
console.log(html);
// <div>
//   <h1>Title</h1>
//   <p>Paragraph content</p>
// </div>
```

## 6. Modules

ES6 modules allow you to split your code into separate files for better organization.

### math.js
```javascript
// Example 1: Named exports
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// Example 2: Default export
export default class Calculator {
  multiply(a, b) {
    return a * b;
  }
  
  divide(a, b) {
    return a / b;
  }
}
```

### app.js
```javascript
// Example 1: Importing named exports
import { add, subtract } from './math.js';
console.log(add(5, 3));      // 8
console.log(subtract(5, 3)); // 2

// Example 2: Importing default export
import Calculator from './math.js';
const calc = new Calculator();
console.log(calc.multiply(5, 3)); // 15
console.log(calc.divide(6, 2));   // 3
```

## 7. Object Literals

Enhanced object literals provide shorthand syntax for defining properties and methods.

```javascript
// Example 1: Property value shorthand
const name = 'John';
const age = 30;

const person = { name, age };
console.log(person); // { name: 'John', age: 30 }

// Example 2: Method shorthand
const calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  }
};
console.log(calculator.add(5, 3));      // 8
console.log(calculator.subtract(5, 3)); // 2
```

## 8. Let and Const

`let` and `const` provide block-scoped variable declarations.

```javascript
// Example 1: let for variables that change
let count = 0;
count++;
console.log(count); // 1

// Example 2: const for variables that don't change
const PI = 3.14159;
// PI = 3; // TypeError: Assignment to constant variable

// Objects declared with const can still be modified
const user = { name: 'John' };
user.name = 'Jane'; // This works
console.log(user.name); // 'Jane'
```

## 9. Classes

ES6 classes provide a cleaner, more familiar syntax for creating objects and dealing with inheritance.

```javascript
// Example 1: Basic class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    return `Hello, my name is ${this.name}`;
  }
}

const john = new Person('John', 30);
console.log(john.greet()); // 'Hello, my name is John'

// Example 2: Class inheritance
class Employee extends Person {
  constructor(name, age, role) {
    super(name, age);
    this.role = role;
  }
  
  introduce() {
    return `${this.greet()} and I work as a ${this.role}`;
  }
}

const jane = new Employee('Jane', 28, 'Developer');
console.log(jane.introduce()); // 'Hello, my name is Jane and I work as a Developer'
```

## 10. Spread Operator

The spread operator allows an iterable to be expanded in places where zero or more arguments or elements are expected.

```javascript
// Example 1: Combining arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]

// Example 2: Copying and extending objects
const defaults = { theme: 'dark', font: 'Arial' };
const userSettings = { font: 'Helvetica', fontSize: 14 };
const settings = { ...defaults, ...userSettings };
console.log(settings); // { theme: 'dark', font: 'Helvetica', fontSize: 14 }
```

## 11. Rest Parameters

Rest parameters allow a function to accept an indefinite number of arguments as an array.

```javascript
// Example 1: Collecting remaining arguments
function sum(first, ...rest) {
  return first + rest.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4)); // 10

// Example 2: Destructuring with rest
const [winner, runnerUp, ...others] = ['Alice', 'Bob', 'Charlie', 'Dave', 'Eve'];
console.log(winner);   // 'Alice'
console.log(runnerUp); // 'Bob'
console.log(others);   // ['Charlie', 'Dave', 'Eve']
```

## 12. Symbols

Symbols are a new primitive type that guarantees uniqueness for object properties.

```javascript
// Example 1: Using symbols as unique identifiers
const id = Symbol('id');
const user = {
  name: 'John',
  [id]: 123
};
console.log(user[id]); // 123
// Symbol properties are not enumerable
console.log(Object.keys(user)); // ['name']

// Example 2: Shared symbols via Symbol.for
const sharedSymbol = Symbol.for('shared');
const anotherReference = Symbol.for('shared');
console.log(sharedSymbol === anotherReference); // true

const obj = {};
obj[sharedSymbol] = 'Shared value';
console.log(obj[anotherReference]); // 'Shared value'
```

## 13. For...of Loop

The `for...of` loop provides a simple way to iterate over iterable objects.

```javascript
// Example 1: Iterating over an array
const fruits = ['apple', 'banana', 'orange'];
for (const fruit of fruits) {
  console.log(fruit);
}
// 'apple'
// 'banana'
// 'orange'

// Example 2: Iterating over a string
const message = 'Hello';
for (const char of message) {
  console.log(char);
}
// 'H'
// 'e'
// 'l'
// 'l'
// 'o'
```

## 14. Parameter Handling

ES6 introduces new ways to handle function parameters, including parameter destructuring.

```javascript
// Example 1: Object parameter destructuring
function printUser({ name, age, city = 'Unknown' }) {
  console.log(`${name}, ${age}, ${city}`);
}
printUser({ name: 'John', age: 30 }); // 'John, 30, Unknown'
printUser({ name: 'Jane', age: 25, city: 'London' }); // 'Jane, 25, London'

// Example 2: Array parameter destructuring
function getRange([start, end]) {
  return end - start;
}
console.log(getRange([10, 15])); // 5
```

## 15. MultiLine Strings

Template literals allow for easy multi-line strings without concatenation or escape characters.

```javascript
// Example 1: Multi-line text
const poem = `
Roses are red,
Violets are blue,
ES6 is awesome,
And so are you.
`;
console.log(poem);

// Example 2: Multi-line HTML
const card = `
<div class="card">
  <div class="card-header">
    <h2>${product.name}</h2>
  </div>
  <div class="card-body">
    <p>${product.description}</p>
    <button>Add to Cart</button>
  </div>
</div>
`;
```

## 16. Block-Scoped Variables

Variables declared with `let` and `const` are block-scoped, meaning they only exist within the block they are declared in.

```javascript
// Example 1: Block scope with if statements
function example() {
  if (true) {
    let x = 10;
    const y = 20;
    // x and y only exist in this block
  }
  // console.log(x); // ReferenceError: x is not defined
}

// Example 2: Block scope with loops
for (let i = 0; i < 3; i++) {
  console.log(i); // 0, 1, 2
}
// console.log(i); // ReferenceError: i is not defined

// Compare with var (function-scoped)
for (var j = 0; j < 3; j++) {
  // j exists here
}
console.log(j); // 3 (j still exists outside the loop)
```

## 17. Generators

Generators are functions that can be paused and resumed, producing a sequence of values.

```javascript
// Example 1: Basic generator
function* countUp() {
  let count = 0;
  while (true) {
    yield count++;
  }
}

const counter = countUp();
console.log(counter.next().value); // 0
console.log(counter.next().value); // 1
console.log(counter.next().value); // 2

// Example 2: Finite generator with yield*
function* colors() {
  yield 'red';
  yield 'green';
  yield 'blue';
}

function* extendedColors() {
  yield* colors();
  yield 'yellow';
  yield 'purple';
}

const colorGen = extendedColors();
for (const color of colorGen) {
  console.log(color);
}
// 'red', 'green', 'blue', 'yellow', 'purple'
```

## 18. Import and Export

ES6 modules provide various ways to import and export functionality between files.

### utils.js
```javascript
// Example 1: Multiple named exports
export const PI = 3.14159;
export function square(x) {
  return x * x;
}

// Example 2: Exporting and renaming
const helper = {
  formatDate(date) {
    return date.toLocaleDateString();
  }
};

export { helper as dateHelper };
```

### app.js
```javascript
// Example 1: Various import styles
import { PI, square } from './utils.js';
console.log(PI);        // 3.14159
console.log(square(4)); // 16

// Example 2: Import with renaming
import { dateHelper } from './utils.js';
console.log(dateHelper.formatDate(new Date())); // formatted date

// Import all exports as a namespace
import * as utils from './utils.js';
console.log(utils.PI);   // 3.14159
console.log(utils.square(5)); // 25
```

## 19. Iterators

Iterators provide a way to access elements in a collection one at a time.

```javascript
// Example 1: Creating a custom iterator
const customIterable = {
  data: [1, 2, 3, 4],
  [Symbol.iterator]() {
    let index = 0;
    return {
      next: () => {
        if (index < this.data.length) {
          return { value: this.data[index++], done: false };
        } else {
          return { done: true };
        }
      }
    };
  }
};

for (const item of customIterable) {
  console.log(item); // 1, 2, 3, 4
}

// Example 2: Using the iterator protocol directly
const array = ['a', 'b', 'c'];
const iterator = array[Symbol.iterator]();

console.log(iterator.next()); // { value: 'a', done: false }
console.log(iterator.next()); // { value: 'b', done: false }
console.log(iterator.next()); // { value: 'c', done: false }
console.log(iterator.next()); // { value: undefined, done: true }
```

## 20. Tagged Templates

Tagged templates allow you to parse template literals with a function.

```javascript
// Example 1: Basic tagged template
function highlight(strings, ...values) {
  return strings.reduce((result, str, i) => {
    return `${result}${str}${values[i] ? `<strong>${values[i]}</strong>` : ''}`;
  }, '');
}

const name = 'John';
const role = 'developer';
const result = highlight`Hello, I'm ${name} and I'm a ${role}.`;
console.log(result); // 'Hello, I'm <strong>John</strong> and I'm a <strong>developer</strong>.'

// Example 2: Tagged template for localization
const i18n = (strings, ...values) => {
  // Simplified example - in a real app, you'd use a translation system
  const translations = {
    en: {
      'Hello': 'Hello',
      'my name is': 'my name is',
      'I am': 'I am',
      'years old': 'years old'
    },
    es: {
      'Hello': 'Hola',
      'my name is': 'me llamo',
      'I am': 'tengo',
      'years old': 'años'
    }
  };
  
  const language = 'es'; // This would typically come from user settings
  const trans = translations[language];
  
  return strings.reduce((result, str, i) => {
    const key = str.trim();
    const translated = trans[key] || key;
    return `${result}${translated} ${values[i] || ''}`;
  }, '').trim();
};

const userName = 'Miguel';
const age = 30;
const greeting = i18n`Hello` + ', ' + i18n`my name is` + ` ${userName} ` + i18n`I am` + ` ${age} ` + i18n`years old`;
console.log(greeting); // 'Hola, me llamo Miguel tengo 30 años'
```

## 21. Array Methods

ES6 introduced several new array methods to simplify common operations.

```javascript
// Example 1: find and findIndex
const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'Bob' }
];

const user = users.find(user => user.id === 2);
console.log(user); // { id: 2, name: 'Jane' }

const index = users.findIndex(user => user.name === 'Bob');
console.log(index); // 2

// Example 2: Array.from and Array.of
const arrayLike = document.querySelectorAll('div'); // NodeList
const divArray = Array.from(arrayLike);

const items = Array.from({ length: 5 }, (_, index) => index * 2);
console.log(items); // [0, 2, 4, 6, 8]

const numbers = Array.of(1, 2, 3, 4, 5);
console.log(numbers); // [1, 2, 3, 4, 5]
```

## 22. JavaScript Declarations

ES6 added `let` and `const` to complement `var` for variable declarations.

```javascript
// Example 1: let vs var
function varExample() {
  var x = 1;
  if (true) {
    var x = 2;  // Same variable
    console.log(x); // 2
  }
  console.log(x); // 2 (var is function-scoped)
}

function letExample() {
  let x = 1;
  if (true) {
    let x = 2;  // Different variable
    console.log(x); // 2
  }
  console.log(x); // 1 (let is block-scoped)
}

// Example 2: const for objects
const user = { name: 'John' };
user.name = 'Jane'; // OK - the object content can change
// user = { name: 'Jane' }; // Error - cannot reassign the variable

const fruits = ['apple', 'banana'];
fruits.push('orange'); // OK - we can modify the array
console.log(fruits); // ['apple', 'banana', 'orange']
// fruits = ['grape']; // Error - cannot reassign the variable
```

## 23. Map and WeakMap

The `Map` object holds key-value pairs where keys can be of any type.

```javascript
// Example 1: Basic Map operations
const userRoles = new Map();
userRoles.set('John', 'Admin');
userRoles.set('Jane', 'Editor');
userRoles.set('Bob', 'User');

console.log(userRoles.get('Jane')); // 'Editor'
console.log(userRoles.has('Alice')); // false
console.log(userRoles.size); // 3

userRoles.delete('Bob');
console.log(userRoles.size); // 2

// Example 2: Iterating over a Map
const inventory = new Map([
  ['apples', 5],
  ['bananas', 10],
  ['oranges', 15]
]);

// Iterate over keys
for (const fruit of inventory.keys()) {
  console.log(fruit);
}
// 'apples', 'bananas', 'oranges'

// Iterate over values
for (const quantity of inventory.values()) {
  console.log(quantity);
}
// 5, 10, 15

// Iterate over entries
for (const [fruit, quantity] of inventory.entries()) {
  console.log(`${fruit}: ${quantity}`);
}
// 'apples: 5', 'bananas: 10', 'oranges: 15'
```

## 24. Sets and WeakSets

The `Set` object lets you store unique values of any type.

```javascript
// Example 1: Basic Set operations
const uniqueNumbers = new Set([1, 2, 3, 4, 4, 5, 5]);
console.log(uniqueNumbers.size); // 5 (duplicates removed)
console.log([...uniqueNumbers]); // [1, 2, 3, 4, 5]

uniqueNumbers.add(6);
console.log(uniqueNumbers.has(4)); // true
uniqueNumbers.delete(1);
console.log(uniqueNumbers.size); // 5

// Example 2: Using Set for array deduplication
const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = [...new Set(numbers)];
console.log(uniqueArray); // [1, 2, 3, 4, 5]

// Filter an array
const fruits = ['apple', 'banana', 'orange', 'apple', 'pear'];
const uniqueFruits = Array.from(new Set(fruits));
console.log(uniqueFruits); // ['apple', 'banana', 'orange', 'pear']
```
