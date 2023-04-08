// Write a function that returns the first and last indexes of subarray

function findSubArrayWithSameElement(arr, char) {
  const startingIndexes = [];
  const endingIndexes = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === char && arr[i - 1] !== char) {
      startingIndexes.push(i);
    }
    if (arr[i] !== char && arr[i - 1] === char) {
      endingIndexes.push(i - 1);
    }
  }

  if (startingIndexes.length !== endingIndexes.length) {
    endingIndexes.push(arr.length - 1);
  }

  let subArrIndexes = [-1, -1];
  let subArrLength = 0;
  for (let i = 0; i < startingIndexes.length; i++) {
    const difference = endingIndexes[i] - startingIndexes[i];
    if (difference >= subArrLength) {
      subArrLength = difference;
      subArrIndexes = [startingIndexes[i], endingIndexes[i]];
    }
  }

  return subArrIndexes;
}

console.log(
  findSubArrayWithSameElement([2, 1, 1, 1, 1, 3, 3, 4, 5, 1, 1, 1], 3),
  [5, 6]
);
console.log(
  findSubArrayWithSameElement([2, 1, 1, 1, 1, 3, 3, 4, 5, 1, 1, 1, 1], 1),
  [9, 12]
);
console.log(findSubArrayWithSameElement([1], 1), [0, 0]);

// An array of integers and an integer.
// Return an array containing the first and last indexes of the largest subarray possible containing only the integer.

// Declare a startingIndexes variable equal to an empty array.
// Declare an endingIndexes variable equal to an empty array.
// Loop through the array and cache the indexes.
// Loop through the caches and calculate the largest difference.
// Return those indexes.
