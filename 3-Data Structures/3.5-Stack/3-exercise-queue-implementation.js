// class to create new node
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// class to operate queue
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.first;
  }
  enqueue(value) {
    // validation
    let newNode = new Node(value);
    // if there's no queue
    if (this.length == 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      // if there's a queue
      // add new node the next last
      this.last.next = newNode;
      // add new node the last
      this.last = newNode;
    }
    // length + 1
    this.length++;
    return this;
  }
  dequeue() {
    if (this.length > 0) {
      // if there's queue
      // make this.first become next
      this.first = this.first.next;
      // length -1
      this.length--;
    }
    // if there's no queue
    if (this.length == 0) {
      this.last = null;
    }
    return this;
  }
  //isEmpty;
}

const myQueue = new Queue();

//Joy
//Matt
//Pavel
//Samir

myQueue.enqueue('Joy');
myQueue.enqueue('Matt');
myQueue.enqueue('Pavel');
console.log(myQueue.peek());
myQueue.dequeue();
console.log(myQueue.peek());
// console.log(myQueue);
