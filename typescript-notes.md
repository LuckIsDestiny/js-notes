# TypeScript Notes for Non-Coders

## 1. Basic Types

### Number, String, Boolean
TypeScript helps us specify what kind of data we're working with. The most basic types are:

- **Number**: Any numerical value
  ```typescript
  let age: number = 30;
  ```
  *Simple explanation: This tells the computer that 'age' will always be a number, not text or anything else.*

- **String**: Text content
  ```typescript
  let name: string = "John";
  ```
  *Simple explanation: This tells the computer that 'name' will always be text.*

- **Boolean**: True or false values
  ```typescript
  let isActive: boolean = true;
  ```
  *Simple explanation: This tells the computer that 'isActive' can only be true or false, nothing else.*

### Arrays & Tuples
- **Arrays**: Collections of items of the same type
  ```typescript
  let scores: number[] = [85, 90, 78];
  ```
  *Simple explanation: This is a list of numbers that we call 'scores'.*

- **Tuples**: Arrays with fixed number of elements with specific types
  ```typescript
  let person: [string, number] = ["John", 30];
  ```
  *Simple explanation: This is like a pair of items where the first one must be text and the second must be a number.*

### Enums
Enums let us define a set of named constants.

```typescript
enum Direction {
  North,
  South,
  East,
  West
}
let myDirection: Direction = Direction.North;
```
*Simple explanation: We're creating a set of options called 'Direction' and then choosing 'North' from those options.*

### Any, Unknown, Void, Never, Null & Undefined
- **Any**: When we don't know the type
  ```typescript
  let something: any = "Hello";
  something = 42; // Valid because 'any' can be anything
  ```
  *Simple explanation: 'something' can be anything - text, numbers, whatever.*

- **Unknown**: Similar to any but safer
  ```typescript
  let userInput: unknown = "Hello";
  // You must check the type before using it specifically
  ```
  *Simple explanation: We don't know what type this is yet, but we'll check before using it.*

- **Void**: Used for functions that don't return anything
  ```typescript
  function logMessage(): void {
    console.log("Hello!");
  }
  ```
  *Simple explanation: This function just does something but doesn't give anything back.*

- **Never**: Used for functions that never complete normally
  ```typescript
  function throwError(): never {
    throw new Error("Something went wrong");
  }
  ```
  *Simple explanation: This function will never finish normally - it always causes an error.*

- **Null & Undefined**: Represent absence of value
  ```typescript
  let empty: null = null;
  let notAssigned: undefined = undefined;
  ```
  *Simple explanation: 'empty' is explicitly nothing, while 'notAssigned' hasn't been given a value yet.*

### Type Inference vs Explicit Typing
- **Type Inference**: TypeScript guesses the type
  ```typescript
  let message = "Hello"; // TypeScript knows this is a string
  ```
  *Simple explanation: We didn't specify the type, but TypeScript figures out it's text.*

- **Explicit Typing**: We tell TypeScript the type
  ```typescript
  let message: string = "Hello";
  ```
  *Simple explanation: We're explicitly telling TypeScript that 'message' is text.*

## 2. Functions in TypeScript

### Function Declaration & Expressions
- **Function Declaration**:
  ```typescript
  function add(x: number, y: number): number {
    return x + y;
  }
  ```
  *Simple explanation: We're creating a function called 'add' that takes two numbers and returns their sum.*

- **Function Expression**:
  ```typescript
  const add = function(x: number, y: number): number {
    return x + y;
  }
  ```
  *Simple explanation: Another way to create the same function, but storing it in a variable called 'add'.*

### Optional and Default Parameters
- **Optional Parameters**:
  ```typescript
  function greet(name: string, title?: string): string {
    if (title) {
      return `Hello, ${title} ${name}`;
    }
    return `Hello, ${name}`;
  }
  ```
  *Simple explanation: The 'title' is optional - we can call this function with just a name or with both a name and title.*

