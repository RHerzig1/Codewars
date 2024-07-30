// Calculate the number of steps that can created with coins using binary search.

function arrangeCoins(n: number): number {
  let left = 1;
  let right = n;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    const numberOfCoins = (middle * (middle + 1)) / 2;

    if (numberOfCoins < n) {
      left = middle + 1;
    } else if (numberOfCoins > n) {
      right = middle - 1;
    } else {
      return middle;
    }
  }

  return left - 1;
}

console.log(arrangeCoins(5), 2); // 5 - 1 = 4. 4 - 2 = 2. 2 - 3 = -1. Two complete rows.
console.log(arrangeCoins(8), 3);
// https://leetcode.com/problems/arranging-coins/

// n: number. Number of coins. 1 <= n <= 2^31 - 1.
// Return the number of rows that can be created, if each one was 1 coin longer than the previous.

// X
// XX
// XXX
