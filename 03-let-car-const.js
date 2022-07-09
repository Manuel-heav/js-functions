// in modern javascript, don't use var...
// 1. hoisted to the top of scope may introduce indefined variable bugs.
// 2.

// A variable without a value is undefined
function doTheThing() {
  if (true) {
    console.log("yeah");
  }
  var result = 43;
}

doTheThing();
