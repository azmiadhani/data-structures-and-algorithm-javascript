// log all pairs of array
// array boxes contains boxes numbers
const boxes = ['a', 'b', 'c', 'd', 'e'];

// task : log all pairs of array
const logAllPairs = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[i], array[j]);
    }
  }
};

logAllPairs(boxes);

// this something that you'll see a lot in the interviews
// rule of thumb :
// when you see loops one after another, then for notation you'll use addition (+)
// when you see nested loops, then for notation you'll use multipication (*), like so :
// O(n * n) => O(n^2) - Quadratic Time
