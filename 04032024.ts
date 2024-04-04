// Write a function that returns the length of the longest [even, odd, even, ...] subarray.

function longestAlternatingSubarray(nums: number[], threshold: number): number {
  let left = 0;
  let right = 0;
  let longestLength = 0;

  while (right < nums.length) {
    // Check the conditions
    let belowThreshold = nums[right] <= threshold;
    let alternatingEvenOdd = (nums[right] % 2 !== nums[right - 1] % 2 || left === right) && nums[left] % 2 === 0;

    // If a condition is false, reset the left pointer. Else, update longestLength.
    if (!belowThreshold) {
      left = right + 1;
    } else if (!alternatingEvenOdd) {
      left = nums[right] % 2 == 0 ? right : right + 1;
    } else {
      longestLength = Math.max(longestLength, right - left + 1);
    }

    // Increment the right pointer.
    right++;
  }

  return longestLength;
}

console.log(longestAlternatingSubarray([3, 2, 5, 4], 5), 3); // [2, 5, 4]
console.log(longestAlternatingSubarray([1, 2], 2), 1); // [2]
console.log(longestAlternatingSubarray([2, 3, 4, 5], 4), 3); // [2, 3, 4]
console.log(longestAlternatingSubarray([8, 4], 6), 1); // [4]
console.log(longestAlternatingSubarray([4, 10, 3], 10), 2); // [10, 3]
// https://leetcode.com/problems/longest-even-odd-subarray-with-threshold/

// nums: number[]. 1 <= nums.length <= 100. 1 <= nums[i] <= 100.
// threshold: number. 1 <= threshold <= 100.
// Return the length of the longest subarray with the pattern [even, odd, even, odd, ...] and each element must be less than or equal to the threshold.

// Use the sliding window technique.