- **Default Parameters**:
  ```typescript
  function greet(name: string, title: string = "Mr."): string {
    return `Hello, ${title} ${name}`;
  }
  ```
  *Simple explanation: If we don't provide a title, it will use "Mr." by default.*

### Rest Parameters
```typescript
function sum(...numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0);
}
```
*Simple explanation: This function can take any number of parameters, and they'll all be treated as a list of numbers.*

### Return Types
```typescript
function multiply(x: number, y: number): number {
  return x * y;
}
```
*Simple explanation: This function must return a number, nothing else.*

### Function Overloads
```typescript
function format(value: string): string;
function format(value: number): string;
function format(value: string | number): string {
  if (typeof value === 'string') {
    return value.trim();
  }
  return value.toString();
}
```
*Simple explanation: This function can handle different types of input and will do different things depending on what you give it.*

## 3. Objects and Interfaces

### Object Types
```typescript
let user: { name: string, age: number } = {
  name: "John",
  age: 30
};
```
*Simple explanation: We're creating an object with specific properties that must be certain types.*

### Interface Basics
```typescript
interface User {
  name: string;
  age: number;
}

let john: User = {
  name: "John",
  age: 30
};
```
*Simple explanation: We're creating a blueprint called 'User' that describes what properties any user should have.*

### Optional & Readonly Properties
```typescript
interface User {
  name: string;
  age: number;
  email?: string; // Optional
  readonly id: number; // Cannot be changed after creation
}
```
*Simple explanation: Email is optional, and once the id is set, it can never be changed.*

### Function Types with Interfaces
```typescript
interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x, y) => x + y;
const subtract: MathFunc = (x, y) => x - y;
```
*Simple explanation: We're creating a blueprint for functions that take two numbers and return a number.*

### Extending Interfaces
```typescript
interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  employeeId: number;
  department: string;
}
```
*Simple explanation: An Employee is a Person plus some additional information.*

### Interface vs Type Alias
```typescript
// Interface
interface User {
  name: string;
}

// Type alias
type User = {
  name: string;
};
```
*Simple explanation: These do similar things but have different capabilities in more complex scenarios.*

## 4. Classes and Inheritance

### Class Basics
```typescript
class Person {
  name: string;
  
  constructor(name: string) {
    this.name = name;
  }
  
  greet() {
    return `Hello, I'm ${this.name}`;
  }
}

const john = new Person("John");
```
*Simple explanation: We're creating a blueprint for creating people, each with a name and the ability to greet.*

### Access Modifiers: `public`, `private`, `protected`
```typescript
class Person {
  public name: string; // Accessible from anywhere
  private age: number; // Only accessible within the Person class
  protected id: number; // Accessible within Person and child classes
  
  constructor(name: string, age: number, id: number) {
    this.name = name;
    this.age = age;
    this.id = id;
  }
}
```
*Simple explanation: We can control who can see or change different properties - some are visible to everyone, some only within the class itself.*

### Constructors and Properties
```typescript
class Person {
  constructor(public name: string, private age: number) {
    // Shorthand for creating and assigning properties
  }
}
```
*Simple explanation: A quick way to create properties and assign values when we create a new Person.*

### Inheritance & Method Overriding
```typescript
class Person {
  constructor(public name: string) {}
  
  introduce() {
    return `Hi, I'm ${this.name}`;
  }
}

class Employee extends Person {
  constructor(name: string, public role: string) {
    super(name); // Call the parent constructor
  }
  
  introduce() {
    return `${super.introduce()} and I work as a ${this.role}`;
  }
}
```
*Simple explanation: An Employee is a special kind of Person with additional properties and can do things slightly differently.*

### Abstract Classes
```typescript
abstract class Vehicle {
  constructor(public make: string) {}
  
  abstract drive(): string; // Must be implemented by child classes
}

