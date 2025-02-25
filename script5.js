// Exercise 5

// Is it possible to change an object declared with const, how do you think and why?

const user = {
  name: "John",
};

// does it work?
user.name = "Pete";

console.log(user.name); //Pete
// When you use const to declare an object, it means that you cannot reassign the object
// itself, but you can modify its properties.
