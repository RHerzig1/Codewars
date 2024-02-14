// Write a function that returns the K most frequent elements of an array.

function topKFrequent(nums: number[], k: number): number[] {
  const counts: { [index: string]: number } = {};

  for (const num of nums) {
    counts[num] = counts[num] + 1 || 1;
  }

  let arr: number[] = Object.keys(counts).map(Number);
  arr = arr.sort((a, b) => counts[b] - counts[a]);

  return arr.slice(0, k);
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2), [1, 2]);
console.log(topKFrequent([1], 1), [1]);

// nums: number[]. 1 <= nums.length <= 105. -104 <= nums[i] <= 104. Always valid.
// k: number. 1 <= k <= number of unique elements in the array. Always valid.
// Return number[] containing the most frequent elements of nums. Can be sorted in any order. Length === k.

// Create a count object {elem: count}.
// Create an array of the keys in count.
// Sort array by count value.
// Return a splice of array.
