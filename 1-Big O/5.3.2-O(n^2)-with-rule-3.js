const compressTwoBoxes = (boxes, boxes2) => {
  boxes.forEach((box) => {
    boxes2.forEach((box2) => {
      console.log(box, box2);
    });
  });
};

// when there's two different inputs (parameter in this case)
// and the loops is neseted
// O(a * b)
