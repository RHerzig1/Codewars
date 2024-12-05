// Return the maximum XOR value out of all possible strong pairs.

function maximumStrongPairXor(nums: number[]): number {
  nums.sort((a, b) => a - b);
  const strongPairs: number[][] = [];
  let left = 0;
  let right = 0;

  while (left < nums.length) {
    const x = nums[left];
    let y = nums[right];

    while (isStrongPair(x, y)) {
      strongPairs.push([x, y]);
      right++;
      y = nums[right];
    }

    left++;
    right = left;
  }

  const maxXOR = Math.max(...strongPairs.map((pair) => pair[0] ^ pair[1]));
  return maxXOR;
}

function isStrongPair(x: number, y: number): boolean {
  const difference = Math.abs(x - y);

  if (difference <= x && difference <= y) {
    return true;
  }

  return false;
}

console.log(maximumStrongPairXor([1, 2, 3, 4, 5]), 7);
// Strong pairs: [1, 1], [1, 2], [2, 2], [2, 3], [2, 4], [3, 3], [3, 4], [3, 5], [4, 4], [4, 5], [5, 5]
// https://leetcode.com/problems/maximum-strong-pair-xor-i

// nums: number[]. 1 <= nums.length <= 50. 1 <= nums[i] <= 100.
// Return the maximum XOR value out of all possible strong pairs. A strong pair is one in which |x - y| <= min(x, y). The same value can be picked twice to create a pair.
