// Write a function that returns the sum of a number repeatedly halved.

function halvingSum(num) {
  const sum = [];

  while (num >= 1) {
    sum.push(num);
    num = Math.floor(num / 2);
  }

  return sum.reduce((a, c) => a + c, 0);
}

console.log(halvingSum(25), 47);
console.log(halvingSum(100), 197);
console.log(halvingSum(0), 0);

// A positive integer. Always a valid number.
// Return the sum of the the number halved until it's less than 1. Round down if necessary.

// Create a cache array.
// While the number is greater than 1, half and push into the array.
// Reduce the array and return the sum.