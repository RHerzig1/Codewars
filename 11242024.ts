// Count the subarrays where the max element appears at least k times.

function countSubarrays(nums: number[], k: number): number {
  const maxElement = Math.max(...nums);
  let maxElementCount = 0;
  let left = 0;
  let right = 0;
  let subarrayCount = 0;

  // Window algorithm.
  while (right < nums.length) {
    // Cache the right pointer value.
    if (nums[right] === maxElement) {
      maxElementCount++;
    }

    // Validate the max element appears at least k times.
    while (maxElementCount >= k) {
      // Add all subarray variations to the right.
      subarrayCount += nums.length - right;

      // Increment the left pointer value.
      if (nums[left] === maxElement) {
        maxElementCount--;
      }

      left++;
    }

    // Increment the right pointer.
    right++;
  }

  return subarrayCount;
}

console.log(countSubarrays([1, 3, 2, 3, 3], 2), 6);
console.log(countSubarrays([1, 4, 2, 1], 3), 3);
// https://leetcode.com/problems/count-subarrays-where-max-element-appears-at-least-k-times/

// nums: number[]. 1 <= nums.length <= 10^5. 1 <= nums[i] <= 10^6.
// k: number. 1 <= k <= 10^5.
// Count the subarrays where the max element appears at least k times.
