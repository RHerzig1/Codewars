// Write a function returns the next greater element from two arrays using a monotonic stack.

function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const stack: number[] = [];
  const nextGreatest: number[] = [];
  const result: number[] = [];

  // Use a monotonic stack to find the next greatest element in nums2.
  for (let i = nums2.length - 1; i >= 0; i--) {
    while (stack.length > 0 && stack.at(-1) < nums2[i]) {
      stack.pop();
    }

    nextGreatest[i] = stack.length ? stack.at(-1) : -1;
    stack.push(nums2[i]);
  }

  // Match the indices from num1 to create a result.
  for (let i = 0; i < nums1.length; i++) {
    const nums2Index = nums2.indexOf(nums1.at(i));
    result[i] = nextGreatest[nums2Index];
  }

  return result;
}

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]), [-1, 3, -1]);
console.log(nextGreaterElement([2, 4], [1, 2, 3, 4]), [3, -1]);
// https://leetcode.com/problems/next-greater-element-i/description/
// https://www.youtube.com/watch?v=Dq_ObZwTY_Q

// nums1: number[]. Unique integers. 1 <= nums1.length <= nums2.length. 0 <= nums1[i] <= 10^4.
// nums2: number[]. Unique integers. Contains all of num1 integers. nums1.length <= nums1.length <= 1000. 0 <= nums2[i] <= 10^4.
// Return nums1 with each element replaced by the next greater integer from nums2.
