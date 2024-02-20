// Write a function that completes the twoSum challenge.

function twoSum(arr: number[], target: number): number[][] {
  const cache: { [index: number]: boolean } = {};
  const result: number[][] = [];

  for (const elem of arr) {
    const difference = target - elem;

    if (elem in cache) {
      result.push([elem, difference]);
    } else {
      cache[difference] = true;
    }
  }

  return result;
}

console.log(twoSum([1, 2, 2, 3, 4], 4), [[2, 2],[3, 1],]);
console.log(twoSum([1, 2, 3], 4), [[3, 1]])
console.log(twoSum([1, 2, 3, 4, 5], 9), [[5, 4]])
console.log(twoSum([2, 2, 3], 4), [2, 2])
console.log(twoSum([2, 3], 4), [])

// arr: number[]. 0 <= arr.length <= 100. Number is always an integer. 0 <= number <= 100. Always valid array and number.
// target: number. Always an integer. 0 <= number <= 100. Always a valid number.
// Return an array of pairs that add up to the provided number.

// Declare a cache object.
// Declare a results array.
// Iterate through the array. Find the difference between each number and the target sum.
// If the target is in the cache, push both into the result.
// Else, push both into the array.
// Return the result.