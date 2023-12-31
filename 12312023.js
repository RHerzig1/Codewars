// Write a function that returns whether a number is "strong".

function isStrong(num) {
  const factorials = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880];
  const sum = [...String(num)].reduce((a, c) => a + factorials[c], 0);
  return num === sum;
}

console.log(isStrong(145), true); // (1) + (1 * 2 * 3 * 4) + (1 * 2 * 3 * 4 * 5) = 1 + 24 + 120 = 145
console.log(isStrong(1), true);
console.log(isStrong(3), false);
console.log(isStrong(150), false);
console.log(isStrong(2000), false);
console.log(isStrong(0), false);
console.log(isStrong(40585), true);

// A positive integer. Always a valid number. 0 <= number <= 2000.
// Return TRUE or FALSE indicating whether the paramter is "strong". Strong indicates that the sum of the factorial of its digits is equal to the number itself.

// Create array turning number into array of digits.
// Iterate through and replace each with factorial.
// Reduce to sum.
// Compare sum to num, return matching value.
