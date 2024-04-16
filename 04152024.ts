// Write a function that returns the next greater element of a circular array.

function nextGreaterElements(nums: number[]): number[] {
  const stack: number[] = [];
  const result: number[] = [];

  // Use a monotonic stack to find the next greatest element.
  for (let i = 0; i < nums.length * 2; i++) {
    const index = i % nums.length;

    while (stack.length && nums[stack[stack.length - 1]] < nums[index]) {
      result[stack.pop()!] = nums[index];
    }

    if (result[index] === undefined) {
      result[index] = -1;
    }

    if (i < nums.length) {
      stack.push(index);
    }
  }

  return result;
}

console.log(nextGreaterElements([1,2,1]), [2,-1,2]);
console.log(nextGreaterElements([1,2,3,4,3]), [2,3,4,-1,4]);
// https://leetcode.com/problems/next-greater-element-ii/description/

// nums: number[]. Array of integers. 0 <= nums.length <= 10^4. -10^9 <= nums[i] <= 10^9.
// Return an array of each integer's next greater element. At the end of the array, circle back to the beginning. If there is no greater element, use -1.
