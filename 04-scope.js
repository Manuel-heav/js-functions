// when and where our variables are accessible - Scope
//  Levels of scope
// 1. Global scope -
// window object in the browser
// global
// If it is global...accessible anywhere
// 2. File scope / module scope
// accessibel anywhere in the current module or file
// 3. Function scope
function sayHello() {
  const name = "your mama";
  console.log(name);
}

// This wouldnt work because of function scope
console.log(name);
