/*
STACK

Abstract data type

LIFO - Last in, first out
Collection of elements with push and pop operations.

Note that there is a natural order. Elements are removed in the reverse order of their addition.
DO NOT use an array and the native push/pop method in your implementation. That's too easy, yeah? =P
Use an object as the underlying data structure.

*** Operations:
myStack.push(value)
=> count of stack
add value to collection
myStack.pop()
=> most recent element added collection
Remove item so that it is no longer in collection
myStack.peek()
=> most recent element added collection
Similiar to pop, but do not remove element from collection
myStack.count()
=> number of elements in stack
*** Additional Exercises:
Modify your stack to take a max capacity and return a string if you try to add an element when there's no more room:
myStack.push(value)
=> "Max capacity already reached. Remove element before adding a new one."
Create a contains method to check if a value is in the stack:
myStack.contains('findme')
=> true/false
What's the time complexity?
Create an until method to get the number of pops until you get to a certain value:
stack values - (first)2-5-7-3-6-9(last)
myStack.until(7)
=> 4
*/

"use stack";

class Stack {

  constructor(capacity) {
    this.capacity = capacity | Infinity;
    this.storage = {};
    this.size = 0;
  }

  push(val) {
    if (this.size < this.capacity) {
      this.storage[this.size++] = val;

      return this.size;
    }

    return "Max capacity reached";
  }

  pop() {
    const value = this.storage[--this.size];
    delete this.storage[this.size];

    if (this.size < 0) {
      this.size = 0;
    }
    
    return value;
  }

  peek() {
    return this.storage[this.size - 1];
  }

  count() {
    return this.size;
  }
}

var myStack = new Stack(3);
console.log(myStack.push('a'), 'should be 1');
console.log(myStack.push('b'), 'should be 2');
console.log(myStack.push('c'), 'should be 3');
console.log(myStack.push('d'), 'should be Max capacity reached');
console.log(myStack.pop(), 'should be c');
console.log(myStack.count(), 'should be 2');
console.log(myStack.peek(), 'should be b');
console.log(myStack.count(), 'should be 2');
