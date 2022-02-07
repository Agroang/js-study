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

function copyArrayAndManipulate(array, instructions) { // accepts a function
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(instructions(array[i])); // refers to to the function
  }
  return output;
}
function multiplyBy2(input) { return input * 2; }
const result = copyArrayAndManipulate([1, 2, 3], multiplyBy2);



// https://frontendmasters.com/courses/javascript-hard-parts-v2/generalized-functions/
// https://static.frontendmasters.com/resources/2019-09-18-javascript-hard-parts-v2/javascript-hard-parts-v2.pdf
