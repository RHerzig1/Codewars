// Write a function that returns the sale price of items using a montonic stack.

function finalPrices(prices: number[]): number[] {
  const stack: number[] = [];
  const result: number[] = [];

  for (let i = prices.length - 1; i >= 0; i--) {
    while (stack.length > 0 && stack[stack.length - 1] > prices[i]) {
      stack.pop();
    }

    result[i] = stack.length === 0 ? prices[i] : prices[i] - stack[stack.length - 1];
    stack.push(prices[i]);
  }

  return result;
}

console.log(finalPrices([8, 4, 6, 2, 3]), [4, 2, 4, 2, 3]);
console.log(finalPrices([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
console.log(finalPrices([10, 1, 1, 6]), [9, 0, 1, 6]);
// https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/

// prices: number[]. Array of items and their prices. 1 <= prices.length <= 500. 1 <= prices[i] <= 1000.
// Return an array containing the sale prices of each item. To get the sales price, subtract the next price that's less than or equal to the current price.

// Use a montonic stack to find the nearest smaller element on the right.
// https://www.youtube.com/watch?v=nuCrEEm91ts
