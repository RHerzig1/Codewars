// Write a function that calculates the mean squared difference between elements of two arrays.

function solution(arr1, arr2) {
  const diffSqr = arr1.map((elem, index) => (elem - arr2[index]) ** 2);
  const mean = diffSqr.reduce((a, b) => a + b) / arr1.length;
  return mean;
}

console.log(solution([1, 2, 3], [4, 5, 6]), 9);
console.log(solution([10, 20, 10, 2], [10, 25, 5, -2]), 16.5);
console.log(solution([0, -1], [-1, 0]), 1);

// Two arrays of equal length. Each element is a valid integer. May be positive, negative, or 0.
// Find the difference of each elemt among the two arrays.
// Square each difference and add the product.
// Divide by the array length and return the outcome.
