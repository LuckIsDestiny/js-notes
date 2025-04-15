In JavaScript, `var`, `let`, and `const` are used to declare variables, but they have different characteristics regarding their scope, hoisting, and reassignability. Here's an overview with examples:

1. **`var`**:
   - Function-scoped: The variable is scoped to the function in which it is declared.
   - Hoisting: The variable declaration is moved to the top of its scope during compilation, but its initialization remains in place.
   - Reassignable: The variable can be reassigned.

   Example:
   ```javascript
   function varExample() {
       if (true) {
           var x = 10;
           console.log(x); // 10
       }
       console.log(x); // 10, var is function-scoped
   }
   varExample();
   ```

2. **`let`**:
   - Block-scoped: The variable is scoped to the block (e.g., `{}`) in which it is declared.
   - Hoisting: The variable is hoisted, but it is not initialized, which means it cannot be used until the declaration is encountered (temporal dead zone).
   - Reassignable: The variable can be reassigned.

   Example:
   ```javascript
   function letExample() {
       if (true) {
           let y = 20;
           console.log(y); // 20
       }
       // console.log(y); // ReferenceError: y is not defined, let is block-scoped
   }
   letExample();
   ```

3. **`const`**:
   - Block-scoped: The variable is scoped to the block (e.g., `{}`) in which it is declared.
   - Hoisting: The variable is hoisted, but it is not initialized, which means it cannot be used until the declaration is encountered (temporal dead zone).
   - Non-reassignable: The variable cannot be reassigned, though if it is an object or array, the contents can be modified.

   Example:
   ```javascript
   function constExample() {
       if (true) {
           const z = 30;
           console.log(z); // 30
           // z = 40; // TypeError: Assignment to constant variable, const cannot be reassigned
       }
       // console.log(z); // ReferenceError: z is not defined, const is block-scoped
   }
   constExample();
   ```

### Summary
- **`var`**: Function-scoped, hoisted, reassignable.
- **`let`**: Block-scoped, hoisted but not initialized, reassignable.
- **`const`**: Block-scoped, hoisted but not initialized, non-reassignable.

### 1. Arrow Functions

**Example**: A function to calculate the total price of items in a shopping cart.

```javascript
const calculateTotalPrice = (items) => {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
};

const cartItems = [
  { name: 'Laptop', price: 1000, quantity: 2 },
  { name: 'Phone', price: 500, quantity: 3 }
];

console.log(calculateTotalPrice(cartItems)); // Output: 3500
```
//find the non dupicate number  using reduced function  
const numbers=[1,3,4,5,6,4,6,9,8]

const nonduplicateNumber=numbers.reduce((accumulate,numbers)=>{
    if(!accumulate.includes(numbers)){
        accumulate.push(numbers)
    }
    return accumulate
},[])
console.log(nonduplicateNumber);



**Explanation**: 
- Arrow functions provide a shorter syntax for writing functions.
- Here, `calculateTotalPrice` is an arrow function that takes `items` as an argument.
- It uses the `reduce` method to sum up the total price of items in the cart.

### 2. Template Literals

**Example**: Generating an order confirmation message.

```javascript
const customerName = 'John Doe';
const orderNumber = '12345';
const message = `Hello ${customerName}, 

Thank you for your order! Your order number is ${orderNumber}.`;

console.log(message);
```

**Explanation**: 
- Template literals allow for easier string interpolation and multi-line strings.
- `${customerName}` and `${orderNumber}` are placeholders that get replaced with the values of `customerName` and `orderNumber`.

### 3. Destructuring Assignments

**Example**: Extracting product details from an object.

```javascript
const product = {
  id: 'P123',
  name: 'Laptop',
  price: 1000
};

const { id, name, price,desc } = product;

console.log(id);   // Output: P123
console.log(name); // Output: Laptop
console.log(price);// Output: 1000
console.log(desc); // Output:
```

**Explanation**: 
- Destructuring assignments allow you to extract values from objects or arrays into variables.
- Here, `id`, `name`, and `price` are extracted from the `product` object.

### 4. Default Parameters

**Example**: A function to apply a discount with a default value.

```javascript
const applyDiscount = (price, discount = 0.10) => {
  return price - (price * discount);
};

console.log(applyDiscount(100));       // Output: 90 (default 10% discount)
console.log(applyDiscount(100, 0.20)); // Output: 80 (20% discount)
```

**Explanation**: 
- Default parameters allow you to set default values for function parameters.
- Here, `discount` has a default value of `0.10` if no value is provided.

### 5. Rest and Spread Operators

**Example**: Adding multiple products to a cart.

