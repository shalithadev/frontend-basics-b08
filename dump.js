let promiseExample = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved!");
  }, 1000);
}); // Example of a Promise
console.log("Type of promiseExample:", typeof promiseExample); // Output: object

// 02. JavaScript Async/Await: Provides a way to work with asynchronous code in a more synchronous manner (introduced in ES2017).
async function asyncFunction() {
  let result = await promiseExample;
  console.log(result);
} // Example of an async function
console.log("Type of asyncFunction:", typeof asyncFunction); // Output: function

// 03. JavaScript Generators: Represents a special type of function that can be paused and resumed (introduced in ES6).
function* generatorFunction() {
  yield 1;
  yield 2;
  yield 3;
} // Example of a generator function
console.log("Type of generatorFunction:", typeof generatorFunction); // Output: function

// 04. JavaScript Modules: Allows for the organization of code into reusable pieces (introduced in ES6).
// Example of a module (this would typically be in a separate file)
// export function moduleFunction() {
//   return "This is a module function!";
// }
// console.log("Type of moduleFunction:", typeof moduleFunction); // Output: function
