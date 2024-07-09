// Find the next greater element from a subset array using a monotonic stack.

function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const numToIndexMap = {};
  const stack = [];
  const result = new Array(nums1.length).fill(-1);

  // Create a map from num to its index in nums1
  nums1.forEach((num, index) => {
    numToIndexMap[num] = index;
  });

  // Iterate nums2 to find the next greater element for each number in nums1
  for (const num of nums2) {
    while (stack.at(-1) < num) {
      const smallerThanNum = stack.pop();
      const indexInNums1 = numToIndexMap[smallerThanNum];

      if (indexInNums1 !== undefined) {
        result[indexInNums1] = num;
      }
    }

    stack.push(num);
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
