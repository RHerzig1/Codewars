// Find the two duplicate numbers.

function getSneakyNumbers(nums: number[]): number[] {
  nums.sort((a, b) => a - b);
  const result: number[] = [];
  let index = 0;

  // Iterate until the index no longer matches the element. Push that element into result.
  while (index === nums[index]) {
    index++;
  }

  result.push(nums[index]);

  // Iterate until the index no longer matches the element + 1. Push that element into result.
  while (index === nums[index] + 1) {
    index++;
  }

  result.push(nums[index]);

  return result;
}

console.log(getSneakyNumbers([0, 1, 1, 0]), [0, 1]);
console.log(getSneakyNumbers([0, 3, 2, 1, 3, 2]), [2, 3]);
console.log(getSneakyNumbers([7, 1, 5, 4, 3, 4, 6, 0, 9, 5, 8, 2]), [4, 5]);
// https://leetcode.com/problems/the-two-sneaky-numbers-of-digitville/

// nums: number[]. 2 <= nums.length <= 100. 0 <= nums[i] <= nums.length - 2;
// Return the two elements that appear twice as an array. Can be in any order.
