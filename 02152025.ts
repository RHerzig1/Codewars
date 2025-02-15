// Determine the height at which two crysal balls will break when dropped.

function findHeight(arr: number[]): number {
  const jumpDistance = Math.floor(Math.sqrt(arr.length));
  let index = 0;

  while (arr[index] === 0 && index < arr.length) {
    index += jumpDistance;
  }

  index -= jumpDistance; // Reset jump to before the first crystal ball broke

  if (index < 0) {
    index = 0;
  }

  while (arr[index] === 0) {
    index++;
  }

  return index;
}

console.log(findHeight([0, 0, 0, 1, 1, 1]), 3); 
console.log(findHeight([0, 1, 1, 1, 1, 1]), 1);
console.log(findHeight([1, 1, 1, 1, 1, 1]), 0);
console.log(findHeight([0, 0, 0, 0, 0, 1]), 5);

// Given two crystal balls that will break when dropped from a certain distance, determine the exact height in which they will break.
// arr: string[]. 2 <= arr.length <= 100. arr[i] will be 0 or 1.
// Return the first index where the element is 1. Do not use an O(n) algorithm.

/* Notes */
// Iterating the dataset is O(n). Not as efficient.
// Normal binary search won't work because only two crystal balls exist. It would still be O(n).
// Instead, jump through the array until the first crystal ball breaks to narrow the dataset.
// Jumping by a constant (e.g. 2, 3, 4 elements at a time) is still O(n), after the first one breaks, because O(1/4 * n) is still technically O(n).
// However, jumping by the square root of the total length reduces time complexity to O(sqrt(n)).
