// Write a function that returns the shortest subarray length with a bitwise OR value of k or greater.

function minimumSubarrayLength(nums: number[], k: number): number {
  const numMap = new Map<number, number>();
  let left = 0;
  let right = 0;
  let bitwise = 0;
  let minLength = nums.length + 1;

  while (right < nums.length) {
    // Cache the right pointer value.
    numMap.set(nums[right], (numMap.get(nums[right]) || 0) + 1);

    // Calculate the bitwise value.
    bitwise = calculateBitwise(numMap);

    // If bitwise is greater than or equal to k, update minLength and increment the left pointer.
    while (bitwise >= k && left <= right) {
      minLength = Math.min(minLength, right - left + 1);
      numMap.set(nums[left], (numMap.get(nums[left]) || 1) - 1);
      left++;
      bitwise = calculateBitwise(numMap);
    }

    // Increment the right pointer.
    right++;
  }

  // return minLength;
  return minLength <= nums.length ? minLength : -1;
}

function calculateBitwise(numMap: Map<number, number>): number {
  let bitwise = 0;

  for (const num of numMap) {
    if (num[1] > 0) {
      bitwise |= num[0];
    }
  }

  return bitwise;
}

console.log(minimumSubarrayLength([1, 2, 3], 2), 1);
console.log(minimumSubarrayLength([2, 1, 8], 10), 3);
console.log(minimumSubarrayLength([1, 2], 0), 1);
console.log(minimumSubarrayLength([16, 1, 2, 20, 32], 45), 2);
// https://leetcode.com/problems/shortest-subarray-with-or-at-least-k-i/description/

// nums: number[]. 1 <= nums.length <= 50. 0 <= nums[i] <= 50,
// k: number. 0 <= k < 64.
// Return a length indicating the minimum length of a subarray where the bitwise OR operator of all elements is greater than k.

// Use the sliding window technique.
// Calculate the bitwise OR result of all elements.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_OR
// A loop within a loop must be used, as the bitwise OR operator cannot be reversed.
// https://stackoverflow.com/questions/1096494/opposite-of-bitwise-or-operation
