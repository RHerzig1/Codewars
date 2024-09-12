// Return whether n is an ugly number.

function isUgly(n: number): boolean {
  if (n <= 0) {
    return false;
  }

  while (n % 2 === 0) {
    n /= 2;
  }

  while (n % 3 === 0) {
    n /= 3;
  }

  while (n % 5 === 0) {
    n /= 5;
  }

  return n === 1;
}

console.log(isUgly(6), true);
console.log(isUgly(1), true);
console.log(isUgly(14), false);
// https://leetcode.com/problems/ugly-number/

// n: number. -2^31 <= n <= 2^31 - 1.
// Return true if n is an ugly number.
// An ugly number is one whose prime factors are limited to 2, 3, and 5.
