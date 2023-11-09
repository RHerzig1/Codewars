// Write a function that reduces an array using a callback function. Do not use reduce().

function reduce(arr, fn, init = 0) {
  let result = init;

  for (let i = 0; i < arr.length; i++) {
    result = fn(arr[i], result);
  }

  return result;
}

console.log(reduce([1, 2, 3, 4, 5], function addElems(a, c) { return  a + c; }, 0), 15);
console.log(reduce([1, 2, 3, 4, 5], function subtractElems(a, c) { return c - a; }, 15), 0);
console.log(reduce([1, 1, 1, 1, 1], function indexEqualOne(a, c) { return a * c; }, 1), 1);
console.log(reduce([], function equalOne(n) { return n === 1; }, 30), 30);

// An array of integers. 0 <= arr.length >= 1000. Always valid numbers.
// A callback function to apply to each element of the array. The first parameter will apply to each element and the second to each index (e.g. fn(arr[i], i)).
// Return a number that represents the end calculation of reducing the array.

// Declare a result number equal to the init parameter.
// Use a for loop to have access to each index.
// Run the callback function. Pass through the element and current result. Update result.
// Return the result number.
