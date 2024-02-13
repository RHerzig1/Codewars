// Write a function that solves the Two Sum challange.

function twoSum(nums: number[], target: number): number[] {
  const cache: { [index: number]: number } = {};

  for (let i = 0; i < nums.length; i++) {
    const difference = target - nums[i];

    if (cache.hasOwnProperty(difference)) {
      return [cache[difference], i];
    }

    cache[nums[i]] = i;
  }

  return [-1, -1];
}

console.log(twoSum([2, 7, 11, 15], 9), [0, 1]);
console.log(twoSum([3, 2, 4], 6), [1, 2]);
console.log(twoSum([3, 3], 6), [0, 1]);

// nums: number[]. 2 <= nums.length <= 10^4. -10^9 <= nums[i] <= 10^9. Always valid.
// target: number. -109 <= target <= 109. Always valid integer.
// Return an array containing the two indices that add up to the target. Always one valid answer.

// Declare a cache object.
// Iterate through the array.
// Calculate the difference between target and each element.
// If the difference exsits in the cache, return both indexes.
// Cache that number and index.
