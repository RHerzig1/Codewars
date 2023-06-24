// Write function that returns the smallest possible number from joining an array of integers.

function minValue(arr) {
  const unique = arr.filter((elem, index) => arr.indexOf(elem) === index);
  const sorted = unique.sort((a, b) => a - b);
  return Number(sorted.join(""));
}

console.log(minValue([3, 1, 1]), 13);
console.log(minValue([6, 7, 2]), 267);
console.log(minValue([3, 1, 0]), 13);

// An array containing positive integers. Never empty.
// Return the smallest possible number from joining an array of integers. Remove duplicate values.

// Remove duplicate values.
// Sort the array.
// Join and return.