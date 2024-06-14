// Count the element pairs with a sum less than the target.

function countPairs(nums: number[], target: number): number {
  nums = nums.sort((a, b) => a - b);
  let count = 0;
  let left = 0;
  let right = 1;

  while (left < nums.length) {
    while (nums[left] + nums[right] < target) {
      count++;
      right++;
    }

    left++;
    right = left + 1;
  }

  return count;
}

console.log(countPairs([-1, 1, 2, 3, 1], 2));
console.log(countPairs([-6, 2, 5, -2, -7, -1, 3], 10));
// https://leetcode.com/problems/count-pairs-whose-sum-is-less-than-target/

// nums: number[]. 1 <= nums.length <= 50. -50 <= nums[i] <= 50.
// target: number.-50 <= target <= 50.
// Return the number of pairs of elements where the sum is less than target.

// Sort the array.
// Use two pointers to iterate and count the pairs.
