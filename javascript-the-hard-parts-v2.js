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
// But at least for most purposes here they are ???syntactic sugar???
// Understanding how they???re working under - the - hood is vital to avoid
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

// JS is quite intelligent in that sense and if, for example, we have other
// variables in the same scope of the function that we return, and that
// function does not use some of those variables, those variables won't go
// into the backpack, only the things that are referenced go into the backpack.
// *Otherwise it would cause a memory leak, use of memory space that is never
// used/doesn't have access to.

// COVE = Closed Over Variable Environtment (Variable Environt is the local
// context). This is term to refer to the "backpack".

// JS is a static/lexically scoped language. That is to say that where I save
// my function determines for the rest of the life of that function,
// whenever it gets run under whatever new label it gets, what data it will
// have access to when that function runs.
// The opposite of this would be to access the data where I run it, that would
// be called dynamic scoping. It changes depending on where I run the function.

// Another fancy name for the "backpack" is:
// PLSRD : Presistent Lexically(or Static) Scoped Reference Data

// But the most used term, is "closure". You would hear "put the data in the
// functions closure".

// (A little bit more about Closure:)
// When a function is defined, it gets a bond to the surrounding Local Memory
// (???Variable Environment???) in which it has been defined.

function outer() {
  let counter = 0;
  function incrementCounter() { counter++; }
  return incrementCounter;
}
const myNewFunction = outer();
myNewFunction();
myNewFunction();

// The ???backpack???

// We return incrementCounter???s code(function definition) out of outer into
// global and give it a new name - myNewFunction
// We maintain the bond to outer???s live local memory - it gets ???returned out???
// attached on the back of incrementCounter???s function definition.
// So outer???s local memory is now stored attached to myNewFunction - even
// though outer???s execution context is long gone
// When we run myNewFunction in global, it will first look in its own local
// memory first(as we???d expect), but then in myNewFunction???s ???backpack???

// What can we call this ???backpack????
// Closed over ???Variable Environment??? (C.O.V.E.)
// Persistent Lexical Scope Referenced Data(P.L.S.R.D.)
// ???Backpack???
// ???Closure???

// The ???backpack??? (or ???closure???) of live data is attached incrementCounter(then
// to myNewFunction) through a hidden property known as [[scope]] which persists
// when the inner function is returned out

// Individual backpacks

// If we run 'outer' again and store the returned 'incrementCounter' function
// definition in 'anotherFunction', this new incrementCounter function was
// created in a new execution context and therefore has a brand new independent
// backpack

// Closure gives our functions persistent memories and entirely new toolkit for
// writing professional code

// Helper functions: Everyday professional helper functions like ???once??? and
// ???memoize???

// *Memoization is an optimization technique that speeds up applications by
// storing the results of expensive function calls and returning the cached
// result when the same inputs are supplied again.*
// Usually used as something like:
memo = memo || {} // if it has value, keep it, otherwise it's an empty object

// Iterators and generators: Which use lexical scoping and closure to achieve
// the most contemporary patterns for handling data in JavaScript

// Module pattern: Preserve state for the life of an application without polluting
// the global namespace

// Asynchronous JavaScript: Callbacks and Promises rely on closure to persist state
// in an asynchronous environment

// Asynchronous JS:

// JS is a synchronous language, it follows the thread of execution line by line,
// if it has to invoke a function it will put it on the call stack and the thread
// will go inside that function until that function evaluates into something.
// This is the nature of JS.

// Because of how JS works, alone it cannot make asynchronous tasks, yet it can,
// with the help of others like the browser. The browser does a lot of things
// and has a lot of tools that help JS be a better version of itself. Because
// of this we have a lot of JS labels that use the features of the web browser.
// For example the timer feature of the web browser is used as SetTimeOut() in JS,
// or the network requests that the web browser can use are fetch() in JS. These
// are things that do nothing to JS but that we can use because if that intertwined
// relationship between JS and the web browser.

// When you pass a JS function to the web browser and you set it with a timer,
// it will  wait in a callback queue until ALL regular JS is run, even if timing
// speaking, should run before, that is a run of JS, that is why we need more to
// be able to do asynchronous JS.
// So regular JS comes before, all synchronous code, all regular execution comes
// before the ones that the web browser had set up in qeue

// The feature that checks the current call stack and that puts functions from
// the queue into the call stack WHEN regular JS has finished running is called:
// "Event Loop"

// The above was pretty much how you would handle asynchronous JS it of course
// it lead to a bunch of problems, such as the call back function be the only
// execution context to know about some data, but at the same time it was
// quite clear the order of things to happen: synchronous js, then queued
// call backs.

// Recap of the above:
// JavaScript is not enough - We need new pieces (some of which aren???t
// JavaScript at all)

// Our core JavaScript engine has 3 main parts:
// - Thread of execution
// - Memory / variable environment
// - Call stack

// We need to add some new components:
// - Web Browser APIs / Node background APIs
// - Promises
// - Event loop, Callback / Task queue and micro task queue

