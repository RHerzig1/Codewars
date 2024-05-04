// Write a function that returns the count of pairs whose sum is less than the target.

function countPairs(nums: number[], target: number): number {
  nums = nums.sort((a, b) => a - b);
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    let j = nums.length - 1;

    while (nums[i] + nums[j] >= target && i < j) {
      j--;
    }

    count += j - i;
  }

  return count;
}

console.log(countPairs([-1, 1, 2, 3, 1], 2), 3);
console.log(countPairs([-6, 2, 5, -2, -7, -1, 3], -2), 10);
// https://leetcode.com/problems/count-pairs-whose-sum-is-less-than-target/

// nums: number[]. 1 <= nums.length <= 50. -50 <= nums[i] <= 50.
// target: number. -50 <= target <= 50.
// Return the count of pairs whose sum add is less than the target.

// Declare two pointers.
// Iterate from left to right with the first pointer.
// On each element, iterate the right pointer from right to left. Stop when the sum of elements is less than target.
// Subtract the indicies and add to count.