```javascript
const addProductsToCart = (cart, ...products) => {
  return [...cart, ...products];
};

const currentCart = [
  { name: 'Laptop', price: 1000 },
];

const newProducts = [
  { name: 'Phone', price: 500 },
  { name: 'Tablet', price: 300 }
];

const updatedCart = addProductsToCart(currentCart, ...newProducts);

console.log(updatedCart);
```

**Explanation**: 
- The spread operator (`...`) is used to expand arrays or objects.
- The rest operator (`...products`) collects multiple arguments into an array.

### 6. Enhanced Object Literals

**Example**: Creating an order object.

```javascript
const customerId = 'C123';
const items = [
  { name: 'Laptop', price: 1000, quantity: 1 },
  { name: 'Phone', price: 500, quantity: 2 }
];

const order = {
  customerId,
  items,
  total: items.reduce((total, item) => total + item.price * item.quantity, 0)
};

console.log(order);
```

**Explanation**: 
- Enhanced object literals allow for shorter syntax when defining objects.
- Here, `customerId` and `items` are used directly without needing `customerId: customerId`.

### 7. Classes

**Example**: Defining a `Product` class.

```javascript
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  display() {
    console.log(`${this.name} costs $${this.price}`);
  }
}

const laptop = new Product('Laptop', 1000);
laptop.display(); // Output: Laptop costs $1000
```

**Explanation**: 
- Classes provide a way to define objects with properties and methods.
- The `Product` class has a constructor to initialize the `name` and `price`, and a `display` method.

### 8. Modules

**Example**: Exporting and importing a function.

**utils.js**
```javascript
export const calculateTotalPrice = (items) => {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
};
```

**main.js**
```javascript
import { calculateTotalPrice } from './utils.js';

const cartItems = [
  { name: 'Laptop', price: 1000, quantity: 2 },
  { name: 'Phone', price: 500, quantity: 3 }
];

console.log(calculateTotalPrice(cartItems)); // Output: 3500
```

**Explanation**: 
- Modules allow you to organize code by exporting and importing functions, objects, or primitives.
- Here, `calculateTotalPrice` is exported from `utils.js` and imported into `main.js`.

### 9. Promises

**Example**: Fetching product data from an API.

```javascript
const fetchProductData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { name: 'Laptop', price: 1000 };
      resolve(data);
    }, 1000);
  });
};

fetchProductData().then((product) => {
  console.log(product);
});
```

**Explanation**: 
- Promises represent asynchronous operations that can be completed or failed in the future.
- Here, `fetchProductData` returns a promise that resolves with product data after 1 second.

### 10. Generators

**Example**: Generating unique order IDs.

```javascript
function* generateOrderId() {
  let id = 1;
  while (true) {
    yield `ORD${id++}`;
  }
}

const orderIdGenerator = generateOrderId();

console.log(orderIdGenerator.next().value); // Output: ORD1
console.log(orderIdGenerator.next().value); // Output: ORD2
```

**Explanation**: 
- Generators are functions that can be paused and resumed, producing a sequence of values.
- Here, `generateOrderId` is a generator function that produces unique order IDs.
const transactions = [
    { type: 'deposit', amount: 100 },
    { type: 'withdraw', amount: 50 },
    { type: 'deposit', amount: 200 },
    { type: 'withdraw', amount: 30 }
];
function* processTransactions(transactions) {
    let balance = 0;
    for (const transaction of transactions) {
        if (transaction.type === 'deposit') {
            balance += transaction.amount;
            yield `Deposited $${transaction.amount}, new balance: $${balance}`;
        } else if (transaction.type === 'withdraw') {
            if (balance >= transaction.amount) {
                balance -= transaction.amount;
                yield `Withdrew $${transaction.amount}, new balance: $${balance}`;
            } else {
                yield `Insufficient funds for withdrawal of $${transaction.amount}, balance remains: $${balance}`;
            }
        }
    }
    return `All transactions processed, final balance: $${balance}`;
}
const transactionProcessor = processTransactions(transactions);

console.log(transactionProcessor.next().value); // Deposited $100, new balance: $100
console.log(transactionProcessor.next().value); // Withdrew $50, new balance: $50
console.log(transactionProcessor.next().value); // Deposited $200, new balance: $250
console.log(transactionProcessor.next().value); // Withdrew $30, new balance: $220
console.log(transactionProcessor.next().value); // All transactions processed, final balance: $220


### 11. Iterators

**Example**: Custom iterator for a product catalog.

```javascript
const catalog = {
  products: [
    { name: 'Laptop', price: 1000 },
    { name: 'Phone', price: 500 }
    {name: 'Laptop', price: 2000}
  ],
  [Symbol.iterator]() {
    let index = 0;
    const products = this.products;
    return {
      next() {
        if (index < products.length) {
          return { value: products[index++], done: false };
        } else {
          return { done: true };
        }
      }
    };
  }
};

for (const product of catalog) {
  console.log(product);
}
```

