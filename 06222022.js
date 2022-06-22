// Write a function that takes an array of integers and returns the sum of all the positive values. If the array has no positive values, return 0.

function positiveSum(arr) {
  return arr.filter(elem => elem > 0).reduce((a, b) => a + b, 0)
}

// An array of integers. May be positive or negative.
// Return the sum of all the positive values, or 0.
// Filter the array for all values greater than 0, then reduce it. Return the array or 0.