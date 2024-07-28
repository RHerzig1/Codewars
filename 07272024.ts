// Return whether an array includes a value and it's double, in O(n) time.

function checkIfExist(arr: number[]): boolean {
  const cache = new Set<number>();

  for (const num of arr) {
    if (cache.has(num / 2) || cache.has(num * 2)) {
      return true;
    }

    cache.add(num);
  }

  return false;
}

console.log(checkIfExist([10, 2, 5, 3]), true); // [2, 3, 5, 10]
console.log(checkIfExist([3, 1, 7, 11]), false);
console.log(checkIfExist([-10, 12, -20, -8, 15]), true); // [-20, -10, -8, 12, 15]
console.log(checkIfExist([-2, 0, 10, -19, 4, 6, -8]), false); // [-20, -10, -8, 12, 15]
// https://leetcode.com/problems/check-if-n-and-its-double-exist/

// arr: number[]. 2 <= arr.length <= 500. -10^3 <= arr[i] <= 10^3.
// Return true or false whether arr has a value, in which the double also exists in arr.
