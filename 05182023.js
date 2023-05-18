// Write a function that uses recursion to return the sum of (num * num) + (num * (num - 1)) + ... + (num * (num - num)).

function sum(num, i = num) {
  if (i <= 1) {
    return num;
  }

  return (num * i) + sum(num, i - 1);
}

console.log(sum(3), 18);
console.log(sum(5), 75);
console.log(sum(6), 126);

// (3 * 3)) + (3 * 2) + (3 * 1) + (3 * 0)
// 9 + 6 + 3 = 18

// A integer >= 0. Always a number.
// Return the total sum of N * (N - i) where i ranges from N to 1.

// Base case:
// If i === 1, return num
// Recursive case:
// Return the
