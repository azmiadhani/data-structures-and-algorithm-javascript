// stack implementation using array

// class to operate stack
class Stack {
  constructor() {
    this.array = [];
  }
  // get top / get the last item added
  // O(1)
  peek() {
    // return the last item
    return this.array[this.array.length - 1];
  }
  // push / add to the last
  // O(1)
  push(value) {
    // using builtin array function push to last
    this.array.push(value);
    return this;
  }
  // pop / remove the last
  pop() {
    // using builtin array function pop last item
    this.array.pop();
    return this;
  }
}
// initiate class
const myStack = new Stack();
// push
myStack.push('google');
myStack.push('udemy');
myStack.push('discord');
// pop
myStack.pop();
// output
console.log(myStack);
console.log(myStack.peek());
