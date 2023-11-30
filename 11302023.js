// Write a function that returns the sum of all the numbers of an array that appear only once.

function repeats(arr) {
  const counts = {};

  for (const elem of arr) {
    counts[elem] = counts[elem] + 1 || 1;
  }

  let sum = 0;

  for (const prop in counts) {
    if (counts[prop] === 1) {
      sum += Number(prop);
    }
  }

  return sum;
}

console.log(repeats([4, 5, 7, 5, 4, 8]), 15);
console.log(repeats([9, 10, 19, 13, 19, 13]), 19);
console.log(repeats([16, 0, 11, 4, 8, 16, 0, 11]), 12);
console.log(repeats([5, 17, 18, 11, 13, 18, 11, 13]), 22);
console.log(repeats([5, 10, 19, 13, 10, 13]), 24);
console.log(repeats([10, 13, 10, 13]), 0);

// An array of integers. All elements are valid numbers. Positive and whole numbers. Length > 1.
// Return the sum of all the elements that only appear once, or 0.

// Create a cache of all elements and their counts.
// Iterate through the cache and create a sum of all the have a value of 1.
// Return the sum.
