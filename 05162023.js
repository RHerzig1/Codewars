// Write a function that completes the Two Sum challenge.

function twoSum(arr, num) {
  const cache = {};
  const result = [];

  for (const elem of arr) {
    const difference = num - elem;
    if (difference in cache) {
      result.push([difference, elem]);
    } else {
      cache[elem] = true;
    }
  }

  return result;
}

console.log(twoSum([1, 2, 3, 4, 5], 5), [
  [1, 4],
  [2, 3],
]);

// An array of positive integers and a target num.
// Return the pair of integers that add up to the target, or an empty array.

// Declare a cache object.
// A result array.
// Loop through the parameter array.
// For each elem, calculate the difference.
// If difference is in the cache, add num pair to result array.
// Else, add elem to cache.
// Return the result.
