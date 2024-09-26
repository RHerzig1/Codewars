// Concatenation of array.

function getConcatenation(nums: number[]): number[] {
  return [...nums, ...nums];
}

console.log(getConcatenation([1, 2, 1]), [1, 2, 1, 1, 2, 1]);
console.log(getConcatenation([1, 3, 2, 1]), [1, 3, 2, 1, 1, 3, 2, 1]);
// https://leetcode.com/problems/concatenation-of-array/

// nums: number[]. 1 <= nums.length <= 1000. 1 <= nums[i] <= 1000.
// Return an array ans that's twice the length of nums. ans[i] === nums[i] and ans[i + nums.length] === nums[i].
