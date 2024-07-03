// Count the maximum number of consecutive 1s after flipping k 0s.

function longestOnes(nums: number[], k: number): number {
  let zeroCount = 0;
  let maxLength = 0;
  let left = 0;
  let right = 0;

  while (right < nums.length) {
    // Cache the right pointer value.
    if (nums[right] === 0) {
      zeroCount++;
    }

    // If the number of 0s exceeds k, increment the left pointer until it equals k.
    while (zeroCount > k) {
      if (nums[left] === 0) {
        zeroCount--;
      }

      left++;
    }

    // Cache maxLength.
    maxLength = Math.max(maxLength, right - left + 1);

    // Increment the right pointer.
    right++;
  }

  return maxLength;
}

console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2), 6);
console.log(longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3), 10);
// https://leetcode.com/problems/max-consecutive-ones-iii/

// nums: number[]. 1 <= nums.length <= 10^5. nums[i] === 0 || 1.
// k: number. 0 <= k <= nums.length.
// Return the maximum number of consecutive 1s after flipping k 0s.

// Use a sliding window algorithm.
