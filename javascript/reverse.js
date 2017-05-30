/*
Implement a function that will reverse a string recursively.
reverse('abcdefg')
=> 'gfedcba'
*/

"use strict";

const reverse = str => {
  let length = str.length;

  if (length === 0) { return ''; }

  return str[length-1] + reverse(str.substr(0, length -1));
};

console.log(reverse('abcdefg') + " should be gfedcba");
