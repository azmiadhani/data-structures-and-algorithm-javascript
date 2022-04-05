/**
 * @author @azmiadhani
 * @email azmiadhani@gmail.com
 * @create date 2022-04-06 06:36:09
 * @modify date 2022-04-06 06:36:09
 * @desc [description]
 */

const boxes = [0, 1, 2, 3, 4, 5];

// O(n) - Linear Time
const compressFirstBox = (boxes) => {
  console.log(boxes[0]);
};

const compressFirstTwoBoxes = (boxes) => {
  console.log(boxes[0]); // O(1)
  console.log(boxes[1]); // O(1)
};

compressFirstTwoBoxes(boxes); // O(2)
