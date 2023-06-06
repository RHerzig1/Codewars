// Write a function that plays a game by jumping through elements of an array.

function canJump(arr) {
  let count = 1;

  for (let i = arr.length - 2; i >= 0; i--) {
    count++;
    if (arr[i] >= count) {
      count = 0;
    }
    if (i === 0) {
      return count <= arr[i];
    }
  }

  return false;
}

console.log(canJump([2, 0, 3, 5, 0, 0, 3, 0, 0, 3, 1, 0]), true);
console.log(canJump([6, 1, 1]), true);
console.log(canJump([6]), false);
console.log(canJump([1, 1, 3]), false);

// An array of integers >= 0. Length is >= 1.
// Return whether it's possible to traverse the array from left to right moving, at the most, the number indicated by the integer you land on. You cannot move on the last element.

// Delcare a count variable.
// Iterate through the array backwards.
// For each iteration, increase the count.
// If the element is more than the count, reset count to 0.
// When iteration reaches the first index, return whether the element is bigger or equal to count.