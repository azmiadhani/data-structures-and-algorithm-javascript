const logAllPairsOfBoxes = (boxes) => {
  boxes.forEach((firstBox) => {
    boxes.forEach((secondBox) => {
      console.log(firstBox, secondBox);
    });
  });
};

// O(n * n) => O(n^2) - Quadratic Time
