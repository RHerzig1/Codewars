// Use a monotonic stack to calculate discounted prices.

function finalPrices(prices: number[]): number[] {
  // Declare the stack and result arrays. Prefill result with the default value.
  const stack = [];
  const result = [...prices];

  // Iterate the dataset using a monotonic stack algorithm.
  for (let i = 0; i < prices.length; i++) {
    const price = prices[i];

    // While the current element is greater than the element referenced at the top of the stack.
    while (price <= prices[stack.at(-1)]) {
      const index = stack.pop();

      // Reassign the value in result using the index that was stored in the stack.
      result[index] = prices[index] - price;
    }

    // Push the current index in the stack.
    stack.push(i);
  }

  return result;
}

console.log(finalPrices([8, 4, 6, 2, 3]), [4, 2, 4, 2, 3]);
console.log(finalPrices([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
console.log(finalPrices([10, 1, 1, 6]), [9, 0, 1, 6]);
// https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/

// prices: number[]. 1 <= prices.length <= 500. 1 <= prices.length <= 500. 
// Return each price after it's been discounted by subtracting the next lowest price. If none exists, return the original price.
