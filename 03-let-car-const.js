// in modern javascript, don't use var...
// 1. hoisted to the top of scope may introduce undefined variable bugs.
// 2. var is unpredictable in certain circumstances
// Use

// A variable without a value is undefined
// when using var before intiialized the error will just be undefined...but with let and const the error will be cannot access "variable" before initialization.

// Hoisted mean whenever a variable is initialized js will take the the variable and assign it at the top

// like var result = 5;
// then js will take var result; and initialize it on the top under the hood

// var is hoisted, value undefined is logged
function doTheThing() {
  if (true) {
    console.log("yeah");
  }
  var result = 43;
}

// let is hoisted ...but we cant use it before initialization

function doTheThing() {
  if (true) {
    console.log("yeah");
  }
  var result = 43;
}

doTheThing();
