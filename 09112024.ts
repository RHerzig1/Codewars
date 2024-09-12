// Find the number of good pairs.

function numberOfPairs(nums1: number[], nums2: number[], k: number): number {
  let count = 0;

  for (let i = 0; i < nums1.length; i++) {
    const val1 = nums1[i];

    for (let j = 0; j < nums2.length; j++) {
      const val2 = nums2[j] * k;

      if (val1 % val2 === 0) {
        count++;
      }
    }
  }

  return count;
}

console.log(numberOfPairs([1, 3, 4], [1, 3, 4], 1), 5); // [0, 0], [1, 0], [1, 1], [2, 0], [2, 2]
console.log(numberOfPairs([1, 2, 4, 12], [2, 4], 3), 2); // [3, 0], [3, 1]
// https://leetcode.com/problems/find-the-number-of-good-pairs-i/

// nums1: number[]. 1 <= nums1.length <= 50. 1 <= nums1[i] <= 50.
// nums2: number[]. 1 <= nums2.length <= 50. 1 <= nums2[j] <= 50.
// k: number. 1 <= k <= 50.
// Return a count of good pairs.
// A good pair (i, j) is one where:
// nums1[i] is divisible by nums2[j] * k.
