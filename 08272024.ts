// Count the good pairs in an array.

function numIdenticalPairs(nums: number[]): number {
  nums = nums.sort((a, b) => a - b);
  let left = 0;
  let right = 0;
  let count = 0;

  // Use a sliding window algorith.
  while (right < nums.length) {
    // Cache the right pointer value.
    left = right;
    const curr = nums[left];

    // Widen the window if curr appears more than once.
    while (nums[right + 1] === curr) {
      right++;
    }

    // Shrink the window. Count the possible pairs.
    while (left < right) {
      count += right - left;
      left++;
    }

    // Increment the right pointer.
    right++;
  }

  return count;
}

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]), 4);
console.log(numIdenticalPairs([1, 1, 1, 1]), 6);
console.log(numIdenticalPairs([1, 2, 3]), 0);
// https://leetcode.com/problems/number-of-good-pairs/

// nums: number[]. 1 <= nums.length <= 100. 1 <= nums[i] <= 100.
// Return the number of good pairs in the array.
