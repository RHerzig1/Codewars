// Write a function that returns the number of digits in an integer.

function countDigits(n) {
  return String(n).length;
}

console.log(countDigits(123), 3);
console.log(countDigits(1234), 4);
console.log(countDigits(12345), 5);

// An integer greater than 0. Always a valid number.
// Return the number of digits within the parameter.

// Convert the number to a string.
// Return the length.