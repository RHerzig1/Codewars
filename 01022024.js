// Write a function that sorts an array of numbers based off the sum of their digits.

function sortBySum(arr) {
  const cache = {};

  for (const elem of arr) {
    cache[elem] = [...String(elem)].reduce((a, c) => a + Number(c), 0);
  }

  return arr.sort((a, b) => cache[a] - cache[b]);
}

console.log(sortBySum([3, 100, 20, 44, 40]), [3, 100, 20, 44, 40]);
console.log(sortBySum([56, 65, 74, 100]), [100, 56, 65, 74]);
console.log(sortBySum([11, 22, 123, 11, 0]), [0, 11, 11, 22, 123]);
console.log(sortBySum([]), []);

// An array of numbers. 0 <= arr.length <= 20. 0 <= elem <= 200.
// Return the array after it has been sorted.

// Declare a cache to store digit sums during the sort.
// Iterate through the array and assign the sums into the cache.
// Sort and return the array.
