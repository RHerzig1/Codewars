// Write a function that flatted and sorts a multidimensional array.

function flattenAndSort(arr) {
  return arr.flat().sort((a, b) => a - b);
}

console.log(flattenAndSort([[4, 5, 3], [2, 1], [0, 9, 7], [6, 8]]), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9])

// A multidimensional array containing integers. Never empty.
// Flatten and sort the array.