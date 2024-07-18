// Return the greater count of negative or positive integers in O(log(n)) time complexity.

function maximumCount(nums: number[]): number {
  // Declare a left pointer, right pointer, negative count, and positive count.
  let left = 0;
  let right = nums.length - 1;
  let negativeCount = 0;
  let positiveCount = 0;

  // Use binary search algorithm for negativeCount.
  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (nums[middle] < 0) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }

    negativeCount = left;
  }

  // Reset the left and right pointers.
  left = 0;
  right = nums.length - 1;

  // Use binary search algorithm for positiveCount.
  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (nums[middle] <= 0) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }

    positiveCount = nums.length - right - 1;
  }

  return Math.max(negativeCount, positiveCount);
}

// console.log(maximumCount([-2, -1, -1, 1, 2, 3]), 3);
// console.log(maximumCount([-3, -2, -1, 0, 0, 1, 2]), 3);
// console.log(maximumCount([5, 20, 66, 1314]), 4);
// https://leetcode.com/problems/maximum-count-of-positive-integer-and-negative-integer/

// nums: number[]. 1 <= nums.length <= 2000. -2000 <= nums[i] <= 2000.
// Return the count of negative integers or positive integers, whichever count is greater. The integer 0 counts towards neither.
