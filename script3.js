// Exercise 3

// Look at the code. What will be the result of the call at the last line and why?

"use strict";

let phrase = "Hello";

if (true) {
  let user = "John";
  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}

sayHi();

//result: sayHi is not defined
//The sayHi() function was created inside an if block → it is not available outside it.
//In ES6, functions inside blocks (if, for, {}) have block scope.
