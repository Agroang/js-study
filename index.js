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
///////////////////////////////////////////////////////////////////////////////

// JS course 1:
// https://frontendmasters.com/courses/js-fundamentals-functional-v2/using-functions/
// https://slides.com/bgando/f2f-final-day-1
