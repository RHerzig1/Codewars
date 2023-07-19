// Write a function that completes the twosum challenge.

function twoSum(arr, sum) {
  const cache = {};
  const result = [];

  for (const elem of arr) {
    const difference = sum - elem;

    if (Object.hasOwn(cache, difference)) {
      result.push([elem, difference]);
    } else {
      cache[elem] = true;
    }
  }

  return result;
}

console.log(twoSum([1, 2, 2, 3, 4], 4), [
  [2, 2],
  [3, 1],
]);
console.log(twoSum([1, 2, 3], 4), [[3, 1]]);
console.log(twoSum([1, 2, 3, 4, 5], 9), [[5, 4]]);
console.log(twoSum([2, 2, 3], 4), [2, 2]);
console.log(twoSum([2, 3], 4), []);

// An array of integers. Always valid, positive numbers. And a positive integer.
// Return an array containing pairs of elements that add to the provided number.

// Declare a cache object.
// Declare a result array.
// Iterate through the parameter array.
// For each number, calculate the difference between the number and sum.
// Check for that number in the cache.
// If it's there, push both to the array.
// If not, add the array number into the cache.
// After iterating, return the result.
