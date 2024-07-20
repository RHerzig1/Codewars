// Determine whether the array is special.

function specialArray(nums: number[]): number {
  // Sort the array.
  nums = nums.sort((a, b) => a - b);

  // Declare a cache.
  const cache = new Map<number, number>();

  // Iterate the array and store the number of elements after each unique value.
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (!cache.has(num)) {
      cache.set(num, nums.length - i);
    }
  }

  // Iterate 0 - nums max value, find and return the special value.
  let length = nums.length;

  for (let i = 0; i <= nums.at(-1); i++) {
    if (cache.has(i)) {
      length = cache.get(i);
    } else {
      let j = 0;

      while (!cache.get(i + j)) {
        j++;
      }

      length = cache.get(i + j);
    }

    if (i === length) {
      return i;
    }
  }

  // If no special value exists, return the fallback.
  return -1;
}

console.log(specialArray([3, 5]), 2);
console.log(specialArray([0, 0]), -1);
console.log(specialArray([0, 4, 3, 0, 4]), 3); // [0, 0, 3, 4, 4, 5]
// https://leetcode.com/problems/special-array-with-x-elements-greater-than-or-equal-x/

// nums: number[]. 1 <= nums.length <= 100. 0 <= nums[i] <= 1000.
// Return an integer x that represents the number of positive values greater than or equal to x. If none exists, return -1.
