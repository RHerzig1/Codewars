// Write a function that moves all zeros to the end of an array, in place.

function moveZeros(arr) {
  let [left, right]  = [0, 0];

  while (right < arr.length) {
    if (arr[right] !== 0) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++
    }
    right++
  }

  return arr;
}

console.log(moveZeros([0, 1, 2, 3]), [1, 2, 3, 0]);
console.log(moveZeros([0, 1, 0, 2, 0, 3, 0]), [1, 2, 3, 0, 0, 0, 0]);
console.log(moveZeros([0]), [0]);
console.log(moveZeros([]), []);

// An array that containing integers >= 0. Elements may be in any order. Always valid numbers. Length >= 0.
// Return the array with the zeros moved to the end.

// Must be performed in place. The length of the array cannot be changed.
// Use the two pointer technique.