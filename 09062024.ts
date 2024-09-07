// Calculate the absolute difference between left prefixsum and right prefix sum for each element.

function leftRightDifference(nums: number[]): number[] {
  // Declare arrays.
  const prefixSumLeft: number[] = [];
  const prefixSumRight: number[] = [];
  const prefixDifference: number[] = [];

  // Add prefix sum left to right.
  for (let i = 0; i < nums.length; i++) {
    const currValue = nums[i];
    const prefixValue = prefixSumLeft[i - 1] || 0;

    prefixSumLeft.push(currValue + prefixValue);
  }

  // Subtract prefix sum right to left.
  for (let i = 0; i < nums.length; i++) {
    const currValue = nums[i - 1] || 0;
    const prefixValue = prefixSumRight[i - 1] || prefixSumLeft.at(-1);

    prefixSumRight.push(prefixValue - currValue);
  }

  // Calculate the absolute difference.
  for (let i = 0; i < nums.length; i++) {
    const prefixSumLeftValue = prefixSumLeft[i];
    const prefixSumRightValue = prefixSumRight[i];

    prefixDifference.push(Math.abs(prefixSumLeftValue - prefixSumRightValue));
  }

  return prefixDifference;
}

console.log(leftRightDifference([10, 4, 8, 3]), [15, 1, 11, 22]);
// [0, 0, 0, 0] Default
// [10, 14, 22, 25] Prefix sum left to right
// [25, 15, 11, 3] Prefix sum right to left
// [15, 1, 11, 22] Absolute difference
console.log(leftRightDifference([1]), [0]);
// https://leetcode.com/problems/left-and-right-sum-differences/

// nums: number[]. 1 <= nums.length <= 1000. 1 <= nums[i] <= 10^5.
// Return a number array where each element equals |leftSum[i] - rightSum[i]|.
// If no prefix element exists, use 0.
