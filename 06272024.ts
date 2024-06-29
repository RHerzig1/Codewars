// Find the longest harmonious subsequence.

function findLHS(nums: number[]): number {
  const cache = new Map<number, number>();

  // Cache the count of each value of the array.
  for (const num of nums) {
    cache.set(num, (cache.get(num) || 0) + 1);
  }

  // Cache the max sum where the difference between numbers === 1.
  let maxLength = 0;
  let prevProp: number | null = null;
  let prevCount: number | null = null;

  for (const [prop, count] of cache) {
    if (Number.isInteger(prevProp) && (prop === prevProp! + 1 || prop === prevProp! - 1)) {
      const sum = prevCount! + count;
      maxLength = Math.max(maxLength || 0, sum);
    }

    prevProp = prop;
    prevCount = count;
  }

  return maxLength;
}

console.log(findLHS([1, 3, 2, 2, 5, 2, 3, 7]), 5); // [3, 2, 2, 2, 3]
console.log(findLHS([1, 2, 3, 4]), 2);
console.log(findLHS([1, 1, 1, 1, 1]), 0);

// nums: number[]. 1 <= nums.length <= 2*10^4. -10^9 <= nums[i] <= 10^9.
// Return the length (number) of the longest harmonious subsequence from the parameter. A harmonious subsequence is one where the difference between the max and min value is exactly 1.
// Do not change the order, however, elements can be removed.