**Explanation**: 
- Iterators provide a way to define custom iteration behavior for objects.
- The `catalog` object has a custom iterator defined using the `Symbol.iterator` method.

### 12. Maps and Sets

**Example**: Storing unique customer IDs in a Set.

```javascript
const customerIds = new Set();

customerIds.add('C123');
customerIds.add('C456');
customerIds.add('C123'); // Duplicate, won't be added

console.log(customerIds); // Output: Set { 'C123', 'C456' }
```

**Explanation**: 
- Sets store unique values of any type.
- Here, `customerIds` is a Set that stores unique customer IDs.

### 13. Symbol Data Type

**Example**: Using symbols as unique property keys.

```javascript
const product = {
  name: 'Laptop',
  [Symbol('id')]: 'P123'
};

const idSymbol = Object.getOwnPropertySymbols(product)[0];
console.log(product[idSymbol]); // Output: P123
```

**Explanation**: 
- Symbols are unique and immutable primitive values often used as unique property keys.
- Here, a symbol is used as the key for the `id` property of the `product` object.

### 14. Proxies

**Example**: Validating product price with a proxy.

```javascript
const product = {
  name: 'Laptop',
  price: 1000
};

const productProxy = new Proxy(product, {
  set(target, property, value) {
    if (property === 'price' && value < 0) {
      throw new Error('Price cannot be negative');
    }
    target[property] = value;
    return true;
  }
});

try {
  productProxy.price = -500;
} catch (error) {
  console.error(error.message); // Output: Price cannot be negative
}
```

**Explanation**: 
- Proxies allow you to define custom behavior for fundamental operations on objects.
- Here, a proxy is used to validate that

 the product price cannot be negative.

### 15. Async/Await

**Example**: Fetching product data asynchronously.

```javascript
const fetchProductData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { name: 'Laptop', price: 1000 };
      resolve(data);
    }, 1000);
  });
};

const getProductData = async () => {
  const product = await fetchProductData();
  console.log(product);
};

getProductData();
```

**Explanation**: 
- Async/await provides a way to write asynchronous code that looks synchronous.
- Here, `getProductData` is an async function that waits for `fetchProductData` to resolve.

### 16. String Methods (e.g., startsWith, endsWith)

**Example**: Checking product category.

```javascript
const category = 'Electronics_Laptop';

console.log(category.startsWith('Electronics')); // Output: true
console.log(category.endsWith('Laptop'));        // Output: true
```

**Explanation**: 
- `startsWith` and `endsWith` methods check if a string starts or ends with a specified substring.
- Here, `category` is checked to see if it starts with 'Electronics' and ends with 'Laptop'.

### 17. Array Methods (e.g., map, filter, reduce)

**Example**: Filtering and mapping products.

```javascript
const products = [
  { name: 'Laptop', price: 1000 },
  { name: 'Phone', price: 500 },
  { name: 'Tablet', price: 300 }
];

const affordableProducts = products.filter(product => product.price < 800);
const productNames = affordableProducts.map(product => product.name);

console.log(productNames); // Output: ['Phone', 'Tablet']
```

**Explanation**: 
- `filter` creates a new array with elements that pass a test.
- `map` creates a new array with the results of calling a function on every element.
- Here, `products` are filtered by price, and the names of affordable products are extracted.

### 18. Object.assign() Method

**Example**: Merging product details.

```javascript
const productDetails = { name: 'Laptop', price: 1000 };
const additionalDetails = { brand: 'BrandX', warranty: '2 years' };

const mergedProduct = Object.assign({}, productDetails, additionalDetails);

console.log(mergedProduct);
```

**Explanation**: 
- `Object.assign` copies properties from one or more source objects to a target object.
- Here, `productDetails` and `additionalDetails` are merged into `mergedProduct`.

### 19. Let and Const Declarations

**Example**: Declaring variables for product details.

```javascript
const productName = 'Laptop';
let productPrice = 1000;

productPrice = 900; // Price can change, hence using let

console.log(productName); // Output: Laptop
console.log(productPrice);// Output: 900
```

**Explanation**: 
- `const` is used to declare constants (unchangeable variables).
- `let` is used to declare variables that can be reassigned.

### 20. Block Scoping (e.g., with let and const)

**Example**: Scoped discount variable.

```javascript
if (true) {
  const discount = 0.10;
  console.log(discount); // Output: 0.10
}

// console.log(discount); // Error: discount is not defined
```

**Explanation**: 
- `let` and `const` are block-scoped, meaning they are only accessible within the block they are declared.
- Here, `discount` is only accessible within the `if` block.

### 21. Fetch API

**Example**: Fetching product data from a server.

```javascript
fetch('https://api.example.com/products/1')
  .then(response => response.json())
  .then(product => console.log(product))
  .catch(error => console.error('Error:', error));
```

