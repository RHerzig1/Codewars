// Write a function that converts an array of strings into an array of numbers.

function toNumberArray(arr) {
  return arr.map(Number);
}

console.log(toNumberArray(["1", "2", "3"]), [1, 2, 3]);
console.log(toNumberArray(["1.1", "2.01", "3.001"]), [1.1, 2.01, 3.001]);
console.log(toNumberArray(["-1", "-2", "-3"]), [-1, -2, -3]);

// An array containing numbers as strings. Numbers may be floats or negative. No other values.
// Convert the strings into numbers and return the array.

// Map the Number operator.