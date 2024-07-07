// Find the next greater element from a subset array.

function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const result: number[] = [];

  // Iterate nums1.
  for (let i = 0; i < nums1.length; i++) {
    const nums2Index = nums2.indexOf(nums1[i]);
    result[i] = -1;

    // Start nums2 at the index where nums1[i] === nums2[j]
    for (let j = nums2Index; j < nums2.length; j++) {

      // Cache the next greatest number into result.
      if (nums2[j] > nums1[i]) {
        result[i] = nums2[j];
        break;
      }
    }
  }

  return result;
}

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]), [-1, 3, -1]);
console.log(nextGreaterElement([2, 4], [1, 2, 3, 4]), [3, -1]);
console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2, 5]), [5, 3, 5]);
// https://leetcode.com/problems/next-greater-element-i/

// nums1: number[]. 1 <= nums1.length <= nums2.length. 0 <= nums1[i] <= 10^4. All numbers are unique. Subset of nums2.
// nums2: number[]. nums1.length <= nums2.length <= 1000. 0 <= nums2[j] <= 10^4. All numbers are unique.
// For each element of nums1, find the index of nums2 where nums1[i] === nums2[j]. Then cache the next greater element in nums2, or -1 if none exists. Return each value in number[].
