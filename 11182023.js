// Write a function that sorts an array by referenceing another provided array.

function sortWithRef(arr, ref) {
  return arr.sort((a, b) => ref.indexOf(a) - ref.indexOf(b));
}

console.log(sortWithRef([1, 2, 3, 4, 5, 6], [6, 5, 4, 3, 2, 1]), [6, 5, 4, 3, 2, 1]);
console.log(sortWithRef([1, 1, 1, 5, 3], [6, 5, 4, 3, 2, 1]), [5, 3, 1, 1, 1]);
console.log(sortWithRef([5, 4, 6, 1], [6, 5, 4, 3, 2, 1]), [6, 5, 4, 1]);

// An array of numbers. Length => 1. Always valid inputs.
// A seconds array used as a reference. Contains numbers. Always valid inputs.
// Sort the rank into the order.

// Declare the order.
// Reference that in the sort parameter.
