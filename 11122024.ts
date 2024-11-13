// Number of increments to make array strictly increasing.

function minOperations(nums: number[]): number {
  let operations = 0;

  for (let i = 1; i < nums.length; i++) {
    const prev = nums[i - 1];
    const curr = nums[i];
    const difference = curr - prev;

    if (difference <= 0) {
      const sum = Math.abs(difference) + 1;
      operations += sum;
      nums[i] += sum;
    }
  }

  return operations;
}

console.log(minOperations([1, 1, 1]), 3); // [1, 2, 3]
console.log(minOperations([1, 5, 2, 4, 1]), 14); // [1, 5, 6, 7, 8]
console.log(minOperations([8]), 0);
// https://leetcode.com/problems/minimum-operations-to-make-the-array-increasing/

// nums: number[]. 1 <= nums.length <= 5000. 1 <= nums[i] <= 10^4.
// Return the number of operations needed to make the array strictly increasing.
//   An operation is incrementing an element by 1.
