class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    // if trees if empty and there's no root node
    if (this.root === null) {
      this.root = newNode;
    } else {
      // if our trees is filled
      let currentNode = this.root;
      // traverse through the node with while because we wont know how long that we gonna traverse
      while (true) {
        // is the value is less than currentNode value
        if (value < currentNode.value) {
          // left
          // if currentNode.left not exist
          if (!currentNode.left) {
            // assign currentNode.left to newNode
            currentNode.left = newNode;
            return this;
          }
          // move our current poisiton (currentNode) to right node
          currentNode = currentNode.left;
        } else {
          // Right
          // if currentNode.right not exist
          if (!currentNode.right) {
            // assign currentNode.right to newNode
            currentNode.right = newNode;
            return this;
          }
          // move our current poisiton (currentNode) to right node
          currentNode = currentNode.right;
        }
      }
    }
  }
  lookup(value) {
    //Code here
    // if trees if empty and there's no root node
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    // loop goingto stop when the current node null
    // currentNode is null that doesnt mean we dont ind anything and while loop is stopped
    while (currentNode) {
      if (value < currentNode.value) {
        // if current value smaller than what we looking for
        // go left
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        // if current value bigger than what we looking for
        // go right
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        // if current value equal to what we looking for
        return currentNode;
      }
    }
    // if we cant find anything
    return false;
  }
  // remove
}

const tree = new BinarySearchTree();

// insert
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);

// lookup
console.log(tree.lookup(4));

// console.log(JSON.stringify(traverse(tree.root)));

//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
