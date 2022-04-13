// stack implementation using linked list

// class to create new node
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// class to operate stack
class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  // get top
  peek() {
    return this.top;
  }
  // pop to new top
  push(value) {
    const newNode = new Node(value);
    // check if stack is empty
    if (this.length === 0) {
      // top become newNode
      this.top = newNode;
      // top become newNode
      this.bottom = newNode;
    } else {
      // if stack is not empty
      // holding pointer of current top
      const holdingPointer = this.top;
      // set current top to the new node
      this.top = newNode;
      // top next to the holding pointer
      this.top.next = holdingPointer;
    }
    // increment stack length
    this.length++;
    return this;
  }
  // pop the top
  pop() {
    // if stack is not empty, then pop the last item
    if (this.length > 0) {
      // we can hold current top just in case we wanna reuse it later with this:
      // const holdingCurrentTop = this.top;
      // return holdingCurrentTop
      // holding pointer for the next top
      const holdingPointer = this.top.next;
      // set current top as holdingPointer (next top)
      this.top = holdingPointer;
      // length -1
      this.length--;
    }
    // if stack is empty or if after pop the stack is empty
    if (this.length === 0) {
      // set top bottom to null
      this.top = null;
      this.bottom = null;
      // set length =0
      this.length = 0;
    }
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
