// Return elements that appear in both arrays.

function intersection(nums1: number[], nums2: number[]): number[] {
  const nums = new Set<number>();
  const result = new Set<number>();

  // Iterate the first array, and cache value.
  for (const num of nums1) {
    nums.add(num);
  }

  // Iterate the second array. If a value also appears in nums, push it into result.
  for (const num of nums2) {
    if (nums.has(num)) {
      result.add(num);
    }
  }

  // Return result.
  return Array.from(result);
}

console.log(intersection([1, 2, 2, 1], [2, 2]), [2]);
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]), [9, 4]);
// https://leetcode.com/problems/intersection-of-two-arrays/

// nums1: number[]. 1 <= nums1.length <= 1000. 0 <= nums1[i] <= 1000.
// nums2: number[]. 1 <= nums2.length <= 1000. 0 <= nums2[i] <= 1000..
// Return a list of elements that appear in both arrays. The result should continue only unique values.
