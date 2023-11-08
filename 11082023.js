// Write a function that filters an array using a callback function. Do not use filter().

function filter(arr, fn) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const bool = fn(arr[i], i);

    if (bool) {
      result.push(arr[i]);
    }
  }

  return result;
}

console.log(filter([1, 2, 3, 4, 5], function greaterThanOne(n) { return n > 1; }), [2, 3, 4, 5]);
console.log(filter([1, 2, 3, 4, 5], function equalTen(n) { return n === 10; }), []);
console.log(filter([1, 1, 1, 1, 1], function indexEqualOne(n, i) { return i === 1; }), [1]);
console.log(filter([], function equalOne(n) { return n === 1; }), []);

// An array of integers. 0 <= arr.length >= 1000. Always valid numbers.
// A callback function to apply to each element of the array. The first parameter will apply to each element and the second to each index (e.g. fn(arr[i], i)).
// Return an array containing only the elements that return truthy in the callback function.

// Declare a result array.
// Use a for loop to have access to each index.
// Run the callback function. Pass through the element and index. Push the result into the result array.
// Return the result array.
