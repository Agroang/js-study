// JavaScript: From Fundamentals to Functional JS, v2
// https://slides.com/bgando/f2f-final-day-1
// https://slides.com/bgando/f2f-final-day-2

////////////// ES6 Destructuring: (objects, so Arrays & Objects)///////////////

// The destructuring assignment syntax is a JavaScript expression that makes it
// possible to unpack values from arrays, or properties from objects, into
// distinct variables.
// You have the "target" to the left and the "source" to the right
// Examples:
// (variable declaration array & object)
// const [first, second] = [true, false]
// Names have to match in the case of a objects (with the property values)
// const {first, second} = {first: 0, second: 1}
// variable first has a value of true, and variable second of false, then 0 and
// 1 in the object example
// (assignment array & object)
// [first, second] = [true, false]
// {first, second} = {first: 0, second: 1}
// More examples from MDN:
const x = [1, 2, 3, 4, 5];
const [y, z] = x;
console.log(y); // 1
console.log(z); // 2

const [firstElement, secondElement] = list;
// is equivalent to:
// const firstElement = list[0];
// const secondElement = list[1];
///////////////////////////////////////////////////////////////////////////////

// Underscore.js
// It seems to be a popular JS library and there are a lot of underscore
// functions around using it's syntax, such as _.each()
// Syntax:
// _.each(list, function)
// Parameters: It accepts two parameters which are specified below:
// list: It is the list which contains some elements.
// function: It is the function which is executed by taking each element of
// the list.
// Return values: It returns each element of the list.

// There is a difference in use compared to .forEach() as for each is called
// on the list as a method, while ._each() is a function that you pass both
// arguments, the list and the callback function, for that the readability
// differs, in a sense ._each() is more functional programming while
// .forEach() is more object oriented programming.

// There is another JS library called Lodash that does something similar to
// the Underscore.js library(similar functions)

// _.map()

// The main difference betwen map and each is that each doest NOT return
// anything.
// .map RETURNS AN ARRAY, everytime.
// The result will also always be an array of the same length so if you
// want to filter something based on true/false then you need .filter
// and not .map


// _.filter()

// It takes an array and a callback function and returns an array that ONLY
// contains the value that return true from the callback

///////////////////////////////////////////////////////////////////////////////


// "arguments" Keyword:

// Used before the spread operator existed and it references all the arguments
// as a pseudo array. The important thing is that is not actually an array but
// an object, so we we don't have the handy array methods to use with it.
// Careful when using arrow functions with this as it might return things that
// are not expected.

// If you want to make an array-like object, like arguments, into an actual
// array you need to do the following code:
const arr = Array.prototype.slice.call(arguments);

// In ES6 we also have another and shorter way of doing the same as above:
const arr2 = Array.from(arguments);

// Default parameter value:

// You can give a default value to a parameter in JS, so if it's not passed it
// will take the default value.

const add = function(a, b = 2) {
  console.log(arguments); // logs [3]
  return a + b;
};

add(3);


// Array.from()

// As previously stated Array.from() can make an array of array like objects
// but is also applicable to iterables. You can even create arrays with it
// passing a string for example:

console.log(Array.from('foo'));
// expected output: Array ["f", "o", "o"]

// You can also pass a callback function so it is quite useful if you want
// to create and do something that new array right away.


// JS course 1:
// https://frontendmasters.com/courses/js-fundamentals-functional-v2/scope-walkthrough-part-3/
// https://slides.com/bgando/f2f-final-day-1
