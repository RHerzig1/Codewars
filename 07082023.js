// Write a recursive function that calculates the sum of num * n, where n equals num but decrements every iteration.

function findSum(num, n = num) {
  if (n <= 1) {
    return num;
  }

  return num * n + findSum(num, n - 1);
}

console.log(findSum(5), 75);
console.log(findSum(6), 126);

// An integer > 0.
// Return the sum of num * n, where n equals num but decrements every iteration.

// Base case
// If n = 1, return num
// Recursive case
// If n > 1, return num * n plus the value of num * n - 1.