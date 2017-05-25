/*
STACK

Abstract data type

LIFO - Last in, first out

Collection of elements with push and pop operations.
Note that there is a natural order. Elements are removed in the reverse order of their addition.
DO NOT use an array and the native push/pop method in your implementation. That's too easy, yeah? =P
Use a STRING as the underlying data structure.

*** Operations:
myStack.push(value)
=> add value to the front and return size of the stack
myStack.pop()
=> removes value from the front and returns that value
myStack.size()
=> return size of the stack as an integer
*/

"use stack";

class Stack {

  constructor() {
    this.storage = "";
  }

  push(val) {
    const newStr = `${val}*${this.storage}`;
    this.storage = newStr;

    return this.size();
  }

  pop() {
    const indexOfFirst = this.storage.indexOf("*"),
          value = this.storage.slice(0, indexOfFirst);
    this.storage = this.storage.substring(value.length + 1, this.storage.length);

    return value;
  }

  size() {
    return (this.storage.split("*").length - 1);
  }
}

const myStack = new Stack();


console.log(myStack.size());
console.log(myStack.push("my"));
console.log(myStack.push("name"));
console.log(myStack.pop());
console.log(myStack.push("is"));
console.log(myStack.push("dave"));
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.size());
