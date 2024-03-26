// Write a fuction that returns the maximum sum of a subarray with the length of k.

function maximumSubarraySum(nums: number[], k: number): number {
  const numSet = new Set();
  let [left, right, sum, maxSum] = [0, 0, 0, 0];

  while (right < nums.length) {
    // Increment the right pointer until window width equals k or a value isn't unique.
    // Ensure the right value is unique before adding it to the set.
    while (!numSet.has(nums[right]) && numSet.size < k && Number.isInteger(nums[right])) {
      numSet.add(nums[right]);
      sum += nums[right];
      right++;
    }

    // If the width is correct, calculate maxSum.
    if (numSet.size === k) {
      maxSum = Math.max(sum, maxSum);
    }

    // Increment the left pointer.
    numSet.delete(nums[left]);
    sum -= nums[left];
    left++;
  }

  return maxSum;
}

console.log(maximumSubarraySum([1, 5, 4, 2, 9, 9, 9], 3), 15);
console.log(maximumSubarraySum([4, 4, 4], 3), 0);

// nums: number[]. 1 <= nums.length <= 10^5. 1 <= nums[i] <= 10^5.
// k: number. Length of subarray. 1 <= k <= nums.length.
// Return the greatest sum possible from a subarray with length k and all unique elements. If no answer exists, return 0.

// Delcare pointers, maxSum, and a set to cache values.
// Increment the right pointer until the gap = k.
