const booooo = (n) => {
  for (let i = 0; i < n.length; i++) {
    console.log('booooo!');
  }
};

booooo([1, 2, 3, 4, 5]);

// we know that the time complexity of this function is O(n)

// space complexity of booooo function is O(1)
// because we are not using any extra space
// we are not using any extra variables
// we only use variable "let i = 0"

const arrayOfHiNTimes = (n) => {
  let hiArray = []; // Data Structures, we created new arrays
  // variable "i" here is ignored according to big o rule 4
  for (let i = 0; i < n; i++) {
    hiArray[i] = 'hi'; // adding memory, so each item is additional memory space
  }
  return hiArray;
};

console.log(arrayOfHiNTimes(6)); // this becomes O(n)
// because we create new data structures
// and because we add memory to the array each time
