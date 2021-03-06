// we can create new node class for it's own specific purpose (optional)
class Node {
  constructor(value, next) {
    // param check
    if (value === undefined) {
      value = null;
    }
    if (next === undefined) {
      next = null;
    }
    // assign
    this.value = value;
    this.next = next;
  }
}

// LinkedList class
class LinkedList {
  // @param - value - first value of linked list
  constructor(value) {
    this.head = {
      // first value
      value: value,
      // next still null because this is a very first linked list node
      next: null,
    };
    // because this is initialization and we only have one item or node, then the head is also the tail
    this.tail = this.head;
    // track the length of linked list
    this.length = 1;
  }
  // add node to the end of linked list
  // append
  // O(1)
  append(value) {
    // create new node using Node Class
    // const newNode = new Node(value);
    const newNode = new Node(value);
    // point tail.next to newNode
    this.tail.next = newNode;
    // after updating tail.next, we have new tail with next:null, then point it to newNode as the new tail
    this.tail = newNode;
    this.length++;
    return this.printList();
  }
  // add node to the beginning of linked list
  // prepend
  // O(1)
  prepend(value) {
    // create new node
    const newNode = new Node(value);
    // make this.head as the newNode.next, since we wanna prepend this newNode
    newNode.next = this.head;
    // now change the head as the new node
    this.head = newNode;
    this.length++;
    return this.printList();
  }
  // print out linkedlist to array
  // lookup
  // O(n)
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
  // insert value to an certain index
  // because we use traverseToIndex() then O(n)
  insert(index, value) {
    // check params
    if (index >= this.length) {
      return this.append(value);
    }
    if (index <= 0) {
      return this.prepend(value);
    }
    // leaderNode is the node that point to current index
    let leaderNode = this.traverseToIndex(index - 1);
    // save current node to insert to the newNode.next
    let currentNode = leaderNode.next;
    // initiate a newNode for this index with the value, and next is the current node (shifting current node to next)
    const newNode = new Node(value, currentNode);
    // insert newNode to leaderNode.next
    leaderNode.next = newNode;
    this.length++;
    return this.printList();
  }
  // traversing to index
  // lookup
  // O(n)
  traverseToIndex(index) {
    // check params
    let counter = 0;
    let currentNode = this.head;
    // loop till counter reach index
    while (counter !== index) {
      // traversing
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  // remove a node
  // delete
  // O(n)
  remove(index) {
    // check params
    if (index >= this.length - 1) {
      // if index higher is higher or equal to total length -1 then delete tail node
      let leaderNode = this.traverseToIndex(this.length - 2);
      leaderNode.next = null;
    } else if (index <= 0) {
      // if index higher is lower or equal to zero then delete head node
      let currentNode = this.traverseToIndex(0);
      currentNode.value = currentNode.next.value;
      currentNode.next = currentNode.next.next;
    } else {
      // currentNode is the node that point to current index
      let currentNode = this.traverseToIndex(index);
      // save next node to newNode
      const nextNode = currentNode.next;
      // insert newNode to leaderNode.next
      currentNode.value = nextNode.value;
      currentNode.next = nextNode.next;
    }
    this.length--;
    return this.printList();
  }
  // reverse a linked list
  // O(n^2) can be optimized to O(n) by checking this out : https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/learn/lecture/12324578#questions
  reverse() {
    // validation
    // if there's only one linked list, then do nothing
    if (this.head.next == null) {
      return this.printList();
    }

    // this.length as counter
    let counter = this.length;
    // looph through currentHead
    while (counter !== 0) {
      // insert into position
      this.insert(counter, this.head.value);
      // remove the head
      this.remove(0);
      counter--;
    }
    return this.printList();
  }
  // reverse though process
  // reverse a linked list
  reverseThoughProcess() {
    // loop through linked list while counter !== 0
    // copy this.head to currentHead (Object assign)
    // insert(counter-1, currentHead.value)
    // delete this.head
    // counter increment
    // counter 3
    // value   1
    // [1, 5, 16, 66]
    // [1, 5, 16, 66, 1]
    // [5, 16, 66, 1]
    // counter 2
    // value   5
    // [1, 5, 16, 66]
    // [5, 16, 66, 5, 1]
    // [16, 66, 5, 1]
    // counter 1
    // value   16
    // [16, 66, 5, 1]
    // [16, 66, 5, 1, 16]
    // [66, 5, 1, 16]
    // counter
  }
}

// create this linked list :
// 10-->5-->16
// initiate linked  list
const myLinkedList = new LinkedList(10);

// now append linked ist :
myLinkedList.append(5);
myLinkedList.append(16);

// now prepend linked ist :
// 1-->10-->5-->16
myLinkedList.prepend(1);

// now insert linked ist :
// 1-->10-->99-->5-->16-->66
myLinkedList.insert(2, 99);
myLinkedList.insert(20, 66);

// now delete linked ist :
// 1-->10-->99-->5-->16-->66  before
// 1-->10-->99-->5-->66       after
// remove the 4th index
// console.log(myLinkedList.traverseToIndex(5));
myLinkedList.remove(1);
myLinkedList.remove(1);

// console.log(myLinkedList.printList());
console.log(myLinkedList.printList(), 'After remove');

myLinkedList.reverse();
console.log(myLinkedList.printList(), 'After Reverse');
