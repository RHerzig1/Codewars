// Write a function that returns the sum of an array of strings and numbers.

function findSum(arr) {
  arr = arr.map(Number);
  return arr.reduce((a, c) => a + c, 0);
}

console.log(findSum([0, 1, 2, 3, 4, 5]), 15);
console.log(findSum([0, "1", 2, "3", 4, "5"]), 15);
console.log(findSum(["0", "1", "2", "3", "4", "5"]), 15);

// An array containing only strings or numbers. All strings will be numbers, just as a string (e.g. '1'.) Length will always be > 0.
// Return the sum of all the strings and numbers.

// Convert the string elements into numbers.
// Reduce to find the sum.
// Return the sum.
