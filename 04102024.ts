// Write a function that returns the next greater element of one array from another.

function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const result: number[] = [];

  for (let i = 0; i < nums1.length; i++) {
    for (let j = nums2.indexOf(nums1[i]); j < nums2.length; j++) {
      if (nums2[j] > nums1[i]) {
        result.push(nums2[j]);
        break;
      } else if (j === nums2.length - 1) {
        result.push(-1);
      }
    }
  }

  return result;
}

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]), [-1, 3, -1]);
console.log(nextGreaterElement([2, 4], [1, 2, 3, 4]), [3, -1]);
// https://leetcode.com/problems/next-greater-element-i/description/

// nums1: number[]. 1 <= nums1.length <= 1000. 0 <= nums1[i] <= 10^4. All integers are unique. All integers appear in nums2.
// nums2: number[]. 1 <= nums2.length <= 1000. 0 <= nums2[i] <= 10^4. All integers are unique.
// Return an array of integers where each element from nums1 is replaced by the closest larger element from nums2, or -1 if none exists.

// Maintain monotonicity: At each step, maintain the monotonicity property of the stack. For instance, if you're looking for the nearest greater element, maintain a strictly increasing stack. If you're looking for the nearest smaller element, maintain a strictly decreasing stack.
// Update the stack: For each element encountered, update the stack accordingly. This typically involves popping elements from the stack until the desired monotonicity property is satisfied, and then pushing the current element onto the stack.
// Process the results: Depending on the problem, you may process the elements in the stack to compute the desired result.
