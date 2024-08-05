//JavaScript supports various types of functions, each serving different purposes. Here are the main types:

//1. **Named Functions**: Functions that are declared with a specific name.
   
   function sayHello() {
       console.log("Hello!");
   }
  

//2. **Anonymous Functions**: Functions without a name, often used as arguments to other functions or assigned to variables.

   const sayHello = function() {
       console.log("Hello!");
   };
  

//3. **Arrow Functions**: A shorter syntax for anonymous functions, introduced in ES6. They also lexically bind the `this` value.
  
   const sayHello = () => {
       console.log("Hello!");
   };
   

//4. **Immediately Invoked Function Expressions (IIFE)**: Functions that are executed immediately after they are created.
   
   (function() {
       console.log("This is an IIFE");
   })();
   

//5. **Constructor Functions**: Functions used to create objects, with the `new` keyword.
   
   function Person(name) {
       this.name = name;
   }
   const person1 = new Person("Alice");
   

//6. **Generator Functions**: Functions that can be paused and resumed, useful for handling asynchronous operations. They use the `function*` syntax and `yield` keyword.
 
   function* generatorFunction() {
       yield 1;
       yield 2;
       yield 3;
   }
   const generator = generatorFunction();
  

//7. **Async Functions**: Functions that return a `Promise` and use the `async` keyword. They allow for `await` expressions inside them, making asynchronous code easier to write and read.
  
   async function fetchData() {
       const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
       const data = await response.json();
       console.log(data);
   }
  

