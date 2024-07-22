// Return the kth missing number from an array of sorted values.

function findKthPositive(arr: number[], k: number): number {
  const set = new Set(arr);

  for (let i = 1; i < arr.at(-1); i++) {
    if (!set.has(i)) {
      k--;
    }

    if (k === 0) {
      return i;
    }
  }

  return arr.at(-1) + k;
}

console.log(findKthPositive([2, 3, 4, 7, 11], 5), 9);
console.log(findKthPositive([1, 2, 3, 4], 2), 6);

// arr: number[]. 1 <= arr.length <= 1000. 1 <= arr[i] <= 1000.
// k: 1 <= k <= 1000.
// Return the kth missing number from the array.
