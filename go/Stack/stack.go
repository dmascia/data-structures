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

package main

import (
	"fmt"
	"strings"
)

//Stack class
type Stack struct {
	storage string
}

//GetSize return size of the stack as an integer
func (s *Stack) GetSize() int {
	return len(strings.Split(s.storage, "*")) - 1
}

//Push add value to the front and return size of the stack
func (s *Stack) Push(v string) int {
	newStorage := v + "*" + s.storage
	s.storage = newStorage

	return s.GetSize()
}

//Pop removes value from the front and returns that value
func (s *Stack) Pop() string {
	indexOfFirst := strings.Index(s.storage, "*")
	slice := s.storage[:indexOfFirst]
	s.storage = s.storage[len(slice)+1 : len(s.storage)]

	return slice
}

func main() {
	Stack := Stack{}

	fmt.Println(Stack.GetSize())
	fmt.Println(Stack.Push("my"))
	fmt.Println(Stack.Push("name"))
	fmt.Println(Stack.Pop())
	fmt.Println(Stack.Push("is"))
	fmt.Println(Stack.Push("dave"))
	fmt.Println(Stack.Pop())
	fmt.Println(Stack.Pop())
	fmt.Println(Stack.Pop())
	fmt.Println(Stack.GetSize())
}
