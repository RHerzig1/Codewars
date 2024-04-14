// Write a function the returns the number of subarrays that reduce to k in linear time.

function subarraySum(nums: number[], k: number): number {
  // Store the sum of each iteration and it's appearance count in a Map.
  const numMap = new Map<number, number>();
  let sum = 0;
  let result = 0;

  // Add 0 to the Map for when sum - k === 0.
  numMap.set(0, 1);

  for (const num of nums) {
    // Calculate the running sum and the current difference between sum and k.
    sum += num;
    const difference = sum - k;

    // If the difference appears in numMap, add the appearance count to result.
    if (numMap.has(difference)) {
      result += numMap.get(difference)!;
    }

    // Add the difference to numMap and increment the appearance count.
    numMap.set(sum, (numMap.get(sum) || 0) + 1);
  }

  return result;
}

console.log(subarraySum([1, 1, 1], 2), 2);
console.log(subarraySum([1, 2, 3], 3), 2);
console.log(subarraySum([-1, -1, 1], 0), 1);
console.log(subarraySum([1, -1, 0], 2), 3);
// https://leetcode.com/problems/subarray-sum-equals-k/

// nums: number[]. Array of integers. 1 <= nums.length <= 10^5.  -1000 <= nums[i] <= 1000.
// k: number. Integer. -10^7 <= k <= 10^7.
// Return the number of subarrays within nums where the sum of elements equal k.

// The sliding window approach isn't possible because there are negative numbers in the array.
