// Write a function that sorts an array of integers based off the product of the element and its index.

function sortByValueAndIndex(arr) {
  const ref = arr.map((elem, index) => [elem * (index + 1), elem]);
  arr = ref.sort(([a], [b]) => a - b);
  return arr.map(([_, val]) => val);
}

console.log(sortByValueAndIndex([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
console.log(sortByValueAndIndex([23, 2, 3, 4, 5]), [2, 3, 4, 23, 5]);
console.log(sortByValueAndIndex([9, 5, 1, 4, 3]), [1, 9, 5, 3, 4]);

// An array containing at least one integer. Always valid numbers.
// Return the array sorted by each element * its index. Index starts at 1.

// Transform each element into an array: [product, orig]
// Sort by product.
// Transform each element back into their original number.
// Return.