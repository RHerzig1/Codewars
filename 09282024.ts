// Count the operations to remove all elements lower than k.

function minOperations(nums: number[], k: number): number {
  // Sort the array and declare pointers.
  nums.sort((a, b) => a - b);
  let left = 0;
  let right = nums.length - 1;

  // Binary search.
  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (nums[middle] < k) {
      left = middle + 1;
    } else if (nums[middle] >= k) {
      right = middle - 1;
    }
  }

  return left;
}

console.log(minOperations([2, 11, 10, 1, 3], 10), 2);
console.log(minOperations([1, 1, 2, 4, 9], 1), 0);
console.log(minOperations([1, 1, 2, 4, 9], 9), 4);
// https://leetcode.com/problems/minimum-operations-to-exceed-threshold-value-i/

// nums: number[]. 1 <= nums.length <= 50. 1 <= nums[i] <= 10^9.
// k: number. 1 <= k <= 10^9
// Return the number of operations (or deletions) to transform nums so every element is equal to or greater than k.
