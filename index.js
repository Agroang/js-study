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

// Higher order functions:
// 1) Takes a function as an input (argument)
// 2) Returns a function as the output

// Passing arguments with ES6 to higher order functions:

const ifElse = (condition, isTrue, isFalse, ...args) => {
  console.log(args) // ['HI', 'BYE', 'HOLA']
  return condition ? isTrue(...args) : isFalse(...args);
  // isTrue('HI', 'BYE', 'HOLA')
};
ifElse(true, fn1, fn2, 'HI', 'BYE', 'HOLA');

// ...args picks everything after the first 3 arguments passed in this case

// _.reduce :
// _.reduce(collection, [iteratee=_.identity], [accumulator])
// It is a critical function to functional programming, just like map, filter,
// and the others previously mentioned.

// reduce reduces collection to a value which is the accumulated result of
// running each element in collection thru iteratee, where each successive
// invocation is supplied the return value of the previous. If accumulator is
// not given, the first element of collection is used as the initial value. The
// iteratee is invoked with four arguments:
// (accumulator, value, index | key, collection).

// Currying:
// Creating a function that can later be called multiple times with different
// arguments. In lodash you have .curry().

_.curry(func, [arity = func.length])

var abc = function (a, b, c) {
  return [a, b, c];
};

var curried = _.curry(abc);

curried(1)(2)(3); // it saves each value and once it has 3 values it returns
// => [1, 2, 3]

curried(1, 2)(3); // same here, so it has 2 values and then gets another
// => [1, 2, 3]

// what .curry() does is that it allows you to call a function up to three
// times in this case, saving the values until it has the needed amount of
// arguments to return. It allows you to break arguments passed by the number
// of arguments.

// A little more abour currying in JS from the web:
// Currying simply means evaluating functions with multiple arguments and
// decomposing them into a sequence of functions with a single argument.

// In other terms, currying is when a function — instead of taking all arguments
// at one time — takes the first one and returns a new function, which takes the
// second one and returns a new function, which takes the third one, etc.until
// all arguments are completed.

// Composing:
// It's when you take two functions and convine them. You could write it by
// yourself but there is an underscore method _.compose():

// Returns the composition of a list of functions, where each function consumes
// the return value of the function that follows. In math terms, composing the
// functions f(), g(), and h() produces f(g(h())).

var greet = function (name) { return "hi: " + name; };
var exclaim = function (statement) { return statement.toUpperCase() + "!"; };
var welcome = _.compose(greet, exclaim);
welcome('moe'); //  'hi: MOE!'

// What is function composition?
// Function composition is a mechanism of combining multiple simple functions to
// build a more complicated one.The result of each function is passed to the
// next one. In mathematics, we often write something like: f(g(x)). So this is
// the result of g(x) that is passed to f.In programing we can achieved the
// composition by writing something similar.Let's take a quick example. Suppose
// I need to make some arithmetic by doing the following operation: 2 + 3 * 5.
// As you may know, the multiplication has the priority over the addition. So
// you start by calculating 3 * 5 and then when add 2 to the result. Let's write
// this in JavaScript.The primary and certainly the most simple approach could
// be:

const add = (a, b) => a + b;
const mult = (a, b) => a * b;
add(2, mult(3, 5))

// Scope can get quite tricky if we start referencing a function inside a
// function and changing values in the parent of that function as each
// reference will have it's own "version" of the function and of the parent
// that it was referencing, it is not the same (not in memory at least).

const myAlert = () => {
  const x = "Help! I think I found a clue!";
  let count = 0;
  const alerter = () => {
    alert(`${x} ${++count}`);
  };

  return alerter;
};

const funcAlert = myAlert();
const funcAlert2 = myAlert();
funcAlert(); // count will be 1
funcAlert(); // count will be 2
funcAlert2(); // count will be 1, even if it's referencing the same

// Another interesting example of how functions retain information from their
// parent scope:

const newClue = (name) => {
  const length = name.length;

  return (weapon) => {
    let clue = length + weapon.length;
    return !!(clue % 2); //playig to check if 0, if zero is false, then true?
    // 0 = false, !0 = true, !!0 = false, making the value a boolean
  };

};

const didGreenDoItWithA = newClue('Green')

didGreenDoItWithA('knife'); // will use the original name and the weapon

// Another very cool example trying to show the same thing, but this one
// returns an object with 2 functions instead of just 1 funtion, and then
// you call the functions with dot notation:

function countClues() {
  var n = 0;
  return {
    count: function () { return ++n; },
    reset: function () { return n = 0; }
  };
};

//ES6 equivalent

const countClues = () => {
  let n = 0;

  return {
    count: () => n++,
    reset: () => n = 0
  };
};

const counter = countClues
countClues.count() // this works, same for reset, and you can make other
// variables holding the return of countClues and will be different each
// one from the other.

// JS course 1:
// https://frontendmasters.com/courses/js-fundamentals-functional-v2/closure/
// https://slides.com/bgando/f2f-final-day-2
