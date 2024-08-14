// Calculate whether a value is a power of two.

function isPowerOfTwo(n: number): boolean {
  // Calculate the exponent.
  let exponent = Math.log(n) / Math.log(2);

  // Edge case to round extremely large n values.
  exponent = Number(exponent.toFixed(10));

  return exponent % 1 === 0;
}

// https://leetcode.com/problems/power-of-two/

// n: number. -2^31 <= n <= 2^31 - 1.
// Return true if n is a power of two. For example, if exists n === 2^x.
