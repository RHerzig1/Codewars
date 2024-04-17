// Write a function that returns the longest subarrays of 1s after deleting one element.

function longestSubarray(nums: number[]): number {
  let maxLength = 0;
  let zeros = 0;
  let left = 0;
  let right = 0;

  while (right < nums.length) {
    // Cache the right pointer value.
    if (nums[right] === 0) {
      zeros++;
    }

    // Check the condition and increment the left pointer if zeros > 1.
    while (zeros > 1) {
      if (nums[left] === 0) {
        zeros--;
      }

      left++;
    }

    // Cache the largest length so far.
    const currLength = right - left;
    maxLength = Math.max(maxLength, currLength);

    // Increment the right pointer.
    right++;
  }

  return maxLength;
}

console.log(longestSubarray([1, 1, 0, 1]), 3);
console.log(longestSubarray([0, 1, 1, 1, 0, 1, 1, 0, 1]), 5);
console.log(longestSubarray([1, 1, 1]), 2);
// https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/

// nums: number[]. 1 <= nums.length <= 10^5. num[i] is either 1 or 0.
// Return the length of the longest subarray containing only 1s. One element must be deleted. Return 0 if no subarray exists.

// Use the sliding window method.
// Be sure exactly one element is deleted.
