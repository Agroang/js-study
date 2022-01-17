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

// JS course 1:
// https://frontendmasters.com/courses/js-fundamentals-functional-v2/using-functions/
// https://slides.com/bgando/f2f-final-day-1
