//  Count equal and divisible pairs in array.

function countPairs(nums: number[], k: number): number {
  const map = new Map<number, number[]>();
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    map.set(num, (map.get(num) || []).concat(i));
  }

  for (const [value, indices] of map) {
    for (let i = 0; i < indices.length - 1; i++) {
      const indexI = indices[i];

      for (let j = i + 1; j < indices.length; j++) {
        const indexJ = indices[j];
        const product = indexI * indexJ;

        if (product % k === 0) {
          console.log(i, j);
          count++;
        }
      }
    }
  }

  return count;
}

console.log(countPairs([3, 1, 2, 2, 2, 1, 3], 2), 4);
console.log(countPairs([1, 2, 3, 4], 1), 0);
// https://leetcode.com/problems/count-equal-and-divisible-pairs-in-an-array/

// nums: number[]. 1 <= nums.length <= 100. 1 <= nums[i] <= 100.
// k: number. 1 <= k <= 100.
// Return a count of pairs that meet both criteria:
//   Both elements have the same values.
//   Both indices multiplied together are divisible by k.
