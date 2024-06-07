// Write a function that returns the majority element in O(n) time and O(1) space.

// function majorityElement(nums: number[]): number {
//   let maxElement = 0;
//   let maxCount = 0;
//   let left = 0;
//   let right = 0;

//   nums = nums.sort((a, b) => a - b);

//   while (right <= nums.length) {
//     if (nums[right] !== nums[left]) {
//       const currCount = right - left;

//       if (currCount > maxCount) {
//         maxCount = currCount;
//         maxElement = nums[left];
//       }

//       left = right;
//     }

//     right++;
//   }

//   return maxElement;
// }

// Boyer-Moore algorithm
function majorityElement(nums: number[]): number {
  let candidate;
  let count = 0;

  for (const num of nums) {
    if (count === 0) {
      candidate = num;
    }

    count += num === candidate ? 1 : -1;
  }

  return candidate;
}

console.log(majorityElement([3, 2, 3]), 3);
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]), 2);
// https://leetcode.com/problems/majority-element/

// nums: number[]. 1 <= nums.length <= 5*10^4. -10^9 <= nums[i] <= 10^9. Unsorted.
// Return the majority element (appears more than nums.length/2 times). An answer will always exist.

// Use a sliding window algorithm.
// Sort the array.
// Iterate the right pointer until it no longer matches the left pointer. If the length is greater than the previous, cache it.
// Return the max length.
