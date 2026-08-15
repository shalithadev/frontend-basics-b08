// This is a external JavaScript file linked to the HTML document using the <script> tag with the "defer" attribute.

// First Question: Is JavaScript part of Java?
// No, JavaScript is not part of Java. Despite the similarity in their names, they are two distinct programming languages with different purposes and functionalities.
// Java is a statically typed, object-oriented programming language primarily used for building standalone applications,
// while JavaScript is a dynamically typed scripting language mainly used for web development to create interactive web pages.

// Second Question: How similar are Java and JavaScript?
// Java and JavaScript share some similarities in syntax, such as the use of curly braces for code blocks and similar control flow statements (if, for, while).
// However, they differ significantly in their execution environments, type systems, and use cases.
// Java is compiled and runs on the Java Virtual Machine (JVM), while JavaScript is interpreted and runs in web browsers or on servers using environments like Node.js.
// Overall, while they may look similar at first glance, they serve different purposes and have distinct characteristics.

// This is single-line comment in JavaScript
/**
 * This is multi-line comment in JavaScript
 * Third Question: Why was it called JavaScript if it is not related to Java?
 * JavaScript was originally developed by Netscape and was initially named "Mocha," then "LiveScript," before finally being renamed to "JavaScript" in 1995.
 * The name change was primarily a marketing strategy to capitalize on the popularity of Java at the time, even though the two languages are not related.
 * The intention was to create an association with Java's success and to attract developers to use JavaScript for web development.
 **/

// Event Loop in JavaScript Example

// console.log("1. Start");

// setTimeout(() => {
//   console.log("2. Timeout callback (Macrotask)");
// }, 0);

// Promise.resolve().then(() => {
//   console.log("3. Promise resolved (Microtask)");
// });

// console.log("4. End");

// JavaScript Variables Declaration Types

// 1. var: Function-scoped variable declaration (not recommended for modern JavaScript)
// add a block scope to demonstrate the behavior of var
{
  // var name = "John";
}
// console.log(name);

// 2. let: Block-scoped variable declaration (recommended for modern JavaScript)
// let age = 30;
// console.log(age);

// 3. const: Block-scoped constant variable declaration (cannot be reassigned)
// const country = "USA";
// console.log(country);

// var ballOne = "Soccer"; // Function-scoped variable
var ballOne;
let ballTwo = "Basketball"; // Block-scoped variable
// let ballTwo;
const ballThree = "Tennis"; // Block-scoped constant variable
// const ballThree;

console.log("Global scope::::::::start");
console.log(ballOne); // Accessible due to var's function scope
console.log(ballTwo); // Accessible due to let being block-scoped
console.log(ballThree); // Accessible due to const being block-scoped
console.log("Global scope::::::::end");

{
  // ballOne = "Football"; // Reassigning the value of ballOne
  // ballTwo = "Volleyball"; // Reassigning the value of ballTwo
  // ballThree = "Badminton"; // Reassigning the value of ballThree (will throw an error because const cannot be reassigned)
  // Throw and error due to const cannot be reassigned.

  var ballOne = "Football"; // Block-scoped variable (shadows the global ballOne)
  let ballTwo = "Volleyball"; // Block-scoped variable (shadows the global ballTwo)
  // This is a block scope (Guest Room)
  console.log("Inside the block scope:::::::::::start");
  console.log(ballOne); // Accessible due to var's function scope
  console.log(ballTwo); // Accessible due to let being block-scoped
  console.log(ballThree); // Accessible due to const being block-scoped
  console.log("Inside the block scope:::::::::::end");
}

console.log("Global scope::::::::start");
console.log(ballOne); // Accessible due to var's function scope
console.log(ballTwo); // Accessible due to let being block-scoped
console.log(ballThree); // Accessible due to const being block-scoped
console.log("Global scope::::::::end");
