// Write a function that sorts an array of numbers in ascending order.

function sortNumArr(nums) {
  return nums ? nums.sort((a, b) => a - b, 0) : [];
}

console.log(sortNumArr(null), []);
console.log(sortNumArr([]), []);
console.log(sortNumArr([1, 5, 3, 4, 2, 10, 20, 40, 50, 30]), [1, 2, 3, 4, 5, 10, 20, 30, 40, 50]);

// An array of positive integers. May be sorted in any order. May be an empty array or null.
// Sort the elements in ascending order.

// Use the ternary.
// If the array is populated, use a compare function to sort the elements in ascending order.
// Else, return empty square brackets.
