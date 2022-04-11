// input is 2 sorted arrays
// [0, 3, 4, 31]
// [4, 6, 30]
// output is mreged sorted arrays

// input sample
const input1 = [0, 3, 4, 31];
const input2 = [4, 6, 30];

/* Naive / brute force approach */
function mergeSortedArrays(array1, array2) {
  const mergedArray = [];
  // array1 value container for later chec
  let array1Item = array1[0];
  // array2 value container for later check
  let array2Item = array2[0];
  // increment for array1
  let i = 1;
  // increment for array2
  let j = 1;

  // checking input
  if (array1.length === 0) {
    return array2;
  }
  if (array2.length === 0) {
    return array1;
  }

  // while both array item is still available to compare
  // if both undefined then stop
  while (array1Item !== undefined || array2Item !== undefined) {
    console.log(array1Item, array2Item);
    // check if array1Item is smaller than array2Item
    if (array1Item < array2Item) {
      mergedArray.push(array1Item);
      // move to next array1Item to check
      array1Item = array1[i];
      i++;
    } else if (array2Item < array1Item) {
      // check if array2Item is smaller than array1Item
      mergedArray.push(array2Item);
      // move to next array2Item to check
      array2Item = array2[j];
      j++;
    } else {
      // else (if any condition in if and else if don't apply)
      // for example when one of them is undefined then both of condition above will be false
      // or when the number is the same then push one of them to the mergedArray

      // if array1Item !== undefined
      if (array1Item !== undefined) {
        mergedArray.push(array1Item);
        // move to next array1Item to check
        array1Item = array1[i];
        i++;
      } else if (array2Item !== undefined) {
        // if arr2tem !== undefined
        mergedArray.push(array2Item);
        // move to next array2Item to check
        array2Item = array2[j];
        j++;
      }
    }
  }

  return mergedArray;
}

console.log(mergeSortedArrays(input1, input2));