**Explanation**: 
- The Fetch API is used to make network requests.
- Here, a GET request is made to fetch product data from the server.

### 22. Array Destructuring

**Example**: Extracting product names from an array.

```javascript
const products = ['Laptop', 'Phone', 'Tablet'];
const [firstProduct, secondProduct] = products;

console.log(firstProduct);  // Output: Laptop
console.log(secondProduct); // Output: Phone
```

**Explanation**: 
- Array destructuring allows you to unpack values from arrays into distinct variables.
- Here, `firstProduct` and `secondProduct` are extracted from the `products` array.

### 23. Object Destructuring

**Example**: Extracting product details from an object.

```javascript
const product = {
  name: 'Laptop',
  price: 1000
};

const { name, price } = product;

console.log(name);  // Output: Laptop
console.log(price); // Output: 1000
```

**Explanation**: 
- Object destructuring allows you to unpack properties from objects into distinct variables.
- Here, `name` and `price` are extracted from the `product` object.

### 24. Object Literal Extensions

**Example**: Creating a product object.

```javascript
const name = 'Laptop';
const price = 1000;

const product = {
  name,
  price,
  display() {
    console.log(`${this.name} costs $${this.price}`);
  }
};

product.display(); // Output: Laptop costs $1000
```

**Explanation**: 
- Object literal extensions allow for shorthand property names and methods.
- Here, `name` and `price` are used directly as property names, and `display` is a method.

### 25. Spread Syntax in Function Calls

**Example**: Adding products to an order.

```javascript
const addProductsToOrder = (order, ...products) => {
  return [...order, ...products];
};

const currentOrder = [
  { name: 'Laptop', price: 1000 }
];

const newProducts = [
  { name: 'Phone', price: 500 },
  { name: 'Tablet', price: 300 }
];

const updatedOrder = addProductsToOrder(currentOrder, ...newProducts);

console.log(updatedOrder);
```

**Explanation**: 
- The spread syntax allows an iterable to expand in places where multiple elements are expected.
- Here, `...products` expands the new products array into individual elements.

### 26. Rest Parameters

**Example**: Summing up product prices.

```javascript
const sumPrices = (...prices) => {
  return prices.reduce((total, price) => total + price, 0);
};

console.log(sumPrices(1000, 500, 300)); // Output: 1800
```

**Explanation**: 
- Rest parameters allow a function to accept an indefinite number of arguments as an array.
- Here, `...prices` collects all arguments into the `prices` array.

### 27. Async Iterators

**Example**: Fetching products asynchronously.

```javascript
async function* fetchProducts() {
  const products = [
    { name: 'Laptop', price: 1000 },
    { name: 'Phone', price: 500 }
  ];

  for (const product of products) {
    yield new Promise(resolve => setTimeout(() => resolve(product), 1000));
  }
}

const fetchProductsAsync = async () => {
  for await (const product of fetchProducts()) {
    console.log(product);
  }
};

fetchProductsAsync();
```

**Explanation**: 
- Async iterators allow for asynchronous iteration using `for await...of` loops.
- Here, `fetchProducts` is an async generator that yields promises resolving to products.

### 28. RegExp Improvements

**Example**: Validating a product code.

```javascript
const productCode = 'ABC-1234';
const regex = /^[A-Z]{3}-\d{4}$/;

console.log(regex.test(productCode)); // Output: true
```

**Explanation**: 
- Regular expressions (RegExp) are patterns used to match character combinations in strings.
- Here, `regex` checks if `productCode` matches the pattern of three uppercase letters followed by a hyphen and four digits.

### 29. BigInt Data Type

**Example**: Handling large product inventory numbers.

```javascript
const inventoryCount = 123456789012345678901234567890n;

console.log(inventoryCount); // Output: 123456789012345678901234567890n
```

**Explanation**: 
- `BigInt` is a built-in object that provides a way to represent whole numbers larger than `Number.MAX_SAFE_INTEGER`.
- Here, `inventoryCount` is a BigInt representing a large inventory number.

### 30. Promise.allSettled

**Example**: Fetching multiple product data.

```javascript
const fetchProduct1 = new Promise(resolve => setTimeout(() => resolve('Product 1'), 1000));
const fetchProduct2 = new Promise((resolve, reject) => setTimeout(() => reject('Error fetching product 2'), 1500));
const fetchProduct3 = new Promise(resolve => setTimeout(() => resolve('Product 3'), 2000));

Promise.allSettled([fetchProduct1, fetchProduct2, fetchProduct3])
  .then(results => console.log(results));
```

**Explanation**: 
- `Promise.allSettled` returns a promise that resolves after all of the given promises have either resolved or rejected.
- Here, it fetches multiple product data, handling both resolved and rejected promises.
