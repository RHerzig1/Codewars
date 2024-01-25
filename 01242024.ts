// Write an algorithm that returns the most reoccuring elements of an array.

export function reoccuringElems(arr: number[], k: number): number[] {
  const cache: { [index: string]: number } = {};
  const result: number[] = [];

  for (const elem of arr) {
    cache[elem] = cache[elem] + 1 || 1;
  }

  const cacheArr: number[] = Object.entries(cache).sort((a, b) => b[1] - a[1]).map(elem => Number(elem[0]));
  return cacheArr.slice(0, k);
}

console.log(reoccuringElems([1, 2, 3, 4, 5, 4], 1), [4]);
console.log(reoccuringElems([3, 1, 2, 3, 4, 5, 4], 2), [3, 4]);
console.log(reoccuringElems([1, 2, 3, 4, 5, 4, 9, 9, 9, 1], 3), [9, 1, 4]);

// arr: number[]. An array of integers. 1 <= arr.length <= 20. 1 <= numbers <= 100. Always valid.
// k: number. Always a positive integer. 1 <= k <= 5. Always valid.
// Return an array containing the k most common values of the array. Sort in any order.

// Iterate through the parameter array and cache each value and the number of times it appears.
// Declare a results array.
// Iterate the object and, while results array.length < k, push the most common values.
// Return the results array.