class Car extends Vehicle {
  drive() {
    return `Driving ${this.make} car`;
  }
}
```
*Simple explanation: Vehicle is an incomplete blueprint that requires any child class to implement certain methods.*

### Implementing Interfaces
```typescript
interface Drivable {
  drive(): string;
}

class Car implements Drivable {
  drive() {
    return "Driving car";
  }
}
```
*Simple explanation: We're ensuring that the Car class adheres to the Drivable blueprint by including all required methods.*

## 5. Advanced Types

### Union & Intersection Types
- **Union Types**: Can be one of several types
  ```typescript
  let id: string | number;
  id = "abc123"; // Valid
  id = 123; // Also valid
  ```
  *Simple explanation: 'id' can be either text or a number.*

- **Intersection Types**: Combines multiple types
  ```typescript
  interface Employee {
    employeeId: number;
    department: string;
  }
  
  interface Manager {
    managerLevel: number;
    teamSize: number;
  }
  
  type ManagerEmployee = Employee & Manager;
  ```
  *Simple explanation: A ManagerEmployee must have all properties from both Employee and Manager.*

### Type Guards
```typescript
function processValue(value: string | number) {
  if (typeof value === "string") {
    // TypeScript knows value is a string here
    return value.toUpperCase();
  } else {
    // TypeScript knows value is a number here
    return value * 2;
  }
}
```
*Simple explanation: We check what type something is before working with it, and TypeScript understands this check.*

### Literal Types
```typescript
type Direction = "North" | "South" | "East" | "West";
let myDirection: Direction = "North"; // Valid
// myDirection = "Northwest"; // Error
```
*Simple explanation: 'myDirection' can only be one of the four compass directions, nothing else.*

### Discriminated Unions
```typescript
interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  sideLength: number;
}

type Shape = Circle | Square;

function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
  }
}
```
*Simple explanation: We include a property that tells us what kind of shape we're dealing with, so we can handle it correctly.*

### Type Aliases
```typescript
type Point = {
  x: number;
  y: number;
};

let point: Point = { x: 10, y: 20 };
```
*Simple explanation: We're creating a shorthand name for a more complex type.*

### Index Signatures
```typescript
interface Dictionary {
  [key: string]: string;
}

const colors: Dictionary = {
  red: "#FF0000",
  green: "#00FF00",
  blue: "#0000FF"
};
```
*Simple explanation: We can have any number of properties as long as both the property names and values are strings.*

### `keyof`, `typeof`, `in`, `as`
- **keyof**: Gets the keys of an object type
  ```typescript
  interface User {
    name: string;
    age: number;
  }
  
  type UserKeys = keyof User; // "name" | "age"
  ```
  *Simple explanation: 'UserKeys' is a type that can only be "name" or "age".*

- **typeof**: Gets the type of a variable
  ```typescript
  const user = { name: "John", age: 30 };
  type User = typeof user; // { name: string, age: number }
  ```
  *Simple explanation: We're creating a type that matches the structure of the 'user' object.*

- **in**: Checks if a property exists in an object
  ```typescript
  type Keys = "name" | "age";
  type Person = {
    [K in Keys]: string;
  };
  // Equivalent to { name: string, age: string }
  ```
  *Simple explanation: We're creating a type with specific properties, all of which are strings.*

- **as**: Type assertion
  ```typescript
  let someValue: unknown = "hello";
  let strLength: number = (someValue as string).length;
  ```
  *Simple explanation: We're telling TypeScript to treat 'someValue' as a string so we can use string methods on it.*

## 6. Generics

### Generic Functions
```typescript
function identity<T>(arg: T): T {
  return arg;
}

let output = identity<string>("hello"); // Type is string
```
*Simple explanation: We're creating a flexible function that works with any type but preserves that type information.*

### Generic Interfaces
```typescript
interface Box<T> {
  contents: T;
}

let numberBox: Box<number> = { contents: 42 };
let stringBox: Box<string> = { contents: "hello" };
```
*Simple explanation: We're creating a flexible container that can hold any type of content.*

### Generic Classes
```typescript
class DataStorage<T> {
  private data: T[] = [];
  
