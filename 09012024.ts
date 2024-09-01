// Return the maximum wealth from an array of accounts.

function maximumWealth(accounts: number[][]): number {
  let currMaxWealth = 0;

  for (const account of accounts) {
    const currWealth = account.reduce((a, c) => a + c);

    currMaxWealth = Math.max(currMaxWealth, currWealth);
  }

  return currMaxWealth;
}

// https://leetcode.com/problems/richest-customer-wealth/

// accounts: number[][]. 1 <= accounts.length <= 50. 1 <= accounts[i].length <= 50. 1 <= accounts[i][j] <= 100.
// Return the maximum sum among all customers.
