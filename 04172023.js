// Write function that checks whether a number is a perfect square

function isSquare(num) {
  return Math.sqrt(num) % 1 === 0;
}

console.log(isSquare(4), true)
console.log(isSquare(5), false)
console.log(isSquare(-1), false)

// A positive or negative integer.
// Return a Boolean indicating whether or not the number is a perfect square.

// Use Math.sqrt() and the modulus to check if the result has no decimals.