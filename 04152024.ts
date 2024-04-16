// Write a function that

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

// https://leetcode.com/problems/next-greater-element-ii/description/