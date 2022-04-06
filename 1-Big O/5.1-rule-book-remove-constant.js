const printFirstItemThenFirstHalfThenSayHi100Times = (items) => {
  // log the first item in the array
  console.log(items[0]);

  // log the first half of the array
  // finding middle index
  var middleIndex = Math.floor(items.length / 2);
  var index = 0;

  while (index < middleIndex) {
    console.log(items[index]);
    index++;
  }

  // log "hi" 100 times
  for (var i = 0; i < 100; i++) {
    console.log('hi');
  }
};

printFirstItemThenFirstHalfThenSayHi100Times(['a', 'b', 'c', 'd', 'e']);

// printFirstItemThenFirstHalfThenSayHi100Times function
// O(1 + n/2 + 100)
// we remove the constant and coefficient, and then it becomes :
// O(n)
