// Calculate the pivot number.

function pivotInteger(n: number): number {
  let left = 0;
  let right = (n * (n + 1)) / 2;

  for (let i = 1; i <= n; i++) {
    right -= i;

    if (left === right) {
      return i;
    }

    left += i;
  }

  return -1;
}

console.log(pivotInteger(8), 6);
// 1 + 2 + 3 + 4 + 5 + 6 = 21
// 6 + 7 + 8 = 21
console.log(pivotInteger(1), 1);
// 1 = 1
// 1 = 1
console.log(pivotInteger(8), -1);
// https://leetcode.com/problems/find-the-pivot-integer/

// n: number. 1 <= n <= 1000.
// Return the pivot integer.
//   The pivot integer is the number at which the sum of all numbers between 1 => x === x => n.
//   If no answer exists, return -1.
//   No more than one answer can exist.
