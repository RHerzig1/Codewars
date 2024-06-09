// Write a function that returns whether an array contains a good subarray.

// function checkSubarraySum(nums: number[], k: number): boolean {
//   let sum = 0;

//   for (let i = 0; i < nums.length - 1; i++) {
//     sum = nums[i];

//     for (let j = i + 1; j < nums.length; j++) {
//       sum += nums[j];

//       if ((sum / k) % 1 === 0) {
//         return true;
//       }
//     }
//   }

//   return false;
// }

function checkSubarraySum(nums: number[], k: number): boolean {
  const cache = new Map<number, number>(); // <running modulo, current index>
  cache.set(0, -1); // Initialize the map with 0: -1 to handle edge cases.
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
      sum += nums[i];
      const modulo = sum % k;

      if (cache.has(modulo)) {
          const prevIndex = cache.get(modulo);

          if (i - prevIndex > 1) {
              return true;
          }
      } else {
          cache.set(modulo, i);
      }
  }

  return false;
}
console.log(checkSubarraySum([23, 2, 4, 6, 7], 6), true); // [2, 4] = 6 / 6 = 1.
console.log(checkSubarraySum([23, 2, 6, 4, 7], 6), true); // [23, 2, 6, 4, 7] = 42 / 6 = 7.
console.log(checkSubarraySum([23, 2, 6, 4, 7], 13), false);
console.log(checkSubarraySum([5, 0, 0, 0], 13), true); // [0, 0] = 0 / 13 = 0.
console.log(checkSubarraySum([23, 6, 9], 6), false);
// https://leetcode.com/problems/continuous-subarray-sum/

// nums: number[]. 1 <= nums.length <= 10^5. 0 <= nums[i] <= 10^9.
// k: number. Target integer. 1 <= k <= 2^31 - 1.
// Return true if the array contains a good subarray.
// - Subarray length >= 2.
// - Sum of elements is a multiple of k, or 0.

// Brute force and check every subarray.