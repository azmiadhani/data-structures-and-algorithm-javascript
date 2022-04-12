// we can create new node class for it's own specific purpose (optional)
class Node {
  constructor(value, next, prev) {
    // assign
    this.value = value === undefined ? null : value;
    this.next = next === undefined ? null : next;
    this.prev = prev === undefined ? null : prev;
  }
}

// LinkedList class
class DoublyLinkedList {
  // @param - value - first value of linked list
  constructor(value) {
    this.head = {
      // first value
      value: value,
      // next still null because this is a very first linked list node
      next: null,
      // next prev null because this is a very first linked list node
      prev: null,
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
    // const newNode = new Node(value, next, prev);
    // we need to add currentTail as prev in newNode
    const newNode = new Node(value, null, this.tail);
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
    // current head as next, because we prepend
    const newNode = new Node(value, this.head, null);
    // add newNode as previous of currentHead cause later it'll be shifted
    this.head.prev = newNode;
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
    // initiate a newNode for this index with the value,
    // and next is the current node (shifting current node to next)
    // and previous is the previous node before the current whic is leaderNode
    const newNode = new Node(value, currentNode, leaderNode);
    // add currentNode prev value which is newNode
    currentNode.prev = newNode;
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
    console.log(this.printList());
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
}

// create this linked list :
// 10-->5-->16
// initiate linked  list
const myLinkedList = new DoublyLinkedList(10);
// now append linked ist :
myLinkedList.append(5);
myLinkedList.append(16);
// console.log(JSON.stringify(myLinkedList.head));

// now prepend linked ist :
// 1-->10-->5-->16
myLinkedList.prepend(1);

// now insert linked ist :
// 1-->10-->99-->5-->16-->66
myLinkedList.insert(2, 99);
myLinkedList.insert(20, 66);

// TODO : OPTIMIZE TRAVERSE and DELETE
// // now delete linked ist :
// // 1-->10-->99-->5-->16-->66  before
// // 1-->10-->99-->5-->66       after
// // remove the 4th index
// // console.log(myLinkedList.traverseToIndex(5));
// myLinkedList.remove(1);
// myLinkedList.remove(1);

console.log(myLinkedList.printList());
