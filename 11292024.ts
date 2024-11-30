// Return the length of the longest subarray that exists in two arrays.

function findLength(nums1: number[], nums2: number[]): number {
  let maxLength = 0;
  let currLength = 0;

  // Brute force
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      let a = nums1[i];
      let b = nums2[j];

      while (a === b && a !== undefined) {
        currLength++;

        a = nums1[i + currLength];
        b = nums2[j + currLength];
      }

      maxLength = Math.max(maxLength, currLength);
      currLength = 0;
    }
  }

  return maxLength;
}

console.log(findLength([1, 2, 3, 2, 1], [3, 2, 1, 4, 7]), 3);
console.log(findLength([1, 2, 3, 2, 1, 9], [3, 2, 1, 4, 7]), 3);
console.log(findLength([1, 2, 3, 2, 1], [3, 2, 1, 4, 7, 9]), 3);
console.log(findLength([0, 0, 0], [0, 0, 0]), 3);
// https://leetcode.com/problems/maximum-length-of-repeated-subarray/

// nums1: number[]. 1 <= nums1.length <= 1000. 0 <= nums1[i] <= 100.
// nums2: number[]. 1 <= nums2.length <= 1000. 0 <= nums2[i] <= 100.
// Return the length of the longest subarray that exists in both arrays.
