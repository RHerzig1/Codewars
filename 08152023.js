// Write a function that creates an array pyramid.

const pyramid = (num) =>
  Array(num)
    .fill()
    .map((_, index) => Array(index + 1).fill(1));

console.log(pyramid(0), []);
console.log(pyramid(1), [[1]]);
console.log(pyramid(2), [[1], [1, 1]]);
console.log(pyramid(3), [[1], [1, 1], [1, 1, 1]]);

// An integer >= 0.
// Return an array of n arrays where each subsequent array contains another element of 1.

// Use the Array constructor to declare an array of with num number of elements.
// Map through it and add a second array of index + 1 length, then fill with 1.
// Return the result.