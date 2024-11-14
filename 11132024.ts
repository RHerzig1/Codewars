// Reorder an array by frequency of elements.

function frequencySort(nums: number[]): number[] {
  const map = new Map<number, number>();

  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  return Array.from(map)
    .sort((a, b) => b[0] - a[0])
    .sort((a, b) => a[1] - b[1])
    .map((elem) => new Array(map.get(elem[0])).fill(elem[0]))
    .flat();
}

console.log(frequencySort([1, 1, 2, 2, 2, 3]), [3, 1, 1, 2, 2, 2]);
console.log(frequencySort([2, 3, 1, 3, 2]), [1, 3, 3, 2, 2]);
console.log(frequencySort([5, -1, 4, 4, -6, -6, 1, 1, 1]));
// https://leetcode.com/problems/sort-array-by-increasing-frequency

// nums: number[]. 1 <= nums.length <= 100. -100 <= nums[i] <= 100.
// Return the array sorted by frequency of value in increasing order. If values have the same frequency, order in decreasing order.
