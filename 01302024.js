// Write a function that type checks whether the parameter is an array of integers.

function isIntArray(arr) {
  return Array.isArray(arr) && arr.every((elem) => Number.isInteger(elem));
}

console.log(isIntArray([]), true);
console.log(isIntArray([1, 2, 3, 4]), true);
console.log(isIntArray([1, 2, 3, '4']), false);
console.log(isIntArray([1, 2, 3, NaN]), false);
console.log(isIntArray(1), false);
console.log(isIntArray(true), false);
console.log(isIntArray({1: true, 2: true}), false);

// Check that the parameter is an array.
// Check that every element is an integer.
// Return true or false.