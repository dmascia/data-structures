//1. Write a function that loops through the numbers n down to 0. If you haven't done so try using a while loop to do this.

const countDown = n => {
  while(n > 0) {
    console.log(`from countDown: ${n}`);
    n--;
  }
};

countDown(10);

//2. Next, try looping just like above except using recursion

const countDownRecursion = n => {
  if (n === 0) {
    return;
  }

  console.log(`from countDownRecursion: ${n}`);

  return countDownRecursion(n-1);
};

countDownRecursion(10);

//3.Write a function 'exponent' that takes two arguments base, and expo, uses a while loop to return the exponenet value of the base.

const exponent = (base, expo) => {
  let value = base;

  while(expo > 1) {
    value *= base;
    expo--;
  }

  return value;
};

console.log(exponent(8, 2) + " exponent should be equal to 64");

//4. Write a function 'RecursiveExponent' that takes two arguments base, and expo, recursively returns exponent value of the base.

const recursiveExponent = (base, expo) => {
  if (expo === 1) {
    return base;
  }

  return base * recursiveExponent(8, expo-1);
};

console.log(recursiveExponent(8, 2) + " recursiveExponent should be equal to 64");

//5. Write a function 'recursiveReverse' that takes an array and uses recursion to return its contents in reverse

const recursiveReverse = arr => {

  let reversedArray = [];

  let addItem = orderedArr => {
    if (orderedArr.length > 0) {
      reversedArray.push(orderedArr.pop());
      addItem(orderedArr);
    }

    return;
  };

  addItem(arr);

  return reversedArray;
};

console.log(recursiveReverse([1,2,3,4,5]) + " should equal [ 5, 4, 3, 2, 1 ] ");
