/*
Write a function that outputs the nth Fibonnaci number. A number in this sequence is found by adding up the two numbers before it.
Fibonnaci's sequence:
input    0 1 2 3 4 5 6  7  8  9 ...
output   0 1 1 2 3 5 8 13 21 34 ...
*/

"use strict";

const fibonnaci = n => {
  if (n === 0 || n === 1) { return n; }
  
  return fibonnaci(n - 1) + fibonnaci(n - 2);
}

console.log(fibonnaci(0) + " should be 0");
console.log(fibonnaci(1) + " should be 1");
console.log(fibonnaci(2) + " should be 1");
console.log(fibonnaci(3) + " should be 2");
console.log(fibonnaci(4) + " should be 3");
console.log(fibonnaci(5) + " should be 5");
console.log(fibonnaci(6) + " should be 8");
console.log(fibonnaci(7) + " should be 13");
console.log(fibonnaci(9) + " should be 21");
console.log(fibonnaci(9) + " should be 34");
