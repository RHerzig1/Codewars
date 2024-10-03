// Count pairs with absolute difference of k.

function countKDifference(nums: number[], k: number): number {
  const hashMap = new Map<number, number>();
  let total = 0;

  for (const num of nums) {
    // Check whether the sum or difference already exists in hashMap.
    const sum = num + k;
    const difference = num - k;

    if (hashMap.has(sum)) {
      total += hashMap.get(sum)!;
    }

    if (hashMap.has(difference)) {
      total += hashMap.get(difference)!;
    }

    // Populate hashMap with current value.
    hashMap.set(num, (hashMap.get(num) || 0) + 1);
  }

  return total;
}

console.log(countKDifference([1, 2, 2, 1], 1), 4);
console.log(countKDifference([1, 3], 3), 0);
console.log(countKDifference([3, 2, 1, 5, 4], 2), 3);
// https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/

// nums: number[]. 1 <= nums.length <= 200. 1 <= nums[i] <= 100.
// k: number. 1 <= k <= 99. Target difference.
