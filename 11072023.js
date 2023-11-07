// Write a function that transforms an array using a callback function. Do not use map().

function map(arr, fn) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const value = fn(arr[i], i);
    result.push(value);
  }

  return result;
}

console.log(map([1, 2, 3, 4, 5], function plusOne(n) { return n + 1; }), [2, 3, 4, 5, 6]);
console.log(map([1, 2, 3, 4, 5], function equalTen(n) { return 10; }), [10, 10, 10, 10, 10]);
console.log(map([1, 1, 1, 1, 1], function plusOneIndexe(n, i) { return i + 1; }), [2, 3, 4, 5, 6]);
console.log(map([], function plusone(n) { return n + 1; }), []);

// An array of integers. 0 <= arr.length >= 1000. Always valid numbers.
// A callback function to apply to each element of the array. The first parameter will apply to each element and the second to each index (e.g. fn(arr[i], i)).

// Declare a result array.
// Use a for loop to have access to each index.
// Run the callback function. Pass through the element and index. Push the result into the result array.
// Return the result array.