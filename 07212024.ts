// Use twoSum algorithm to find the trade for Alice and Bob to have the same amount of candy.

function fairCandySwap(aliceSizes: number[], bobSizes: number[]): number[] {
  // Calculate the amount of candy that needs to be traded from one person to the other, for them to be equal.
  const aliceTotal = aliceSizes.reduce((a, c) => a + c, 0);
  const bobTotal = bobSizes.reduce((a, c) => a + c, 0);
  const difference = (bobTotal - aliceTotal) / 2;

  // Cache aliceSize into a Set, for quicker retrieval.
  const aliceSet = new Set<number>(aliceSizes);

  // For each box of candy in bobSizes, calculate how much candy Alice would have to return in order to equal difference.
  // If Alice has a box with that amount, return Alice's box and Bob's box.
  for (const bobBox of bobSizes) {
    const aliceBox = bobBox - difference;

    if (aliceSet.has(aliceBox)) {
      return [aliceBox, bobBox];
    }
  }
}

console.log(fairCandySwap([1, 1], [2, 2]), [1, 2]); // 2, 4 // [1, 2], [1, 2] === [1, 2]
console.log(fairCandySwap([1, 2], [2, 3]), [1, 2]); // [2, 2], [1, 3] === [1, 2]
console.log(fairCandySwap([2], [1, 3]), [2, 3]); // [1, 2], [1, 2] === [1, 2]
console.log(fairCandySwap([1, 2, 5], [2, 4]), [5, 4]);
// https://leetcode.com/problems/fair-candy-swap/

// aliceSizes: number[]. 1 <= aliceSizes.length <= 10^4. 1 <= aliceSizes[i] <= 10^5.
// bobSizes: number[]. 1 <= bobSizes.length <= 10^4. 1 <= bobSizes[j] <= 10^5.
// Return the an array containing two integers. [number of candies alice must exchange, number of candies bob must exchange].

// Use the twoSum approach.
