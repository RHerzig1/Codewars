// Write a function that returns the smallest sum when adding products of pairs of elements.

function minSum(arr) {
  const products = [];

  arr = arr.sort((a, b) => a - b);

  while (arr.length > 0) {
    products.push(arr.pop() * arr.shift());
  }

  return products.reduce((a, c) => a + c, 0);
}

console.log(minSum([5, 4, 2, 3]), 22);
console.log(minSum([12, 6, 10, 26, 3, 24]), 342);
console.log(minSum([9, 2, 8, 7, 5, 4, 0, 6]), 74);

// An array of integers. Always valid, positive numbers. Length >= 2 and even.
// Return the smallest sum possible when multiplying pairs of numbers.

// Declare a results array.
// Sort the parameter array.
// Multiply the first and last elements, add the product to the result, and remove them from the parameter.
// Return the sum.
