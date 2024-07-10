// Use a monotonic stack to find the next greater element in a circular array.

function nextGreaterElements(nums: number[]): number[] {
  // Declare the stack and result arrays. Prefill result with the default value.
  const stack: number[] = [];
  const result: number[] = new Array(nums.length).fill(-1);
  nums = nums.concat(nums); // Double the "circular" array;

  // Iterate the dataset using a monotonic stack algorithm.
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    // While the current element is greater than the element refernced at the top of the stack.
    while (num > nums[stack.at(-1)]) {
      const index = stack.pop();

      // Reassign the value in result using the index that was stored in the stack.
      result[index] = nums[i];
    }

    // Push the current index in the stack.
    stack.push(i);
  }

  return result.slice(0, nums.length / 2); // Return the first half of the result array.
}

console.log(nextGreaterElements([1, 2, 1]), [2, -1, 2]);
console.log(nextGreaterElements([1, 2, 3, 4, 3]), [2, 3, 4, -1, 4]);
console.log(nextGreaterElements([5, 4, 3, 2, 1]), [-1, 5, 5, 5, 5]);
// https://leetcode.com/problems/next-greater-element-ii/

// nums: number[]. 1 <= nums.length <= 10^4. -10^9 <= nums[i] <= 10^9. Circular array.
// Return the next greater element of each element in nums.
