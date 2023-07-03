// Write a function that adds the minimum values from an array of arrays.

function sumOfMinimums(arr) {
  let min = null;

  for (const nums of arr) {
    min += Math.min(...nums);
  }

  return min;
}

console.log(sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]), 9)
console.log(sumOfMinimums([[11, 12, 14, 54], [67, 89, 90, 56], [7, 9, 4, 3], [9, 8, 6, 7]]), 76)

// An array of arrays. Each array contains at least one positive integer.
// Return the sum of the smallest values from each array.

// Declare a result value for caching.
// Iterate throught the arrays.
// Use Math.min to pull the smallest value from each nested array and add it to the result.
// Return result.