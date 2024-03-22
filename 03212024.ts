// Write a function that calculates the best time to buy and sell stock using the sliding window method.

function maxProfit(prices: number[]): number {
  let [left, right, max] = [0, 0, 0];

  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      const profit = prices[right] - prices[left];
      max = Math.max(max, profit);
    } else {
      left = right;
    }

    right++;
  }

  return max;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]), 5);
console.log(maxProfit([7, 6, 4, 3, 1]), 0);
console.log(maxProfit([7, 1, 5, 3, 6, 4]), 5);

// prices: number[]. 1 <= prices.length <= 10^5. 0 <= prices[i] <= 10^4.
// Return the maximum profit possible from the list of prices, when only buying and selling once.

// Use the sliding window method.