// Sum of distinct elements in all subarrays.

function sumCounts(nums: number[]): number {
  let sum = 0;

  // Brute force method.
  for (let i = 0; i < nums.length; i++) {
    const distinctNums = new Set<number>();

    for (let j = i; j < nums.length; j++) {
      const num = nums[j];
      distinctNums.add(num);

      sum += distinctNums.size ** 2;
    }
  }

  return sum;
}

// console.log(sumCounts([1, 2, 1]), 15);
// console.log(sumCounts([1, 1]), 3);
// https://leetcode.com/problems/subarrays-distinct-element-sum-of-squares-i/

// nums: number[]. 1 <= nums.length <= 100. 1 <= nums[i] <= 100.
// Count the number of distinct values in all subarrays. Return the sum of the squared count of distinct values from each subarray.
