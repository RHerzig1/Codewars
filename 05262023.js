// Write a function that calculates the sum of each digit of a number

function sumDigits(number) {
  return [...String(Math.abs(number))].map(Number).reduce((a, c) => a + c, 0)
}

console.log(sumDigits(10), 1)
console.log(sumDigits(100), 1)
console.log(sumDigits(123), 6)
console.log(sumDigits(-123), 6)

// A positive or negative integer.
// Return the sum of each digit. Negative inputs are treated the same.

// Convert number to string.
// Split string.
// Iterate array, convert each elem to number.
// Iterate array, add each elem.
// Return sum.