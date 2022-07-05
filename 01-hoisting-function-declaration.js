// Variable hoisting, the console log wont because there is no variable hoisting
console.log(add(2, 2));
const add = function (a, b) {
  return a + b;
};
