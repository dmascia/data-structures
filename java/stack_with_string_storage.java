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
public class stack_with_string_storage {
    private String storage = "";

    public int push(String val) {
        String newStr = val + "-" + this.storage;
        this.storage = newStr;

        return this.size();
    }

    public String pop() {
        String[] parts = this.storage.split("-");
        String value = parts[0];

        this.storage = this.storage.substring((value.length() + 1), this.storage.length());
   
        return value;
    }

    public int size() {
        String[] parts = this.storage.split("-");
        
        if (parts[0].isEmpty()) {
            return 0;
        } else {
            return this.storage.split("-").length;
        }
    }
    
    public static void main(String[] args) {
        
        stack_with_string_storage myStack = new stack_with_string_storage();
        
        System.out.println(myStack.size());
        System.out.println(myStack.push("my"));
        System.out.println(myStack.push("name"));
        System.out.println(myStack.pop());
        System.out.println(myStack.push("is"));
        System.out.println(myStack.push("dave"));
        System.out.println(myStack.pop());
        System.out.println(myStack.pop());
        System.out.println(myStack.pop());
        System.out.println(myStack.size());
    }
    
}
