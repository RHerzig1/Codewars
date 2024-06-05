// Write a function that returns the unique element using the XOR operator.

function singleNumber(nums: number[]): number {
  return nums.reduce((a, c) => a ^ c, 0);
}

console.log(singleNumber([2, 2, 1]), 1);
console.log(singleNumber([4, 1, 2, 1, 2]), 4);
console.log(singleNumber([1]), 1);
// https://leetcode.com/problems/single-number/description/

// nums: number[]. 1 <= nums.length <= 3*10^4. -3*10^4 <= nums[i] <= 3*10^4. Every element has a matching pair, except one.
// Return the unique number using linear time complexity and constant space.

// Use the XOR operator on each element. It'll cancel out repeating values, leaving just the unique value.
