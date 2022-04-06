const compressBoxesTwice = (boxes) => {
  boxes.forEach((box) => {
    console.log(box);
  });

  boxes.forEach((box) => {
    console.log(box);
  });
};

compressBoxesTwice(['box-1', 'box-2', 'box-3']);

// O(2n)
// remove the constant and coefficient, and then it becomes :
// O(n)
