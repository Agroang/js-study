// https://frontendmasters.com/courses/javascript-hard-parts-v2/
// https://static.frontendmasters.com/resources/2019-09-18-javascript-hard-parts-v2/javascript-hard-parts-v2.pdf

// The Three JavaScript Principles:
// 1) Thread of Execution: JS runs code line by line
// 2) Memory: JS saves 'data' in it's memory for us to use later
// 3) Call Stack: JS keeps track of what is currently running

// When you run a function it gets added to the stack, once you hit return
// you go back one level above, the outermost level is global()

// There is an "Execution Context" created to run the code of a function
// and it has two parts: the thread of execution and the memory

// When the function finished running, all is deleted but what has been
// returned.

// High Order Functions: (accept functions as parameters, very re usable)

// We may not want to decide exactly what some of our functionality is until we
// run our function

// (Regular function:)

function copyArrayAndMultiplyBy2(array) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(array[i] * 2);
  }
  return output;
}
const myArray = [1, 2, 3];
const result = copyArrayAndMultiplyBy2(myArray);

// (High order function version of it:)

function copyArrayAndManipulate(array, instructions) { // copyArrayAndManipulate
  // is a High Order Function
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(instructions(array[i])); // refers to to the function
  }
  return output;
}
function multiplyBy2(input) { return input * 2; } // Callback function passed to
// copyArrayAndManipulate function
const result = copyArrayAndManipulate([1, 2, 3], multiplyBy2);

// How is this possible?
// Functions in javascript = first class objects
// They can co - exist with and can be treated like any other javascript object
// 1. Assigned to variables and properties of other objects
// 2. Passed as arguments into functions
// 3. Returned as values from functions

// So, as a recap, a High Order Function is takes in a function or passes out a
// function. The name is just a term to describe these functions - any function
// that does it we call that - but there's nothing different about them inherently

// This is the logic the funtions such as map, filter and reduce use, you pretty
// much set the rules with the callback function. This is the most readable way
// to write code to work with data (you also avoid modifying the original data
// as you return a new value that is not the original's modified version)

// Callbacks are a core aspect of async JavaScript, and are under - the - hood
// of promises, async / await

// Arrow Functions:
// Arrow functions can be very legible (less code) and look great, but they lose
// readiblity in the process. There are some fundamental differences when it
// comes to the use of the "this" keyword.

function multiplyBy2(input) { return input * 2; } // traditional way
const multiplyBy2 = (input) => { return input * 2 } // long arrow function
const multiplyBy2 = (input) => input * 2 // implicit return and curly braces
// Works when you are doing something very simple with the function
const multiplyBy2 = input => input * 2 // implicit round braces/return/curly

// For most purposes, the above are all exactly the same.

// The standard nowadays is to go further, and not even declare the callback
// function in global, but simple create inside the parameter

function copyArrayAndManipulate(array, instructions) { // still expects function
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(instructions(array[i]));
  }
  return output;
}

const result = copyArrayAndManipulate([1, 2, 3], input => input * 2);
// We pass the call back like that, not saved into a constant or declaring it
// beforehand, most used practice nowadays so need to be careful and understand
// what is actually doing here.

// Anonymous and arrow functions:
// Improve immediate legibility of the code (less code). Not readibility
// But at least for most purposes here they are ‘syntactic sugar’
// Understanding how they’re working under - the - hood is vital to avoid
// confusion.

// Closure is one of the most elegant and interesting features of JS, it uses
// a "backpack" that holds hidden data [[scope]] when you return the function
// that keeps the data around that function available, even after the execution
// context has finished and delete, making having the ability to hold information
// overtime. This is incredibly powerful as you could, for example, make a
// function only a certain number of times based on a condition, like, when you
// run the function increases a value that is on that backpack, and if it's
// over a certain a amount, then put a different condition, something like a
// different return.



// https://frontendmasters.com/courses/javascript-hard-parts-v2/nested-function-scope/
// https://static.frontendmasters.com/resources/2019-09-18-javascript-hard-parts-v2/javascript-hard-parts-v2.pdf
