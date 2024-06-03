// Write a function that returns the best time to buy and sell stocks.

function maxProfit(prices: number[]): number {
  let maxDifference: number = 0;
  let left: number = 0;
  let right: number = 0;

  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      const profit = prices[right] - prices[left];
      maxDifference = Math.max(maxDifference, profit);
    } else {
      left = right;
    }

    right++;
  }

  return maxDifference;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]), 5);
console.log(maxProfit([7, 6, 4, 3, 1]), 5);
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

// prices: number[]. Price of stock each day.1 <= prices.length <= 10^5. 0 <= prices[i] <= 10^4.
// Return number. Return the maximum difference between the sell/buy transactions. If no profit is possible, return 0.

// Use a sliding window algorithm.
