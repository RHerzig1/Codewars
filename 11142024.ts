// Convert an array of integers so each element is a single digit.

function separateDigits(nums: number[]): number[] {
  return nums.join("").split("").map(Number);
}

console.log(separateDigits([13, 25, 83, 77]), [1, 3, 2, 5, 8, 3, 7, 7]);
console.log(separateDigits([7, 1, 3, 9]), [7, 1, 3, 9]);
// https://leetcode.com/problems/separate-the-digits-in-an-array/

// nums: number[]. 1 <= nums.length <= 1000. 1 <= nums[i] <= 10^5.
// Return an array with each digit as a seperate element.
