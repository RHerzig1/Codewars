// Return the smallest even multiple.

function smallestEvenMultiple(n: number): number {
  return n % 2 === 0 ? n : n * 2;
}

console.log(smallestEvenMultiple(6), 6); // If n is even, it's already the smallest multiple of itself and 2.
console.log(smallestEvenMultiple(7), 14); // If n is odd, the next smallest multiple of itself and 2 is n * 2.
// https://leetcode.com/problems/smallest-even-multiple/

// n: number. 1 <= n <= 150.
// Return the smallest common multiple of n and 2.