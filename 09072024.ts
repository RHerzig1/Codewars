// Calculate the difference between divisible and non-divisible sums.

function differenceOfSums(n: number, m: number): number {
  let result = 0;

  for (let i = 1; i <= n; i++) {
      if (i % m === 0) {
          result -= i;
      } else {
          result += i;
      }
  }

  return result;
};

console.log(differenceOfSums(10, 3), 19);
console.log(differenceOfSums(5, 6), 15);
// https://leetcode.com/problems/divisible-and-non-divisible-sums-difference

// n: number. 1 <= n <= 1000. The upper bound of range [1, n].
// m: number. 1 <= m <= 1000. The integer used to divide each number within range [1, n].
// Return the difference between num1 and num2.
// Num1 is the sum of integers between [1, n] that divide even by m.
// Num2 is the sum of integers between [1, n] that divide even by m.
