// Return the longest subarray with a sum <= the target.

function answerQueries(nums: number[], queries: number[]): number[] {
  const sums = nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    sums[i] = (sums[i - 1] || 0) + sums[i];
  }

  const result: number[] = [];

  for (let i = 0; i < queries.length; i++) {
    const target = queries[i];
    let count = 0;

    while (sums[count] <= target) {
      count++;
    }

    result[i] = count;
  }

  return result;
}

// console.log(answerQueries([4, 5, 2, 1], [3, 10, 21]), [2, 3, 4]);
// console.log(answerQueries([2, 3, 4, 5], [1]), [0]);
// https://leetcode.com/problems/longest-subsequence-with-limited-sum/

// nums: number[]. 1 <= nums.length <= 1000. 1 <= nums[i] <= 10^6.
// queries: number[]. 1 <= queries.length <= 1000. 1 <= queries[i] <= 10^6.
// For each value in queries, return the maximum size of values from nums, where the sum is less than or equal to queries[i].

// [4, 5, 2, 1]
// Sort nums in ascending order: [1, 2, 4, 5].
// Use nums to create an prefix sum array: [1, 3, 7, 12].
// Increment the prefix sum array until each target is found.