  addItem(item: T) {
    this.data.push(item);
  }
  
  getItems(): T[] {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
```
*Simple explanation: We're creating a flexible storage class that can store any type of data, but a specific instance can only store one type.*

### Constraints with `extends`
```typescript
interface Lengthwise {
  length: number;
}

function logLength<T extends Lengthwise>(arg: T): void {
  console.log(arg.length);
}

logLength("hello"); // Valid - strings have length
logLength([1, 2, 3]); // Valid - arrays have length
// logLength(123); // Error - numbers don't have length
```
*Simple explanation: We're creating a function that works with any type that has a 'length' property.*

### `keyof` and `T[K]` pattern
```typescript
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = {
  name: "John",
  age: 30
};

const name = getProperty(user, "name"); // Returns "John"
// const invalid = getProperty(user, "email"); // Error
```
*Simple explanation: We're creating a function that can safely access any property of an object.*

### Utility Types with Generics
```typescript
interface User {
  name: string;
  age: number;
  email: string;
}

type UserPreview = Pick<User, "name" | "email">;
// Equivalent to { name: string, email: string }
```
*Simple explanation: We're using built-in helpers to create new types from existing ones.*

## 7. Modules and Namespaces

### Import & Export Syntax
```typescript
// In math.ts
export function add(x: number, y: number): number {
  return x + y;
}

// In app.ts
import { add } from './math';
console.log(add(1, 2)); // 3
```
*Simple explanation: We're putting code in separate files and then using it where we need it.*

### Default vs Named Exports
```typescript
// Default export
export default function greet(name: string) {
  return `Hello, ${name}`;
}

// Named export
export function farewell(name: string) {
  return `Goodbye, ${name}`;
}

// Import
import greet, { farewell } from './greetings';
```
*Simple explanation: We can export a main function and some additional ones, then import them differently.*

### Organizing Code with Modules
```typescript
// user.ts
export interface User {
  name: string;
  age: number;
}

export function createUser(name: string, age: number): User {
  return { name, age };
}

// app.ts
import { User, createUser } from './user';
const john = createUser("John", 30);
```
*Simple explanation: We organize related code together in modules, making it easier to manage.*

### Namespace Basics
```typescript
namespace Validation {
  export interface StringValidator {
    isValid(s: string): boolean;
  }
  
  export class EmailValidator implements StringValidator {
    isValid(s: string): boolean {
      return s.includes('@');
    }
  }
}

let validator = new Validation.EmailValidator();
```
*Simple explanation: Namespaces are an older way to group related code under a single name to avoid conflicts.*

## 8. Decorators

### What are Decorators?
Decorators are special functions that can modify classes, methods, properties, or parameters.

```typescript
function log(target: any, key: string) {
  console.log(`${key} was called`);
}

class Calculator {
  @log
  add(x: number, y: number) {
    return x + y;
  }
}
```
*Simple explanation: Decorators are like sticky notes we attach to parts of our code to add extra behavior.*

### Class, Property, Method, Parameter Decorators
```typescript
// Class decorator
function sealed(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

@sealed
class Person {
  // Property decorator
  @format
  name: string;
  
  // Method decorator
  @log
  greet(@required message: string) { // Parameter decorator
    return `Hello, ${this.name}: ${message}`;
  }
}
```
*Simple explanation: We can attach decorators to different parts of our code to add various behaviors.*

### Using Decorators with Angular/NestJS
```typescript
// Angular component example
@Component({
  selector: 'app-user',
  template: '<h1>User Profile</h1>'
})
class UserComponent {
  @Input() userId: string;
}
```
*Simple explanation: Frameworks like Angular use decorators to define components, inputs, and other features.*

## 9. Type Manipulation & Utility Types

### Built-in Utility Types
- **Partial**: Makes all properties optional
  ```typescript
  interface User {
    name: string;
    age: number;
  }
  
  function updateUser(user: User, updates: Partial<User>) {
    return { ...user, ...updates };
  }
  
  const john = { name: "John", age: 30 };
  updateUser(john, { age: 31 }); // Valid, don't need to provide name
  ```
  *Simple explanation: We can update just some properties without having to provide all of them.*

- **Required**: Makes all properties required
  ```typescript
  interface User {
    name: string;
    age?: number;
  }
  
  const john: Required<User> = {
    name: "John",
    age: 30 // Now required
  };
  ```
  *Simple explanation: We're making every property mandatory, even if it was optional before.*

- **Readonly**: Makes all properties read-only
  ```typescript
  interface User {
    name: string;
    age: number;
  }
  
  const john: Readonly<User> = {
    name: "John",
    age: 30
  };
  // john.age = 31; // Error
  ```
  *Simple explanation: We're making it so the properties can't be changed after they're set.*

- **Pick**: Creates a type with selected properties
  ```typescript
  interface User {
    name: string;
    age: number;
    email: string;
  }
  
  type UserContact = Pick<User, "name" | "email">;
  // Equivalent to { name: string, email: string }
  ```
  *Simple explanation: We're creating a new type with just the properties we need.*

- Other utility types include `Omit`, `Exclude`, `Extract`, `Record`, etc.

### Custom Utility Types
```typescript
type Nullable<T> = T | null;
type Optional<T> = T | undefined;

let possiblyNullName: Nullable<string> = null;
let possiblyUndefinedAge: Optional<number> = undefined;
```
*Simple explanation: We can create our own helper types to handle common patterns.*

## 10. Working with Third-Party JavaScript Libraries

### Type Declarations: `@types/...`
```typescript
// Install types for a library
// npm install --save-dev @types/lodash

// Now we can use the library with types
import * as _ from 'lodash';
_.chunk([1, 2, 3, 4], 2); // TypeScript understands this
```
*Simple explanation: We can add type information to libraries that don't have it built in.*

### Using DefinitelyTyped

DefinitelyTyped is a repository of type definitions for JavaScript libraries.

```typescript
// Install types from DefinitelyTyped
// npm install --save-dev @types/jquery

// Use in your code
import * as $ from 'jquery';
$('button').click(() => {
  alert('Clicked!');
});
```
*Simple explanation: There's a community repository where people contribute type definitions for popular libraries.*

### Writing Custom Type Declarations
```typescript
// someLibrary.d.ts
declare module 'some-library' {
  export function doSomething(value: string): number;
  export class Helper {
    static format(value: string): string;
  }
}

// Using it
import { doSomething } from 'some-library';
```
*Simple explanation: If types don't exist for a library, we can write our own.*

### Mixing JS and TS Code
```typescript
// Old JavaScript module
// sum.js
module.exports = function sum(a, b) {
  return a + b;
}

// TypeScript code
// app.ts
// @ts-ignore
import sum from './sum';
const result = sum(1, 2);
```
*Simple explanation: We can use JavaScript code in TypeScript projects, but we might need to provide type information.*

## 11. Asynchronous TypeScript

### Promises with Types
```typescript
function fetchUser(): Promise<User> {
  return fetch('/api/user')
    .then(response => response.json());
}

fetchUser().then(user => {
  console.log(user.name); // TypeScript knows user has a name property
});
```
*Simple explanation: We can specify what type of data a Promise will eventually contain.*

### `async/await` with Return Types
```typescript
async function fetchUser(): Promise<User> {
  const response = await fetch('/api/user');
  return await response.json() as User;
}

async function displayUserName() {
  const user = await fetchUser();
  console.log(user.name); // TypeScript knows user has a name property
}
```
*Simple explanation: We can use more modern syntax for handling asynchronous code while keeping type safety.*

### Working with APIs
```typescript
interface User {
  id: number;
  name: string;
  email: string;
}

async function getUsers(): Promise<User[]> {
  const response = await fetch('https://api.example.com/users');
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  
  return await response.json() as User[];
}
```
*Simple explanation: We can define what shape of data we expect from an API and TypeScript will help ensure we use it correctly.*

### Observables with RxJS
```typescript
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface User {
  id: number;
  name: string;
}

// Return type is an Observable that will emit User objects
function getUsers(): Observable<User[]> {
  return this.http.get<User[]>('/api/users')
    .pipe(
      map(users => users.map(user => ({
        ...user,
        name: user.name.toUpperCase()
      })))
    );
}
```
*Simple explanation: When using a reactive programming approach with libraries like RxJS, we can still maintain type safety.*

## 12. Testing TypeScript Code

### Using Jest or Jasmine with TypeScript
```typescript
// Function we want to test
function add(a: number, b: number): number {
  return a + b;
}

// Jest test
describe('add function', () => {
  it('should add two numbers correctly', () => {
    expect(add(1, 2)).toBe(3);
    expect(add(-1, 1)).toBe(0);
  });
});
```
*Simple explanation: We can write tests for our TypeScript code to make sure it works correctly.*

### Type-Safe Unit Tests
```typescript
interface User {
  name: string;
  age: number;
}

function isAdult(user: User): boolean {
  return user.age >= 18;
}

describe('isAdult function', () => {
  it('should return true for adults', () => {
    const adult: User = { name: "John", age: 30 };
    expect(isAdult(adult)).toBe(true);
  });
  
  it('should return false for minors', () => {
    const minor: User = { name: "Billy", age: 15 };
    expect(isAdult(minor)).toBe(false);
  });
});
```
*Simple explanation: Our tests can use the same type definitions as our code, making them more accurate.*

### Mocking Functions & Interfaces
```typescript
interface UserService {
  getUser(id: string): Promise<User>;
}

// Mock implementation for testing
const mockUserService: UserService = {
  getUser: jest.fn().mockResolvedValue({ name: "John", age: 30 })
};

async function testUserRetrieval() {
  const user = await mockUserService.getUser("123");
  expect(user.name).toBe("John");
}
```
*Simple explanation: We can create fake versions of services or functions for testing purposes.*

## 13. Real-World Patterns & Best Practices

### Structuring TS Projects
```
src/
  models/          // Type definitions
    user.ts
    product.ts
  services/        // Business logic
    userService.ts
  utils/           // Helper functions
    formatters.ts
  index.ts         // Main entry point
```
*Simple explanation: Organizing code into folders by purpose helps keep projects maintainable.*

### Clean Code Practices with Types
```typescript
// Bad
function process(x: any) {
  // ...
}

// Good
function process(user: User) {
  // ...
}
```
*Simple explanation: Be specific about types to make code clearer and catch errors earlier.*

### Type Narrowing & Defensive Coding
```typescript
function processValue(value: string | null | undefined) {
  // Defensive check
  if (!value) {
    return 'No value provided';
  }
  
  // Type is narrowed to string
  return value.toUpperCase();
}
```
*Simple explanation: We check for potential problems before using values, and TypeScript understands these checks.*

### Avoiding Type Hell
```typescript
// Too complex
type UserOrAdminOrManagerWithPermissionsAndSettings = 
  | { type: 'user'; permissions: string[] } 
  | { type: 'admin'; settings: object }
  | { type: 'manager'; team: string; permissions: string[] };

// Better approach
interface BaseUser {
  type: string;
}

interface RegularUser extends BaseUser {
  type: 'user';
  permissions: string[];
}

interface Admin extends BaseUser {
  type: 'admin';
  settings: object;
}

type SystemUser = RegularUser | Admin | Manager;
```
*Simple explanation: Break complex types into smaller, manageable pieces to keep code readable.*

### Linting and Formatting
```typescript
// Using ESLint and Prettier for consistent code
// .eslintrc.js
module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ]
};
```
*Simple explanation: We can use tools to automatically check for common mistakes and ensure consistent formatting.*
