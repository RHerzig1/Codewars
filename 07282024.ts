// Calculate the number of steps that can created with coins.

function arrangeCoins(n: number): number {
  let count = 0;

  for (let i = 1; n > 0; i++) {
    n -= i;

    if (n >= 0) {
      count++;
    }
  }

  return count;
}

console.log(arrangeCoins(5), 2); // 5 - 1 = 4. 4 - 2 = 2. 2 - 3 = -1. Two complete rows.
console.log(arrangeCoins(8), 3);
// https://leetcode.com/problems/arranging-coins/

// n: number. Number of coins. 1 <= n <= 2^31 - 1.
// Return the number of rows that can be created, if each one was 1 coin longer than the previous.

// X
// XX
// XXX
