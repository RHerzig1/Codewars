// Write a function that returns the greatest distance of index positions of matching integers in an array.

function greatestDistance(arr) {
  const differences = [];
  for (const int of arr) {
    differences.push(arr.lastIndexOf(int) - arr.indexOf(int));
  }
  return Math.max(...differences);
}

console.log(greatestDistance([9, 7, 1, 2, 3, 7, 0, -1, -2]), 4);
console.log(greatestDistance([0, 7, 0, 2, 3, 7, 0, -1, -2]), 6);
console.log(greatestDistance([1, 2, 3, 4]), 0);

// An array of positive and negative integers in any order.
// Return the greatest difference of indexes between all matching integers in the array.

// Declare a differences variable equal to an empty array.
// Iterate through the parameter.
// For each element, calculate the distance between the first and last occurance.
// Push the number to differences.
// Return the largest element from differences.
