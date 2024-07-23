// Return the kth missing number from an array of sorted values.

function findKthPositive(arr: number[], k: number): number {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    const missing = arr[middle] - middle - 1;

    if (missing < k) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return left + k;
}

console.log(findKthPositive([2, 3, 4, 7, 11], 5), 9);
console.log(findKthPositive([1, 2, 3, 4], 2), 6);
// https://leetcode.com/problems/kth-missing-positive-number/

// arr: number[]. 1 <= arr.length <= 1000. 1 <= arr[i] <= 1000.
// k: 1 <= k <= 1000.
// Return the kth missing number from the array.
