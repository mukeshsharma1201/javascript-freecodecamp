let array = [1,2,3,4];
let [first, ...rest] = array;
console.log(rest);

/**
 * Use destructuring assignment to swap the values of a and b so that a receives the value stored in b, and b receives the value stored in a.
 */

 console.log("SWAP:");
let a = 8, b = 6;
(() => {
  "use strict";
  // change code below this line
  [b,a] = [a,b];
  // change code above this line
})();
console.log(a); // should be 6
console.log(b); // should be 8