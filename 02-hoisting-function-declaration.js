// Variable hoisting, the console log wont because there is no variable hoisting
console.log(add(2, 2)); // Error! Add is not a function(undefined)
const add = function (a, b) {
  return a + b;
};

// Js will only hoist the variable not the assignment
