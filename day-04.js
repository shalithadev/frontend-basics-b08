// Session - 04

// 01. JavaScript Promises:
// A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value (introduced in ES6).
// A promise can be in one of three states: pending, fulfilled, or rejected

// const operationOne = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const success = true; // Simulating a successful operation
//     if (success) {
//       resolve("Operation One completed successfully!"); // Fulfill the promise
//     } else {
//       reject("Operation One failed."); // Reject the promise
//     }
//   }, 2000); // Simulate a delay of 2 seconds
// });

// 02. Consuming Promises with .then() and .catch()
// You can consume a Promise using the .then() method for handling fulfilled values and the .catch() method for handling rejected values.

// console.log("Operation has stated!");
// operationOne
//   .then((result) => {
//     console.log("Success:", result);
//   })
//   .catch((error) => {
//     console.log("Error:", error);
//   })
//   .finally(() => {
//     console.log("Finally: Operation completed (either success or failure)"); // This will run regardless of the promise outcome
//   });

// 03. JavaScript Async/Await Syntax

// Async/Await released in ES2017 (aka ES08)
// Async/Await is a syntactic sugar built on top of Promises.

// Example of using async/await:

// async function fetchData() {
//   try {
//     const result = await operationOne; // Wait for the promise to resolve
//     console.log("Data fetched successfully:", result);
//   } catch (error) {
//     console.log("Error fetching data:", error);
//   } finally {
//     console.log("Fetch operation completed.");
//   }
// }

// fetchData(); // Call the async function to execute the code
// console.log("Data fetching operation has stated!");

// Real-world async/await example

// async function fetchPosts() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const posts = await response.json();
//     console.log("Posts fetched successfully!", posts);
//   } catch (error) {
//     console.log("Error fetching posts!", error);
//   } finally {
//     //
//   }
// }

// Real-world then and catch example

// function fetchPosts() {
//   fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((response) => response.json())
//     .then((posts) => {
//       console.log("Posts fetched successfully!", posts);
//     })
//     .catch((error) => {
//       console.log("Error", error);
//     })
//     .finally(() => {
//       console.log("Finally: Finished!");
//     });
// }

// fetchPosts(); // Call the async function to execute the code

// 04. JavaScript Callbacks
// A callback is a function that is passed as an argument to another function and is executed after some operation has been completed. Callbacks are commonly used in asynchronous programming to handle the results of asynchronous operations.

// Example of using a callback:
function fetchDataWithCallback(callback) {
  console.log("Fetching data...");
  // Simulate an asynchronous operation using setTimeout
  setTimeout(() => {
    const message = "Data fetched successfully!";
    const data = { id: 1, name: "Sample Data" }; // Simulated data object
    callback(null, { message, data }); // Call the callback with the result
  }, 2000); // Simulate 2 seconds delay
}

// Callback function act as a processor function
function handleData(error, result) {
  if (error) {
    console.log("Error fetching data:", error);
  } else {
    console.log("Success:", result.message);
    console.log("Data:", result.data);
  }
}

fetchDataWithCallback(handleData); // Call the function with the callback to execute the code

// 05. Variable Naming Conventions

// camelCase - variable names, function names, REST API keys
// ex: const handlePosts() {}, const firstName = "Lucas"
// PascalCase - Class name, Components names, interfaces & types
// ex: UserProps, Class Person {...}
// kebab-case - File names, Asset names
// ex: movie-dialog.tsx, hero-image.jpg
// snake_case -
// SCREAMING_SNAKE_CASE - constant variables
// ex: const LOCATIONS_LIST = ["Kandy", "Colombo"]
// Train-Case-Name -
// UPPERCASE - constant variables
// ex: LOCATIONS = ["Kandy", "Colombo"]
