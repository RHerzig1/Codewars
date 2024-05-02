// Write a function that returns an index using binary search.

function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (nums[middle] < target) {
      left = middle + 1;
    } else if (nums[middle] > target) {
      right = middle - 1;
    } else {
      return middle;
    }
  }

  return -1;
}

console.log(search([-1, 0, 3, 5, 9, 12], 9), 4);
console.log(search([-1, 0, 3, 5, 9, 12], 2), -1);
// https://leetcode.com/problems/binary-search/

// nums: number[]. Sorted in ascending order. All values are unique. 1 <= nums.length <= 10^4. -10^4 <= nums[i] <= 10^4.
// target: number.  -10^4 <= target <= 10^4.
// Return the index of the value, or -1 if it doesn't exist.

// Use a binary search algorithm.
