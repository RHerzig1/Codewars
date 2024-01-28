// Write an algorithm that returns the element that occurs in over 50% of the array in constant O(1) space.

function overHalf(arr: number[]): number {
  let count: number = 0;
  let candidate: number = arr[0];

  for (const elem of arr) {
    count = elem === candidate ? count++ : count--;
    if (count <= 0) {
      candidate = elem
    }
  }

  return candidate;
}

console.log(overHalf([1, 2, 3, 1, 1, 1]), 1);
console.log(overHalf([1, 2, 1, 3, 1, 2, 1, 1]), 1);

// arr: number[]. 2 <= arr.length <= 20. 0 <= number <= 100. Always valid integers. Always valid array with a value over half.
// Return the value that makes up over half the array. Use constant space.

// Iterate the array.
// Use a counter to track the number of appearances of the current element (candidate).
// Increase each time it appears, decrease each time it doesn't.
// If the counter reaches 0, replace candidate with the current element.
// Return the candidate.
