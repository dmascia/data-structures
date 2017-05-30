/*
Implement a function that flattens a nested array.
flatten([1,[2],[3, [[4]]]]);
=> [1,2,3,4]
*/

"use strict";

const flatten = arr => {
  let finalArr = [];

  arr.forEach( e => {
    if (Array.isArray(e)) {
      finalArr.push(flatten(e));
    } else {
      finalArr.push(e);
    }
  });
  
  return finalArr;
};

console.log(flatten([1,[2],[3, [[4]]]]) + " should be 1,2,3,4");
