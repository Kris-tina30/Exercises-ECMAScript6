// Exercise 1

let user = {
  name: "John",
  years: 30,
};
// Write the destructuring assignment that reads:

// name property into the variable name.
// years property into the variable age.
// isAdmin property into the variable isAdmin (false if absent)

// years: age	Перейменовує властивість years у змінну age

// isAdmin = false	Призначає значення за замовчуванням, якщо isAdmin немає в об'єкті

let { name, years: age, isAdmin = false } = user;

console.log(age);
console.log(isAdmin);
console.log(name);
