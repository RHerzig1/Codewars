// Return an array of indicies from nums that match target.

function targetIndices(nums: number[], target: number): number[] {
  // Sort nums in non-decreasing order.
  nums = nums.sort((a, b) => a - b);
  const result: number[] = [];

  // Loop through nums and push the indicies of values equal to target into the result array.
  nums.forEach((elem, index) => {
    if (elem === target) {
      result.push(index);
    }
  });

  // Return the result.
  return result;
}

console.log(targetIndices([1, 2, 5, 2, 3], 2), [1, 2]); // [1, 2, 2, 3, 5] => [1, 2];
console.log(targetIndices([1, 2, 5, 2, 3], 3), [3]); // [1, 2, 2, 3, 5] => [3];
console.log(targetIndices([1, 2, 5, 2, 3], 5), [4]); // [1, 2, 2, 3, 5] => [4];
// https://leetcode.com/problems/find-target-indices-after-sorting-array/

// nums: number[]. 1 <= nums.length <= 100. 1 <= nums[i] <= 100.
// target: number. 1 <= target <= 100.
// Return an array of indicies from nums that match target. If none exist, return an empty array. The list must be sorted in increasing order.
