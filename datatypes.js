// let myVariable = 10;


// let myString = "Hello, world!";
// let myNumber = 42;
// let myBoolean = true;
// let myArray = [1, 2, 3, 4, 5];
// let myObject = { name: "John", age: 30 };


// function greet(name) {
//     console.log("Hello, " + name + "!");
//   }

//   greet(42); // Prints "Hello, John!"
// let x = 10;

// if (x > 5) {
//   console.log("x is greater than 5");
// } else {
//   console.log("x is less than or equal to 5");
// }
const fetchProductData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = { name: 'Laptop', price: 1000 };
        resolve(data);
      }, 10000);
    });
  };
  
  const getProductData = async () => {
    const product = await fetchProductData();
    console.log(product);
  };
  
  getProductData();