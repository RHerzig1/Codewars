// Write a function that increments each element of an array, starting with 1.

const incrementer = (arr) => arr.map((elem, index) => (elem + index + 1) % 10);

console.log(incrementer([1, 2, 3, 4, 5]), [2, 4, 6, 8, 10]);
console.log(incrementer([0, 0, 0, 0, 0]), [1, 2, 3, 4, 5]);

// An array of integers. Always valid numbers. Always positive. Length >= 1.
// Return an array of numbers, with each number incremented by it's index. Start with 1. Return only the last digit.

// Use the map method to add index + 1 to each element.
// Use modulus 10 to return only the last digit.
