// Write a function that sorts an array based off it's sum of bits.

function sortByBit(arr) {
  const cache = {};

  for (const elem of arr) {
    const ones = elem.toString(2).match(/[1]/g);
    const count = ones ? ones.length : 0;

    cache[elem] = count;
  }

  return arr.sort((a, b) => a - b).sort((a, b) => cache[a] - cache[b]);
}

console.log(sortByBit([7, 6, 15, 8]), [8, 6, 7, 15]);
console.log(sortByBit([2, 19, 10, 12]), [2, 10, 12, 19]);
console.log(sortByBit([4, 5, 24, 25, 9]), [4, 5, 9, 24, 25]);
console.log(sortByBit([]), []);

// An array of integers > 0. A length >= 0.
// Return the array sorted, in place, by the sum of bits.

// Declare a cache object.
// Iterate through the array.
// For each number, calculate the sum and add to the object.
// Sort the array by referecing the object and return.
