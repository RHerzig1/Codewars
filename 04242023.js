// Write an algorithm that calculates the sum between integers A and B.

function getSum(a, b) {
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  return ((max - min + 1) * (max + min)) / 2;
}

console.log(getSum(0, 10), 55);
console.log(getSum(10, 0), 55);
console.log(getSum(10, 10), 10);
console.log(getSum(-10, 0), -55);
console.log(getSum(0, -10), -55);
console.log(getSum(-10, 10), 0);
console.log(getSum(-10, 20), 155);

// Two parameters, both integers. May be positive or negative, or 0. May be the same number. May be ascending or descending.
// Return the sum of integers between the two parameters.

// Declare min to the smaller number.
// Declare max to the larger number.
// Use the Gauss Summation to calculate the sum of integers between.