// ES5 Web Browser APIs with callback functions
// Problems:
//  - Our response data is only available in the callback function - Callback
//    hell
//  - Maybe it feels a little odd to think of passing a function into another
// function only for it to run much later
// Benefits:
//   - Super explicit once you understand how it works under - the - hood

// ES6+ Solution (Promises):
// Using two-pronged ???facade??? functions that both:
// - Initiate background web browser work and
// - Return a placeholder object(promise) immediately in JavaScript

function display(data) {
  console.log(data)
}
const futureData = fetch('https://twitter.com/will/tweets/1')
futureData.then(display);

console.log("Me first!");

// What are "promises"?

// Special objects built into JavaScript that get returned immediately when we
// make a call to a web browser API / feature(e.g.fetch) that???s set up to return
// promises (not all are).
// Promises act as a placeholder for the data we expect to get back from the web
// browser feature???s background work.

// "then" method and functionality to call on completion:

// Any code we want to run on the returned data must also be saved on the
// promise object.
// Added using .then method to the hidden property ???onFulfilment???
// Promise objects will automatically trigger the attached function to run (with
// its input being the returned data.

// Promises:

// Problems
// - 99 % of developers have no idea how they???re working under the hood
// - Debugging becomes super- hard as a result
// - Developers fail technical interviews
// Benefits
// - Cleaner readable style with pseudo - synchronous style code
// - Nice error handling process

// We have rules for the execution of our asynchronously delayed code:

// Hold promise-deferred functions in a microtask queue and callback function in
// a task queue(Callback queue) when the Web Browser Feature(API) finishes

// Add the function to the Call stack(i.e.run the function) when:
// - Call stack is empty & all global code run(Have the Event Loop check this
// condition)

// Prioritize functions in the microtask queue over the Callback queue.
// *This is important, regular "facade" functions like setTimeOut will go into
// the regular callback queue whereas the functions that result from a promise
// will go into the microtask queue, and those are given priority so they will
// run BEFORE the ones on the regular callback queue. So the priority order
// is: call stack > microtask queue > callback queue

// (asynchronous means doing code out of order, it runs the code get the promise
// is fullfilled and has the data back from theat API call)

// Promises, Web APIs, the Callback & Microtask Queuesand Event loop enable:

// Non-blocking applications: This means we don???t have to wait in the single
// thread and don???t block further code from running.
// However long it takes: We cannot predict when our Browser feature???s work will
// finish so we let JS handle automatically running the function on its
// completion.
// Web applications: Asynchronous JavaScript is the backbone of the modern web -
// letting us build fast ???non-blocking??? applications.

// There are two ways to handle errors (that are bound to happen as we are
// dealing with the network), and it's another of the amazing feature of the
// promise object. Just like we have that array onFullfill, we also have another
// hidden array called onRejection, and just like onFullfill you pass functions
// that will be run if there is an error. The way to pass functions to that is
// using the .catch method and pass the functions that you want to run as
// argument.

const futureData = fetch('https://twitter.com/will/tweets/1')
futureData.then(display)
futureData.catch(errorHandling) // you need to define that function
// or you can also pass the error handler as a second argument for .then()
futureData.then(display, errorHandling)

// Classes & Prototypes, Object Oriented JavaScript:

// The Object-oriented paradigm aims is to let us achieve these three goals:
// 1) Easy to reason about
// 2) Easy to add features (new functionality)
// 3) Nevertheless efficient and performant

Object.create(null); // always returns an empty object, it might have some
// extra properties if you pass something to it, but it will always be an
// empty object on creation

// If we don't want to repeat our code, there are a few solutions, some better
// than others of course, one option is:

// Generate objects using a function:

function userCreator(name, score) {
  const newUser = {};
  newUser.name = name;
  newUser.score = score;
  newUser.increment = function () {
    newUser.score++;
  };
  return newUser;
};

const user1 = userCreator("Will", 3);
const user2 = userCreator("Tim", 5);
user1.increment() // Both will have .increment() method

// Problems with the above way: Each time we create a new user we make space in
// our computer's memory for all our data and functions. But our functions are
// just copies.

// Benefits: It's simple and easy to reason about!

// Another option, would be using the prototype chain:

// Store the increment function in just one object and have the interpreter, if
// it doesn't find the function on user1, look up to that object to check if
// it's there.

// Link user1 and functionStore so the interpreter, on not finding .increment,
// makes sure to check up in functionStore where it would find it.

// Make the link with Object.create() technique.

function userCreator(name, score) {
  const newUser = Object.create(userFunctionStore);
  newUser.name = name;
  newUser.score = score;
  return newUser;
};

const userFunctionStore = {
  increment: function () { this.score++; },
  login: function () { console.log("Logged in"); }
};

const user1 = userCreator("Will", 3);
const user2 = userCreator("Tim", 5);
user1.increment();

// https://frontendmasters.com/courses/javascript-hard-parts-v2/prototype-chain-example-prototypal-link/
// https://static.frontendmasters.com/resources/2019-09-18-javascript-hard-parts-v2/javascript-hard-parts-v2.pdf

// page 78
