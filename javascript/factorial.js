
/*
Implement factorial.
factorial(5) => 5*4*3*2*1 => 120
*/
"use strict";

const factorial = n => {
  if (n === 1) { return n; }

  return n * factorial(n - 1);
};

console.log(factorial(5) + " should be 120");
