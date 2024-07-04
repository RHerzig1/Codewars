// Count the subarrays where the maximum valued element appears at least k times.

function countSubarrays(nums: number[], k: number): number {
  const maxValue = Math.max(...nums);
  let maxValueCount = 0;
  let subarrayCount = 0;
  let left = 0;
  let right = 0;

  // Use a sliding window algorithm.
  while (right < nums.length) {
    // Cache the right pointer value.
    if (nums[right] === maxValue) {
      maxValueCount++;
    }

    while (maxValueCount >= k) {
      // Increment subarrayCount. Count current subarray and all combinations towards the right.
      subarrayCount += nums.length - right;

      // Remove left pointer value from cache.
      if (nums[left] === maxValue) {
        maxValueCount--;
      }

      // Increment the left pointer.
      left++;
    }

    // Increment the right pointer.
    right++;
  }

  return subarrayCount;
}

console.log(countSubarrays([1, 3, 2, 3, 3], 2), 6);
console.log(countSubarrays([1, 4, 2, 1], 3), 0);
// https://leetcode.com/problems/count-subarrays-where-max-element-appears-at-least-k-times/

// nums: number[]. 1 <= nums.length <= 10^5. 1 <= nums[i] <= 10^6.
// k: number. 1 <= k <= 10^5.
// Count the subarrays where the maximum valued element appears at least k times.
