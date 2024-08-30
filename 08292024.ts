// Scamble the array.

function shuffle(nums: number[], n: number): number[] {
  const result = [];

  for (let i = 0; i < n; i++) {
    const x = nums[i];
    const y = nums[i + n];

    result.push(x, y);
  }

  return result;
}

console.log(shuffle([2, 5, 1, 3, 4, 7], 3), [2, 3, 5, 4, 1, 7]);
console.log(shuffle([1, 2, 3, 4, 4, 3, 2, 1], 4), [1, 4, 2, 3, 3, 2, 4, 1]);
console.log(shuffle([1, 1, 2, 2], 2), [1, 2, 1, 2]);
// https://leetcode.com/problems/shuffle-the-array/

// nums: number[]. nums.length === 2 * n. 1 <= nums[i] <= 10^3.
// n: number. 1 <= n <= 500. The middle of the array.
// Return the array after shuffling it.
