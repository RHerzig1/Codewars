// Triangular sum of an array.

function triangularSum(nums: number[]): number {
  while (nums.length > 1) {
    const temp: number[] = [];

    for (let i = 0; i < nums.length - 1; i++) {
      const sum = nums[i] + nums[i + 1];
      temp.push(sum % 10);
    }

    nums = temp;
  }

  return nums[0];
}

console.log(triangularSum([1, 2, 3, 4, 5]), 8);
// [3, 5, 7, 9]
// [8, 2, 6]
// [0, 8]
// [8]
console.log(triangularSum([5]), 5);
// https://leetcode.com/problems/find-triangular-sum-of-an-array/

// nums: number[]. 1 <= nums.length <= 1000. 0 <= nums[i] <= 9.
// Return the number that is left after executing:
//   Create a new array (length === n - 1) where each value is the sum of adjacent elements % 10.
//   End the process when only 1 element remains.
