// Write a function that returns the number of complete subarrays.

function countCompleteSubarrays(nums: number[]): number {
  const numCount = new Map<number, number>();
  const size = new Set(nums).size;
  let count = 0;
  let left = 0;
  let right = 0;

  while (right < nums.length) {
    // Cache the right pointer value.
    numCount.set(nums[right], (numCount.get(nums[right]) || 0) + 1);

    // Check that numCount has at least one of each distinct value. Increase the count and increment the left pointer.
    while (numCount.size === size) {
      count += nums.length - right;
      numCount.set(nums[left], (numCount.get(nums[left]) || 1) - 1);

      // If numCount[left] === 0, delete it from the Map.
      if (numCount.get(nums[left]) === 0) {
        numCount.delete(nums[left]);
      }

      left++;
    }

    // Increment the right pointer.
    right++;
  }

  return count;
}

console.log(countCompleteSubarrays([1, 3, 1, 2, 2]), 4);
console.log(countCompleteSubarrays([5, 5, 5, 5]), 10);
// https://leetcode.com/problems/count-complete-subarrays-in-an-array/

// Nums: number[]. 1 <= nums.length <= 1000. 1 <= nums[i] <= 2000.
// Return a count of complete subarrays. A subarray is complete if it contains at least one of every value from the array.

// Use the sliding window method.
