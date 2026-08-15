/**
 * JavaScript Keywords:
 *
 * break: Terminates the current loop or switch statement.
 * case: Specifies a block of code in a switch statement.
 * catch: Handles errors in try...catch blocks.
 * class: Declares a class (introduced in ES6).
 * const: Declares a read-only variable.
 * continue: Skips the current iteration in loops.
 * debugger: Invokes any available debugging functionality.
 * default: Specifies the default block in a switch statement.
 * delete: Removes a property from an object.
 * do: Used with while for do...while loops.
 * else: Specifies an alternative block of code in if...else statements.
 * export: Exports functions, objects, or primitives from a module.
 * extends: Creates a class that is a child of another class.
 * finally: Executes code after try...catch regardless of the outcome.
 * if: Executes a block of code based on a condition.
 * import: Imports functions, objects, or primitives from another module.
 * in: Checks if a property exists in an object.
 * instanceof: Tests whether an object is an instance of a specific constructor.
 * new: Creates an instance of an object.
 * return: Exits a function and optionally returns a value.
 * super: Refers to the parent class in class declarations.
 * switch: Executes different blocks of code based on conditions.
 * this: Refers to the current context object.
 * throw: Throws a custom error.
 * try: Defines a block of code to test for errors.
 * typeof: Returns a string indicating the type of a variable.
 * var: Declares a variable.
 * void: Discards the return value of an expression.
 * while: Creates a loop that runs as long as a condition is true.
 * with: Extends the scope chain for a statement (usage is discouraged).
 * yield: Pauses and resumes a generator function.
 */

// let catCh = "This is a break statement example.";

//JavaScript Variable Types:
// 1. String: Represents textual data enclosed in single or double quotes.
let name = "John Doe"; // Example of a string variable
let age = 30; // Example of a number variable

/**
 * Adds two numbers.
 * @param {number} num1
 * @param {number} num2
 * @returns {number}
 * This is JSDoc comment that describes the function and its parameters. It helps in generating documentation and provides information about the function's purpose and usage.
 */
// function addNumbers(num1, num2) {
//   if (typeof num1 !== "number" || typeof num2 !== "number") {
//     throw new Error("Both arguments must be numbers.");
//   }
//   return num1 + num2;
// }

// console.log("Name:", typeof name);
// console.log("Age:", typeof age);
// console.log("Sum of 5 and 10:", addNumbers(5, "10")); // This will demonstrate type coercion in JavaScript

// Primitive Data Types in JavaScript:
// 1. String: Represents textual data.
let greeting = "Hello, World!"; // Example of a string

// 2. Number: Represents numeric values (both integers and floating-point numbers).
let pi = 3.14159; // Example of a number

// 3. Boolean: Represents true or false values.
let isJavaScriptFun = true; // Example of a boolean
console.log("Type of isJavaScriptFun:", typeof isJavaScriptFun); // Output: boolean

// 4. Undefined: Represents a variable that has been declared but not assigned a value.
let undefinedVariable; // Example of an undefined variable
console.log("Type of undefinedVariable:", typeof undefinedVariable); // Output: undefined

// 5. Null: Represents the intentional absence of any object value.
let nullVariable = null; // Example of a null variable
console.log("Type of nullVariable:", typeof nullVariable); // Output: object (this is a known quirk in JavaScript)

// 6. Symbol: Represents a unique and immutable value (introduced in ES6).
let uniqueSymbol = Symbol("unique"); // Example of a symbol
console.log("Type of uniqueSymbol:", typeof uniqueSymbol); // Output: symbol

// 7. BigInt: Represents integers with arbitrary precision (introduced in ES2020).
let bigInteger = 1234567890123456789012345678901234567890n; // Example of a BigInt
console.log("Type of bigInteger:", typeof bigInteger); // Output: bigint

// Non-Primitive Data Types (Object Types) in JavaScript:
// 1. Object: Represents a collection of key-value pairs.
let person = {
  name: "Alice",
  age: 25,
  isStudent: true,
}; // Example of an object
console.log("Type of person:", typeof person); // Output: object

// 2. Array: Represents an ordered list of values.
let fruits = ["Apple", "Banana", "Cherry"]; // Example of an array
console.log("Type of fruits:", typeof fruits); // Output: object

// 3. Function: Represents a block of reusable code.
function greet(name) {
  return `Hello, ${name}!`;
} // Example of a function
console.log("Type of greet:", typeof greet); // Output: function

// 4. Date: Represents dates and times.
let currentDate = new Date(); // Example of a date object
console.log("Type of currentDate:", typeof currentDate); // Output: object

// 5. RegExp: Represents regular expressions for pattern matching.
let pattern = /ab+c/; // Example of a regular expression
console.log("Type of pattern:", typeof pattern); // Output: object

// 6. Map: Represents a collection of key-value pairs with unique keys (introduced in ES6).
let mapExample = new Map();
mapExample.set("key1", "value1");
mapExample.set("key2", "value2"); // Example of a Map
console.log("Type of mapExample:", typeof mapExample); // Output: object

// 7. Set: Represents a collection of unique values (introduced in ES6).
let setExample = new Set();
setExample.add(1);
setExample.add(2);
setExample.add(3); // Example of a Set
console.log("Type of setExample:", typeof setExample); // Output: object

// 8. WeakMap: Represents a collection of key-value pairs with weakly held keys (introduced in ES6).
let weakMapExample = new WeakMap();
let objKey = {};
weakMapExample.set(objKey, "value"); // Example of a WeakMap
console.log("Type of weakMapExample:", typeof weakMapExample); // Output: object

// 9. WeakSet: Represents a collection of unique objects with weakly held references (introduced in ES6).
let weakSetExample = new WeakSet();
let objValue = {};
weakSetExample.add(objValue); // Example of a WeakSet
console.log("Type of weakSetExample:", typeof weakSetExample); // Output: object
