// build your own array
class MyArray {
  constructor() {
    // length of array
    this.length = 0;
    // data of array using objects
    this.data = {};
  }
  // lookup
  // O(1)
  get(index) {
    return this.data;
  }
  // add
  // O(1)
  push(item) {
    console.log(item);
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
  // pop last item of the array
  // O(1)
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  // delete index of an array
  // O(n) because of shiftItems()
  delete(index) {
    // deleting selected index
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }
  // shiftItems, replace selected index into the next one and so on
  // O(n)
  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      // replace selected index value to the next one and so on
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const newArray = new MyArray();

newArray.push('hi');
newArray.push('you');
newArray.push('!');
console.log(newArray.delete(0));
newArray.push('are');
newArray.push('nice');
newArray.push('jk');
newArray.pop();
console.log(newArray.delete(1));
console.log(newArray.get(0));
