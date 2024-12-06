// Calculate the minimum sum of a subarray between (inclusive) min and max sizes.

function minimumSumSubarray(nums: number[], min: number, max: number): number {
  let currSum = 0;
  let minSum: number | null = null;

  for (let i = 0; i < nums.length; i++) {
    const a = nums[i];

    for (let j = i; j < i + max && j < nums.length; j++) {
      const b = nums[j];
      currSum += b;

      const length = j - i + 1;
      const isValidLength = length >= min && length <= max ? true : false;

      if (currSum > 0 && isValidLength) {
        if (!Number.isInteger(minSum)) {
          minSum = currSum;
        } else {
          minSum = Math.min(minSum, currSum);
        }
      }
    }

    currSum = 0;
  }

  return Number.isInteger(minSum) ? minSum : -1;
}

console.log(minimumSumSubarray([3, -2, 1, 4], 2, 3), 1);
console.log(minimumSumSubarray([-2, 2, -3, 1], 2, 3), -1);
console.log(minimumSumSubarray([1, 2, 3, 4], 2, 4), 3);
console.log(minimumSumSubarray([1, 2, 3, 4, 5, 6], 2, 5), 3);
// https://leetcode.com/problems/minimum-positive-sum-subarray

// nums: number[]. 1 <= nums.length <= 100. -1000 <= nums[i] <= 1000.
// min: number. 1 <= min <= max.
// max: number. min <= max <= nums.length.
// Calculate the minimum sum of a subarray between (inclusive) min and max sizes. If all sums are less than or equal to 0, return -1.
