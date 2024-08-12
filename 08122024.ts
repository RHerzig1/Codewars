// Use binary search to find a targets insert position.

function searchInsert(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  // Use a binary search algorithm.
  while (left <= right) {
    // Declare a middle pointer.
    const middle = Math.floor((left + right) / 2);

    // Adjust the pointers depending on which side has the target value.
    if (target < nums[middle]) {
      right = middle - 1;
    } else if (target > nums[middle]) {
      left = middle + 1;
    } else {
      return middle;
    }
  }

  return left;
};

console.log(searchInsert([1, 3, 5, 6], 5), 2);
console.log(searchInsert([1, 3, 5, 6], 2), 1);
console.log(searchInsert([1, 3, 5, 6], 7), 4);
// https://leetcode.com/problems/search-insert-position/

// nums: number[]. 1 <= nums.length <= 10^4. -10^4 nums[i] <= 10^4. Distinct values in ascending order.
// target: number. -10^4 <= target <= 10^4.
// Return the actual or hypothetical insertion position of the target number. Solve in O(log(n)) time complexity.