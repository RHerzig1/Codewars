// Maximum sum with exactly K elements.

function maximizeSum(nums: number[], k: number): number {
  let max = Math.max(...nums);
  let sum = 0;

  while (k) {
    sum += max;
    max++;
    k--;
  }

  return sum;
}

console.log(maximizeSum([1, 2, 3, 4, 5], 3), 18);
console.log(maximizeSum([5, 5, 5], 2), 11);
// https://leetcode.com/problems/maximum-sum-with-exactly-k-elements/

// nums: number[]. 1 <= nums.length <= 100. 1 <= nums[i] <= 100.
// k: number. 1 <= k <= 100.
// Return the maximum sum of removing one element, adding it to a score, and readding it to the the array. Repeat k number of time.
