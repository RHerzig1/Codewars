
// Write a function that returns the minimum difference between numbers in an array.

function minimumDifference(nums: number[], k: number): number {
  nums = nums.sort((a, b) => a - b);
  let left = 0;
  let right = 0;
  let minDifference = nums.at(-1);
  
  while (right < nums.length) {
    // If the window is the right size, check the condition and increment the left pointer.
    if (right - left + 1 === k) {
      minDifference = Math.min(minDifference, nums[right] - nums[left]);
      left++;
    }
    
    // Increment the right pointer.
    right++;
  }
  
  return minDifference;
}

console.log(minimumDifference([9,4,1,7], 2), 2);
console.log(minimumDifference([90], 1), 0);
// https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/description/

// nums: number[]. 1 <= nums.length <= 1000. 0 <= nums[i] <= 10^5.
// k: number. 1 <= k <= nums.length.
// Return the lowest different between two elements with the gap length of k.

// Use the sliding window technique.
// Sort the elements first.