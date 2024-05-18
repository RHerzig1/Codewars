// Write a function that returns the minimum value in a rotated sorted array.

function findMin(nums: number[]): number {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const middle = Math.floor((left + right) / 2);

    if (nums[middle] > nums[right]) {
      left = middle + 1;
    } else {
      right = middle;
    }
  }

  return nums[left];
}

console.log(findMin([3, 4, 5, 1, 2]), 1);
console.log(findMin([4, 5, 6, 7, 0, 1, 2]), 0);
console.log(findMin([11, 13, 15, 17]), 11);
// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/

// nums: number[]. A sorted array that may be rotated multiple times. 1 <= nums.length <= 5000. -5000 <= nums[i] <= 5000. All values are unique.
// Return the minimum number from the array. Use binary search.

// Use binary search to find the "seam" where nums[i] > nums[i + 1];
