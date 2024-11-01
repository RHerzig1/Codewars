// Determine whether the array has duplicate values.

function containsDuplicate(nums: number[]): boolean {
  const map: { [index: string]: number } = {};

  for (const num of nums) {
    map[num] = map[num] + 1 || 1;

    if (map[num] > 1) {
      return true;
    }
  }

  return false;
}

console.log(containsDuplicate([1, 2, 3, 1]), true);
console.log(containsDuplicate([1, 2, 3, 4]), false);
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]), true);
// https://leetcode.com/problems/contains-duplicate

// nums: number[]. 1 <= nums.length <= 10^5. -109 <= nums[i] <= 10^9
// Return false if every value is unique. Otherwise, return true.
