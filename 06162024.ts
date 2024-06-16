// Count the number of arithmetic triplets in an array.

function arithmeticTriplets(nums: number[], diff: number): number {
  const hash = new Set<number>();
  let count = 0;

  for (const num of nums) {
    hash.add(num);

    const [i, j, k] = [num - diff * 2, num - diff, num];

    if (hash.has(i) && hash.has(j) && hash.has(k)) {
      count++;
    }
  }

  return count;
}

console.log(arithmeticTriplets([0, 1, 4, 6, 7, 10], 3), 2);
// console.log(arithmeticTriplets([4, 5, 6, 7, 8, 9], 2), 2);
// https://leetcode.com/problems/number-of-arithmetic-triplets/

// nums: number[]. 3 <= nums.length <= 200. 0 <= nums[i] <= 200. Strictly increasing (all unique values).
// diff: number. 1 <= diff <= 50.
// Return a count of arithmetic triplets in the array. That's where nums[j] - nums[i] === diff and nums[k] - nums[j] === diff.

// Use triple pointers.
// Reset when the differences become greater than diff.
// Return the count.
