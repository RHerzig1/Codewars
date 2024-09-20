// Create a target array using seperate nums and indices arrays.

function createTargetArray(nums: number[], indices: number[]): number[] {
  nums = nums.reverse();
  indices = indices.reverse();
  const result: number[] = [];

  while (nums.length) {
    const value = nums.pop();
    const index = indices.pop();

    result.splice(index!, 0, value!);
  }

  return result;
}

console.log(createTargetArray([0, 1, 2, 3, 4], [0, 1, 2, 2, 1]), [0, 4, 1, 3, 2]);
console.log(createTargetArray([1, 2, 3, 4, 0], [0, 1, 2, 3, 0]), [0, 1, 2, 3, 4]);
// https://leetcode.com/problems/create-target-array-in-the-given-order/

// nums: number[]. 1 <= nums.length <= 100. 0 <= nums[i] <= 100.
// index: number[]. nums.length == index.length. 0 <= index[i] <= 100.
// Return a target array where for each value, insert value nums[i] at index index[i].
