// Find all the missing numbers from an array.

function findDisappearedNumbers(nums: number[]): number[] {
  // Convert the nums array into a set.
  const set = new Set<number>(nums);

  // Iterate from 1 - nums.length. If i doesn't appear in the set, push it into the results array.
  const result: number[] = [];

  for (let i = 1; i <= nums.length; i++) {
      if (!set.has(i)) {
          result.push(i);
      }
  }

  return result;
}

// console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]), [5, 6]);
// console.log(findDisappearedNumbers([[1, 1]]), [2]);
// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/

// nums: number[]. 1 <= nums.length <= 10^5. Integers may not be unique.
// Return an array of all integers [1, nums.length] that don't appear in nums.
