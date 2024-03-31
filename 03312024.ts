// Write a function that returns the length of the longest harmonious subarray.

function findLHS(nums: number[]): number {
  const numMap = new Map<number, number>();
  nums = nums.sort((a, b) => b - a);
  let maxLength = 0;

  for (const num of nums) {
    numMap.set(num, (numMap.get(num) || 0) + 1);
  }

  for (const prop of numMap) {
    if (numMap.has(prop[0] + 1)) {
      maxLength = Math.max(maxLength, prop[1] + numMap.get(prop[0] + 1)!);
    }
  }

  return maxLength;
}

console.log(findLHS([1, 3, 2, 2, 5, 2, 3, 7]), 5); // [3,2,2,2,3]
console.log(findLHS([1, 2, 3, 4]), 2);
console.log(findLHS([1, 1, 1, 1]), 0);

// nums: number[]. 1 <= nums.length <= 2*10^4. -10^9 <= nums[i] <= 10^9.
// Return the length of the longest harmonious subarray. A harmonious array is one in which the maximum and minimum values differ by exactly 1. Elements may be deleted from the subarray.

// Create a map of values: count pairs.
// Iterate through the map. Add consecutive values and cache the biggest total.
