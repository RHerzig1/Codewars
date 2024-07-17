// Return the longest subarray with a sum <= the target using binary search.

function answerQueries(nums: number[], queries: number[]): number[] {
  const sums = nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    sums[i] = (sums[i - 1] || 0) + sums[i];
  }

  const result: number[] = [];

  for (let i = 0; i < queries.length; i++) {
    const target = queries[i];

    // If target is less than the smallest prefix sum, return 0.
    if (target < sums[0]) {
      result.push(0);
      continue;
    }

    // If target is greater than the largest prefix sum, return the length of sums.
    if (target >= sums[sums.length - 1]) {
      result.push(sums.length);
      continue;
    }

    // Binary search for the largest index where sums[index] <= target.
    let left = 0;
    let middle = 0;
    let right = sums.length - 1;

    while (left <= right) {
      middle = Math.floor((left + right) / 2);

      if (sums[middle] < target) {
        left = middle + 1;
      } else if (sums[middle] > target) {
        right = middle - 1;
      } else {
        left++;
        break;
      }
    }

    // After binary search, left may be greater than the target. If so, decrement it.
    if (sums[left] > target) {
      left--;
    }

    // Push left + 1 convert the index into the count.
    result.push(left + 1);
  }

  return result;
}

console.log(answerQueries([4, 5, 2, 1], [3, 10, 21]), [2, 3, 4]);
console.log(answerQueries([2, 3, 4, 5], [1]), [0]);
console.log(answerQueries([736411, 184882, 914641, 37925, 214915], [331244, 273144, 118983, 118252, 305688, 718089, 665450]), [2, 2, 1, 1, 2, 3, 3]);
// https://leetcode.com/problems/longest-subsequence-with-limited-sum/

// nums: number[]. 1 <= nums.length <= 1000. 1 <= nums[i] <= 10^6.
// queries: number[]. 1 <= queries.length <= 1000. 1 <= queries[i] <= 10^6.
// For each value in queries, return the maximum size of values from nums, where the sum is less than or equal to queries[i].

// [4, 5, 2, 1]
// Sort nums in ascending order: [1, 2, 4, 5].
// Use nums to create an prefix sum array: [1, 3, 7, 12].
// Increment the prefix sum array until each target is found.
