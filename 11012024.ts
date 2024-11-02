// Solve the Two Sum challenge.

function twoSum(nums: number[], target: number): number[] {
  const result = [];
  const cache = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const difference = target - num;

    if (cache.has(difference)) {
      return [i, cache.get(difference)!];
    }

    cache.set(num, i);
  }
}

console.log(twoSum([2, 7, 11, 15], 9), [0, 1]);
console.log(twoSum([3, 2, 4], 6), [1, 2]);
console.log(twoSum([3, 3], 6), [0, 1]);

// nums: number[]. 2 <= nums.length <= 10^4. -10^9 <= nums[i] <= 10^9. Always valid.
// target: number. -10^9 <= target <= 10^9. Always valid integer.
// Return an array containing the two indices that add up to the target. Always one valid answer.
