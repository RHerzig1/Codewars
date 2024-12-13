// Find the power numbers from subarrays.

function resultsArray(nums: number[], k: number): number[] {
  const consecutives: number[] = Array(nums.length).fill(1);

  // Start at 1 and increment on consectutive values
  // Reset back to 1 when consectutive series breaks
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] === nums[i - 1] + 1) {
          consecutives[i] = consecutives[i - 1] + 1;
      }
  }

  const result: number[] = [];

  // If consectutive increments are greater than k, push nums value into result
  // Else, push -1 into result
  for (let i = k - 1; i < nums.length; i++) {
      result.push(consecutives[i] >= k ? nums[i] : -1);
  }

  return result;
}

console.log(resultsArray([1, 2, 3, 4, 3, 2, 5], 3), [3, 4, -1, -1, -1]);
// [1, 2, 3] === Power, because all values are consecutive and in ascending order. Push the highest value, 3, into the result.
// [2, 3, 4] === Power. Push 4 into the result.
// [3, 4, 3] === No power. Push -1 into the result.
// [4, 3, 2] === No power. Push -1 into the result.
// [3, 2, 5] === No power. Push -1 into the result.
// [3, 4, -1, -1, -1]
console.log(resultsArray([2, 2, 2, 2, 2], 4), [-1, -1]);
console.log(resultsArray([3, 2, 3, 2, 3, 2], 2), [-1, 3, -1, 3, -1]);
// https://leetcode.com/problems/find-the-power-of-k-size-subarrays-i

// nums: number[]. 1 <= nums.length <= 500. 1 <= nums[i] <= 10^5.
// k: number. 1 <= k <= nums.length.
// Return an array (length = n - k + 1), where each element is the power of nums[i..(i + k - 1)].
