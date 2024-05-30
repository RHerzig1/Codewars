// Write a function that merges sorted arrays in-place.

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let k = nums1.length - 1;
  m = m - 1;
  n = n - 1;

  while (n >= 0) {
    if (nums1[m] > nums2[n]) {
      nums1[k] = nums1[m];
      m--;
    } else {
      nums1[k] = nums2[n];
      n--;
    }

    k--;
  }
}

let nums1 = [1, 2, 3, 0, 0, 0];
let nums2 = [2, 5, 6];
merge(nums1, 3, nums2, 3);
console.log(nums1, [1, 2, 2, 3, 5, 6]);

nums1 = [1];
nums2 = [];
merge(nums1, 1, nums2, 0);
console.log(nums1, [1]);

nums1 = [0];
nums2 = [1];
merge(nums1, 0, nums2, 1);
console.log(nums1, [1]);

// https://leetcode.com/problems/merge-sorted-array/

// nums1: number[]. 0 <= nums1.length <= 200. Length includes nums2.length as all 0.
// nums2: number[]. 1 <= nums2.length <= 200.
// Return nums1 with nums2 values added.

// Use a merge sort algorithm and iterate nums1 backwards.
