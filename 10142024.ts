// Find constant added to nums2.

function addedInteger(nums1: number[], nums2: number[]): number {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);

  return nums2[0] - nums1[0];
};

console.log(addedInteger([2, 6, 4], [9, 7, 5]), 3);
console.log(addedInteger([10], [5]), -5);
console.log(addedInteger([1, 1, 1, 1], [1, 1, 1, 1]), 0);
// https://leetcode.com/problems/find-the-integer-added-to-array-i/

// nums1: number[]. 1 <= nums1.length <= 100. 0 <= nums1[i] <= 1000.
// nums2: number[]. nums2.length === nums1.length. 0 <= nums2[i] <= 1000.
// Find the value difference between nums1 and nums2. This number is a constant, which was added to all elements of nums2.